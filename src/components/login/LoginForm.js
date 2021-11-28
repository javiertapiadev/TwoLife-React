import { useState } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import './loginForm.css'
import { Card } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';



function onLogin(){
  const 
}

async function login(){
 
}

function LoginForm(){ 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <form onSubmit={handleSubmit(onLogin)} sx={{width:'100vw'}} >
      <div className='card-form' /* sx={{ display: 'flex',flexDirection:'column' , padding:'10px', width:'90vw', height:'70vh',justifyContent:'center'}} */>
        <Box>

        </Box>
        <Box sx={{display: 'flex', flexDirection:'column',gap:5, height:'70vh'}}>
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
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', margin:'10px'}}>
            <Button sx={{width:'100%',color: "white", fontWeight: "bold" }}>Login</Button>
            {/* <p style={{ marginTop: "10px", color: "#AAA" }}>¿Ya tienes una cuenta? <span style={{ color: "white" }}>Inicia sesión</span></p> */}
        </Box>
      </div> 
    </form>
  )

}

export default LoginForm