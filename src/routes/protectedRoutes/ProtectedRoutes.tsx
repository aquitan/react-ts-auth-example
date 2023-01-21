import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuthContext"

const ProtectedRoutes = () => {
    const {user} = useAuth()

    if (!user) {
        return <Navigate to='/login' />
    }

    return(
        <>
            <Outlet/>
        </>
    )
}

export default ProtectedRoutes;