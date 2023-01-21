import { Container } from "@mui/system"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import AppRouter from "./components/appRouter/AppRouter"

function App() {

  return (
    <Container maxWidth='sm'>
      <AppRouter/>
    </Container>
  )
}

export default App
