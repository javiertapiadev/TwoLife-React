import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import Grid from '@mui/material/Grid';

import SingleImage from '../layout/SingleImage';
import MultipleImages from './MultipleImages';
import AdFormInputs from './AdFormInputs';
import SubmitButton from '../common/SubmitButton';

import { uploadImg, createVideogame } from '../herlpers';

import './styles.css'

export default function AdForm({setIsSubmitting, setIsOpen}) {
    // Lista de plataformas y opciones de autocompletado
    const [platformList, setPlatformList] = useState([]);
    const [videogameData, setVideogameData] = useState([]);

    // Imágenes para preview
    const [mainImgFile, setMainImgFile] = useState("");
    const [optionalImgs, setOptionalImgs] = useState([]);
    
    // Datos a enviar al POST de anuncios
    const [idVideogame, setIdVideogame] = useState("");
    const [videogameTitle, setVideogameTitle] = useState("");

    // Deshabilitar inputs
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

        console.log("Listo!", adData)
        setIsSubmitting(false)
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
                            isDisabled={isDisabled}
                            register={register}
                            field="mainImg"
                            errors={errors}
                            image={mainImgFile}
                            setImg={setMainImgFile}
                            styles={{borderRadius: "15px"}}/>
                        <MultipleImages
                            optionalImgs={optionalImgs}
                            setOptionalImgs={setOptionalImgs}
                            isDisabled={isDisabled}/>
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
