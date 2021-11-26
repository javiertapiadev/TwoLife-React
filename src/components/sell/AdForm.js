import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import SingleImage from '../layout/SingleImage';
import MultipleImages from './MultipleImages';
import AdFormInputs from './AdFormInputs';
import SubmitButton from '../common/SubmitButton';

import './styles.css'

export default function AdForm() {
    // Lista de plataformas y opciones de autocompletado
    const [platformList, setPlatformList] = useState([]);
    const [videogameData, setVideogameData] = useState([]);

    // Imágenes para preview
    const [mainImgFile, setMainImgFile] = useState("");
    const [optionalImgs, setOptionalImgs] = useState([]);
    
    // Datos a enviar al POST de anuncios
    const [idVideogame, setIdVideogame] = useState("");
    const [videogameTitle, setVideogameTitle] = useState("");

    // Feedback para el usuario
    const [isDisabled, setIsDisabled] = useState(false);
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Esto lo podría mandar al multiple images
    const [isOverLimit, setIsOverLimit] = useState(false);

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

    // Preview de imagen principal
    const handleFileChoosed = (e) => {
        const file = e.target.files[0]
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onloadend = () => {
            setMainImgFile(fileReader.result)
        }
    }

    // Preview de imágenes extra
    const handleMultipleFiles = (e) => {
        const fileList = e.target.files
        const files = [...fileList]

        if (files.length + optionalImgs.length <= 4) {
            setIsOverLimit(false)

            files.forEach(file => {
                const fileReader = new FileReader();

                fileReader.readAsDataURL(file);

                fileReader.onloadend = () => {
                    setOptionalImgs(prevImgs => [...prevImgs, fileReader.result])
                }
            })
        } else {
            setIsOverLimit(true)
        }
    }

    const handleDeleteImg = (e) => {
        let index = e.currentTarget.id
        const aux = [...optionalImgs]

        aux.splice(index, 1)
        setOptionalImgs(aux)
    }

    const createVideogame = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: videogameTitle.toLowerCase(),
                synopsis: "",
                releaseDate: "0001-01-01T00:00:00.000Z",
                ageCategory: ""
            })
        }
        
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/videogames`, requestOptions)
            const data = await response.json()
            
            setIdVideogame(data._id)
            return data._id
        }
        catch (error) {
            console.log(error)
        }
    }

    const uploadImg = async (image) => {
        const formData = new FormData()
        formData.append('file', image);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/images`, requestOptions)
            const data = await response.json()
            
            return data.secure_url
        }
        catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async (data) => {
        // Deshabilitar form
        // setOpen(!open)
        // setIsDisabled(!isDisabled)
        // setIsSubmitting(!isSubmitting)

        const { mainImg, videogame, ...adData } = data

        if (idVideogame === '') adData.idVideogame = await createVideogame()
        else adData.idVideogame = idVideogame

        adData.mainImgURL = await uploadImg(mainImgFile)
        adData.optionalImgsURL = await Promise.all( optionalImgs.map(async (image) => uploadImg(image)) )
        
        console.log(adData)
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
                            handleFileChoosed={handleFileChoosed}
                            styles={{borderRadius: "15px"}}/>
                        <MultipleImages
                            optionalImgs={optionalImgs}
                            handleDeleteImg={handleDeleteImg}
                            handleMultipleFiles={handleMultipleFiles}
                            isDisabled={isDisabled}
                            isOverLimit={isOverLimit}
                            setIsOverLimit={setIsOverLimit} />
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

                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open} >

                    { (isSubmitting && <CircularProgress color="inherit" />) ||
                        <div>Anuncio creado!</div>
                    }
                </Backdrop>
            </div>
        </form>
    )
}
