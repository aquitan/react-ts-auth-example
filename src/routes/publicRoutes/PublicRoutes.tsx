import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuthContext"

const PublicRoutes = () => {
    const {user} = useAuth()

    if (user) {
        return <Navigate to='/' />
    }

    return(
        <>
            <Outlet/>
        </>
    )
}

export default PublicRoutes;