import { useState } from 'react';
import { useForm } from "react-hook-form";

import TextField from '@mui/material/TextField';

import SingleImage from '../layout/SingleImage'
import SubmitButton from '../common/SubmitButton';
import ValidationError from '../common/ValidationError';

import { uploadImg, postResource } from '../helpers'

import './styles.css'

const styles = {
    style: {
        color: "white"
    }
}

const Upload = ({setIsSubmitting, setIsOpen, setIsPosted}) => {
    const [profilePic, setProfilePic] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        setIsOpen(true)

        const { profile_pic, ...userData } = data
        const url = await uploadImg(profilePic)
        userData["profile_pic"] = url

        const posted = await postResource(userData, "users")
        setIsSubmitting(false)
        setIsPosted(posted)
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form" autoComplete="off">
            <div className="grid-container">
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