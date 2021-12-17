import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom'

import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';

import { authContext } from '../../store/contexts/authContext';
import './loginForm.css'

function LoginForm() {
  const location = useLocation()
  const navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const auth = useContext(authContext)

  const onSubmit = async (data) => {

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )

      const userData = await response.json()
      console.log('register ', userData)

      if (userData){
        auth.onLogin(userData)
        navigate(from, { replace: true });
        console.log('authcontext ',auth) // Esta impresión no muestra el contexto en tiempo real
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='card-form' /* sx={{ display: 'flex',flexDirection:'column' , padding:'10px', width:'90vw', height:'70vh',justifyContent:'center'}} */>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            type="email"
            label="Email"
            variant="filled"
            size="small"
            className="text-input"
            InputLabelProps={{ className: 'input-text-color' }}
            InputProps={{ className: 'input-text-color' }}
            {...register("email", { required: true })} />
          {/* {errors.email && <ValidationError message="Debes ingresar un email" />} */}
          <TextField
            type="password"
            label="Contraseña"
            variant="filled"
            size="small"
            className="text-input"
            InputLabelProps={{ className: 'input-text-color' }}
            InputProps={{ className: 'input-text-color' }}
            {...register("password", { required: true })} />
          {/*  {errors.password && <ValidationError message="Debes ingresar una contraseña" />} */}
          <Box sx={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
            <Button type='onSubmit' sx={{ width: '100%', color: "white", fontWeight: "bold" }}>Login</Button>
            {/* <p style={{ marginTop: "10px", color: "#AAA" }}>¿Ya tienes una cuenta? <span style={{ color: "white" }}>Inicia sesión</span></p> */}
          </Box>
        </Box>

      </div>
    </form>
  )
}

export default LoginForm