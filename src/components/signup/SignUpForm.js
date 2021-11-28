import { useState } from 'react';
import { useForm } from "react-hook-form";

import TextField from '@mui/material/TextField';

import SingleImage from '../layout/SingleImage'
import SubmitButton from '../common/SubmitButton';
import ValidationError from '../common/ValidationError';

import { uploadImg } from '../herlpers'

import './styles.css'

const styles = {
    style: {
        color: "white"
    }
}

const Upload = ({setIsSubmitting, setIsOpen}) => {
    const [profilePic, setProfilePic] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleFileChoosed = (e) => {
        const file = e.target.files[0]
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onloadend = () => {
            setProfilePic(fileReader.result)
        }
    }

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        setIsOpen(true)

        const { profilePic, ...userData } = data
        const url = await uploadImg(profilePic)
        userData["profile_pic"] = url

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, requestOptions)
            
            if(response.status === 200) {
                const data = await response.json()
                console.log("Usuario creado!")
                console.log(data)
                setIsSubmitting(false)
            }

            if(response.status === 500) {
                console.log("No se ha podido crear el usuario")
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form" autoComplete="off">
            <div className="grid-container">
                <div className="imgs-data">
                        <SingleImage
                            isDisabled={false}
                            register={register}
                            field="profilePic"
                            errors={errors}
                            image={profilePic}
                            handleFileChoosed={handleFileChoosed}
                            styles={{ borderRadius: "100%" }} />

                        {errors.profilePic && <ValidationError message="Debes ingresar una imagen de perfil"/>}
                </div>
                <div className="text-data">
                    <TextField
                        label="Username"
                        variant="filled"
                        size="small"
                        className="text-input"
                        InputLabelProps={styles}
                        InputProps={styles}
                        {...register("username", { required: true })} />
                    {errors.username && <ValidationError message="Debes ingresar un username" />}

                    <TextField
                        label="Nombre"
                        variant="filled"
                        size="small"
                        className="text-input"
                        InputLabelProps={styles}
                        InputProps={styles}
                        {...register("firstname", { required: true, pattern: /[a-zA-Z]/ })} />

                    {errors.firstname && errors.firstname.type === "required" && <ValidationError message="Debes ingresar un nombre" />}
                    {errors.firstname && errors.firstname.type === "pattern" && <ValidationError message="Sólo puedes ingresar letras" />}

                    <TextField
                        label="Apellido"
                        variant="filled"
                        size="small"
                        className="text-input"
                        InputLabelProps={styles}
                        InputProps={styles}
                        {...register("lastname", { required: true, pattern: /[a-zA-Z]/ })} />

                    {errors.lastname && errors.lastname.type === "required" && <ValidationError message="Debes ingresar un apellido" />}
                    {errors.lastname && errors.lastname.type === "pattern" && <ValidationError message="Sólo puedes ingresar letras" />}

                    <TextField
                        type="email"
                        label="Email"
                        variant="filled"
                        size="small"
                        className="text-input"
                        InputLabelProps={styles}
                        InputProps={styles}
                        {...register("email", { required: true })} />

                    {errors.email && <ValidationError message="Debes ingresar un email" />}

                    <TextField
                        type="password"
                        label="Contraseña"
                        variant="filled"
                        size="small"
                        className="text-input"
                        InputLabelProps={styles}
                        InputProps={styles}
                        {...register("password", { required: true })} />

                    {errors.password && <ValidationError message="Debes ingresar una contraseña" />}
                </div>

                <div className="button-cont">
                    <SubmitButton 
                        value="Registrarse" 
                        style={{color: "white", fontWeight: "bold" }}/>

                    <p style={{ marginTop: "10px", color: "#AAA" }}>
                        ¿Ya tienes una cuenta?
                        <span style={{ color: "white" }}>Inicia sesión</span>
                    </p>
                </div>
            </div> 
        </form>
    )
}

export default Upload