import {useState,useEffect} from 'react'
import { Box } from "@mui/system"
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import SingleImage from '../components/layout/SingleImage'
import ValidationError from '../components/common/ValidationError';
import SubmitButton from '../components/common/SubmitButton';
import Button from '@restart/ui/esm/Button';
import { uploadImg, postResource } from '../components/helpers'
import '../styles/Account.css'
function Account() {
  const [isPosted, setIsPosted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [profilePic, setProfilePic] = useState("")
  useEffect(()=>{
    const userInfo = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }
      )
      try {
        const data = await response.json()
        return data
      } catch (error) {
        console.log(error)
      }
    }
    const user=userInfo()
    
  },[])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmitImage = async (data) => {
    setIsSubmitting(true)
    setIsOpen(true)

    const { profile_pic, ...userData } = data
    const url = await uploadImg(profilePic)
    userData["profile_pic"] = url

    const posted = await postResource(userData, "users")
    setIsSubmitting(false)
    setIsPosted(posted)
  }
  const onSubmit = async (data) => {
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
    try {
      const data = await response.json()


    } catch (error) {
      console.log(error)
    }

  }
  return (
    <Box sx={{ display: 'flex',backgroundColor: '#E5E7EB', width: '100%',height:'100vh', padding: '20px' }}>
      <div className='layout'>
        <div className='title'>
          <h2>Account Settings</h2>
        </div>
        <div className="imgs-data">
          <SingleImage
            isDisabled={false}
            register={register}
            field="profile_pic"
            errors={errors}
            image={profilePic}
            setImg={setProfilePic}
            styles={{ borderRadius: "100%" }} />
            {errors.profilePic && <ValidationError message="Debes ingresar una imagen de perfil"/>}
        </div>
        <div className='form'>
          <form className='card-form' onSubmit={handleSubmit(onSubmit)} >
            <Box sx={{ display: 'flex',flexDirection:'column', padding: '10px', width: '100%' }}>
              <Box sx={{ width: '100%' }} >
                <TextField
                  type="text"
                  label="Nombre"
                  variant="standard"
                  size="small"
                  className="text-input"
                  {...register("firstName", { required: true })} />
                {/* {errors.email && <ValidationError message="Debes ingresar un email" />} */}
                <TextField
                  type="text"
                  label="Apellido Paterno"
                  variant="standard"
                  size="small"
                  className="text-input"
                  {...register("lastName", { required: true })} />
                {/*  {errors.password && <ValidationError message="Debes ingresar una contraseña" />} */}
                <TextField
                  type="email"
                  label="Email"
                  variant="standard"
                  size="small"
                  className="text-input"
                  disabled
                  {...register("email", { required: true })} />
                {/* {errors.email && <ValidationError message="Debes ingresar un email" />} */}
                <TextField
                  type="text"
                  label="Rol"
                  variant="standard"
                  size="small"
                  className="text-input"
                  disabled
                  {...register("type", { required: true })} />
                {/* {errors.email && <ValidationError message="Debes ingresar un email" />} */}
              </Box>
              <SubmitButton 
                value="Guardar" 
                style={{color: "white", fontWeight: "bold",margin:'10px', textAlign:'right' }}/>
                {/* <p style={{ marginTop: "10px", color: "#AAA" }}>¿Ya tienes una cuenta? <span style={{ color: "white" }}>Inicia sesión</span></p> */}
            </Box>
          </form>
        </div>
      </div>
    </Box>
  )
}

export default Account