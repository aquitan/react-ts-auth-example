import { Button, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { AuthFormInputs } from "../../interface/interface";


const schema = yup.object({
    email: yup.string().required('User email is required'),
    password: yup.string().required('User password is required')
}).required()

const Login = () => {
    const {changeAuth} = useAuth()
    const {handleSubmit, formState: {errors}, control} = useForm<AuthFormInputs>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data:AuthFormInputs) => {
        console.log('data', data)
        changeAuth(data)
    }


    return(
        <Paper sx={{p: 3, borderRadius: '10px'}} elevation={3}>
            <Typography sx={{textAlign: 'center'}} variant='h4' component='div'>Войти</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='email'
                    control={control}
                    render={({
                        field: {ref, onChange}
                    }) => (
                    <TextField
                        name={'email'}
                        type='email'
                        id='email' 
                        inputRef={ref}
                        onChange={onChange}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                        sx={{width: '100%', my: 2}} 
                        label='Email'/>
                    )}
                />

                <Controller 
                    name='password'
                    control={control}
                    render={({
                        field: {ref, onChange }
                    }) => (
                        <TextField 
                            name={'password'} 
                            type='password'
                            inputRef={ref}
                            onChange={onChange}
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : ''}
                            id='password'
                            sx={{width: '100%', my: 2}} 
                            label='Пароль'/>
                    )}
                />
                
                

                <Button type="submit" sx={{width: '100%', height: '50px', my: 2, borderRadius: '10px'}} variant="contained">Далее</Button>
            </form>
            <Typography sx={{color: '#C1C1CB', fontSize: 14, textAlign: 'center', cursor: 'pointer'}}>
                <Link style={{color: 'inherit', textDecoration: 'none'}} to={'/register'}>Зарегистрироваться</Link>
            </Typography>
        </Paper>
    )
}

export default Login;