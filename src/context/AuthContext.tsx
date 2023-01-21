import { createContext } from "react"


type AuthContextType = {
    user: boolean,
    changeAuth: (user:{email:string, password:string}) => Promise<void> | null,
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
    user: false,
    changeAuth: () => null,
    logout: () => null
})