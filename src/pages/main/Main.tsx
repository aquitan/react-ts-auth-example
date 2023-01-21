import { Button, Paper, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuthContext";

const Main = () => {
    const {logout} = useAuth()

    return(
        <Paper sx={{p: 3}} elevation={3}>
            <Typography variant='h2' component='h2'>Main</Typography>
            <Button onClick={() => logout()} variant='contained'>Logout</Button>
        </Paper>
    )
}

export default Main;