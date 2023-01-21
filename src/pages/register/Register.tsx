import { Button, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../api/authApi";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthFormInputs } from "../../interface/interface";

const schema = yup.object({
    email: yup.string().required('User email is required'),
    password: yup.string().required('User password is required')
}).required()

const Register = () => {
    const [register, {isLoading}] = useRegisterMutation()
    const navigate = useNavigate()
    const {control, handleSubmit, formState: {errors}} = useForm<AuthFormInputs>({
        resolver: yupResolver(schema)
    })


    const onSubmit = async (data:AuthFormInputs) => {
        try {
            await register(data).unwrap()
            navigate('/login')
        } catch(err) {
            console.log('error')
        }
    }


    return(
        <Paper sx={{p: 3, borderRadius: '10px'}} elevation={3}>
            <Typography sx={{textAlign: 'center'}} variant='h4' component='div'>Зарегистрироваться</Typography>
            <Controller 
                name='email'
                control={control}
                render={({field: {onChange, ref}}) => (
                    <TextField 
                    onChange={onChange} 
                    type='email' 
                    name='email'
                    inputRef={ref}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                    sx={{width: '100%', my: 2}} 
                    label='Email'/>
                )}
            />
            <Controller
                name='password'
                control={control}
                render={({field: {onChange, ref}}) => (
                    <TextField 
                    onChange={onChange} 
                    type='password' 
                    name='password'
                    inputRef={ref} 
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ''}
                    sx={{width: '100%', my: 2}} 
                    label='Пароль'/>
                )}
            />
            
            <Button type='submit' onClick={handleSubmit(onSubmit)} sx={{width: '100%', height: '50px', my: 2, borderRadius: '10px'}} variant="contained">Далее</Button>
            <Typography sx={{color: '#C1C1CB', fontSize: 14, textAlign: 'center', cursor: 'pointer'}} >
                <Link style={{color: 'inherit', textDecoration: 'none'}} to={'/login'}>Войти</Link>
            </Typography>
        </Paper>
    )
}

export default Register;