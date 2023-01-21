import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../../routes/protectedRoutes/ProtectedRoutes";
import Main from "../../pages/main/Main";
import PublicRoutes from "../../routes/publicRoutes/PublicRoutes";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

const AppRouter = () => {
    return(
        <Routes>
            <Route element={<ProtectedRoutes/>} path="/">
                <Route element={<Main/>} path='' />
            </Route>

            <Route element={<PublicRoutes/>} path=''>
                <Route element={<Login/>} path='login' />
                <Route element={<Register/>} path='register' />
            </Route>
        </Routes>
    )
}

export default AppRouter;