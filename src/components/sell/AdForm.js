import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import Grid from '@mui/material/Grid';

import { SingleImage, PickImages, SubmitButton } from '../common';
import AdFormInputs from './AdFormInputs';

import { uploadImg, createVideogame, postResource } from '../helpers';

import './styles.css'

export default function AdForm({setIsSubmitting, setIsOpen, setIsPosted}) {
    const [platformList, setPlatformList] = useState([]);
    const [videogameData, setVideogameData] = useState([]);

    const [mainImgFile, setMainImgFile] = useState("");
    const [optionalImgs, setOptionalImgs] = useState([]);
    
    const [idVideogame, setIdVideogame] = useState("");
    const [videogameTitle, setVideogameTitle] = useState("");

    const [isDisabled, setIsDisabled] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // Llenar listado de plataformas
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/platforms`)
            .then(res => res.json())
            .then(data => setPlatformList(data))
    }, [])

    // Llenar opciones de autocompletado de videojuegos
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/videogames/titles`)
        .then(res => res.json())
        .then(data => { setVideogameData(data) })
    }, [])

    const onSubmit = async (data) => {
        // Deshabilitar form
        setIsDisabled(!isDisabled)
        setIsOpen(true)
        setIsSubmitting(true)

        const { mainImg, videogame, ...adData } = data

        if (idVideogame === '') adData.idVideogame = await createVideogame(videogameTitle, setIdVideogame)
        else adData.idVideogame = idVideogame

        adData.mainImgURL = await uploadImg(mainImgFile)
        adData.optionalImgsURL = await Promise.all( optionalImgs.map(async (image) => uploadImg(image)) )

        const posted = await postResource(adData, "ads", true)
        setIsSubmitting(false)
        setIsPosted(posted)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="ad-form">
            <div className="grid-container">
                {/* Preview de imágenes */}
                <Grid
                    container
                    justifyContent="space-around"
                    direction={{ xs: "column", sm: "row", md: "column" }}
                    className="imgs-data">
                        <SingleImage
                            image={mainImgFile}
                            styles={{borderRadius: "15px"}}
                            form={{
                                isDisabled,
                                register,
                                field: "mainImg",
                                errors,
                                setImg: setMainImgFile
                            }}
                        />
                        <PickImages
                            images={optionalImgs}
                            setOptionalImgs={setOptionalImgs}
                            isDisabled={isDisabled} />
                </Grid>

                {/* Inputs que no son imágenes */}
                <Grid justifyContent="space-around" className="text-data">
                    <h1>Publicar un anuncio</h1>
                    <AdFormInputs
                        isDisabled={isDisabled}
                        register={register}
                        errors={errors}
                        platformList={platformList}
                        videogameData={videogameData}
                        setIdVideogame={setIdVideogame}
                        setVideogameTitle={setVideogameTitle} />
                </Grid>

                <Grid item order={{ xs: 3 }} className="button-cont">
                    <SubmitButton isDisabled={isDisabled} value="Crear anuncio" style={{ color: "white" }}/>
                </Grid>
            </div>
        </form>
    )
}
