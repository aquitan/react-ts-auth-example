import { useContext, useMemo, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useLocalStorage } from "./useLocalStorage"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "../api/authApi"
import { checkLogin } from '../utils/checkLogin'

type AuthContextProviderType = {
    children: React.ReactNode
}
type UserLoginType = {
    email: string,
    password: string
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children}:AuthContextProviderType) => {
    const [login, {data, isLoading}] = useLoginMutation()
    const [user, setValue] = useLocalStorage('user', null)
    const navigate = useNavigate()

    const changeAuth = async (userLogin:UserLoginType) => {
        try {
            const res = await login(userLogin).unwrap()
            if (setValue(checkLogin(userLogin, res))) {
                navigate('/')
            } else {
                navigate('/login')
            }
        } catch(err) {
            console.log('error')
            alert('wrong user')
        }
        
    }
    const logout = () => {
        setValue(null)
        navigate('/login')
    }

    const value = useMemo(() => {
        console.log('use memo', user)
        return{
            changeAuth,
            logout,
            user,
        }
    }, [user])

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}