import { useState,useContext } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import './loginForm.css'
import { Card } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import { authContext } from '../../store/contexts/authContext';
import { AUTH_TYPES } from '../../store/actions/authActions';



function LoginForm(){ 
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

const authState=useContext(authContext)

 const onSubmit=async (data)=>{
  console.log('login ',data)
  const response = await fetch(`${process.env.REACT_APP_API_URL}login`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  try{
    const data = await response.json()
    console.log('register ',data)
    authState.onLogin(data)
    console.log('authcontext ',authState.username)
    
  }catch(error){
    console.log(error)
  }

}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='card-form' /* sx={{ display: 'flex',flexDirection:'column' , padding:'10px', width:'90vw', height:'70vh',justifyContent:'center'}} */>
        <Box>

        </Box>
        <Box sx={{display: 'flex', flexDirection:'column',gap:3}}>
          <TextField
            type="email"
            label="Email"
            variant="filled"
            size="small"
            className="text-input"
            InputLabelProps={{className:'input-text-color'}}
            InputProps={{className:'input-text-color'}}
            {...register("email", { required: true })} />
          {/* {errors.email && <ValidationError message="Debes ingresar un email" />} */}
          <TextField
            type="password"
            label="Contraseña"
            variant="filled"
            size="small"
            className="text-input"
            InputLabelProps={{className:'input-text-color'}}
            InputProps={{className:'input-text-color'}}
            {...register("password", { required: true })} />
          {/*  {errors.password && <ValidationError message="Debes ingresar una contraseña" />} */}
          <Box sx={{display:'flex', flexDirection:'column', margin:'10px'}}>
            <Button type='onSubmit' sx={{width:'100%',color: "white", fontWeight: "bold" }}>Login</Button>
            {/* <p style={{ marginTop: "10px", color: "#AAA" }}>¿Ya tienes una cuenta? <span style={{ color: "white" }}>Inicia sesión</span></p> */}
        </Box>
        </Box>
       
      </div> 
    </form>
  )

}

export default LoginForm