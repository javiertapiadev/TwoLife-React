import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import SingleImage from './SingleImage';
import MultipleImages from './MultipleImages';
import AdFormInputs from './AdFormInputs';
import AdFormButton from './AdFormButton';

import '../../styles/ImageUpload.css'

export default function AdForm() {
    // Lista de plataformas y opciones de autocompletado
    const [platformList, setPlatformList] = useState([]);
    const [videogameData, setVideogameData] = useState([]);

    // Imágenes para preview
    const [mainImg, setMainImg] = useState("");
    const [optionalImgs, setOptionalImgs] = useState([]);
    
    // Datos a enviar al POST de anuncios
    const [mainImgURL, setMainImgURL] = useState("");
    const [optionalImgsURL, setOptionalImgsURL] = useState([]);
    const [idVideogame, setIdVideogame] = useState("");
    const [videogameTitle, setVideogameTitle] = useState("");
    const [adData, setAdData] = useState({})

    // Feedback para el usuario
    const [isDisabled, setIsDisabled] = useState(false);
    const [open, setOpen] = useState(false);
    const [isOverLimit, setIsOverLimit] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/davvj8x6l/image/upload'
    // const CLOUDINARY_PRESET = 'dx1lr4o8'
    // const TL_PLATF_URL = 'https://twolifes.herokuapp.com/v1/platforms'
    // const TL_TITL_URL = 'https://twolifes.herokuapp.com/v1/videogames/titles'
    // const TL_VDGM_POST = 'http://localhost:4001/v1/videogames'

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
        .then(data => {
            setVideogameData(data)
        })
    })

    // Preview de imagen principal
    const handleFileChoosed = (e) => {
        const file = e.target.files[0]
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onloadend = () => {
            setMainImg(fileReader.result)
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

    const onSubmit = (data) => {
        // Deshabilitar form
        setOpen(!open)
        setIsDisabled(!isDisabled)
        setIsSubmitting(!isSubmitting)

        // Preparar body del POST
        const { condition, description, idPlatform, price } = data
        setAdData({ condition, description, idPlatform, price })

        // Si el usuario ingresó un juego nuevo, hay que crearlo
        if (idVideogame.length > 0) setAdData(prevState => { return { ...prevState, idVideogame } })
        else createVideogame()

        // Subir imágenes
        tryUpload(mainImg, true)
        optionalImgs.forEach(image => tryUpload(image, false))
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
            setAdData(prevState => { return { ...prevState, idVideogame } })
        }
        catch (error) {
            console.log(error)
        }
    }

    // Subir imágenes y obtener URLs
    const tryUpload = async (image, isMainImg) => {
        
        const formData = new FormData()
        formData.append('file', image);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/images`, requestOptions)
            const data = await response.json()

            if (isMainImg) await setMainImgURL(data.secure_url)
            else await setOptionalImgsURL(prevURLs => [...prevURLs, data.secure_url])
        }
        catch (error) {
            console.log(error)
        }
    }

    // Añadir URLs de imágenes al body del POST
    useEffect(() => {
        if (mainImgURL !== "" && optionalImgsURL.length === optionalImgs.length) {
            setAdData(prevState => { return { ...prevState, mainImgURL, optionalImgsURL } })
        }
    }, [mainImgURL, optionalImgsURL])

    // Petición POST
    useEffect(() => {
        if (Object.keys(adData).includes("mainImgURL")) { console.log("yastas", adData); setIsSubmitting(!isSubmitting)}
    }, [adData])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
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
                            errors={errors}
                            mainImg={mainImg}
                            handleFileChoosed={handleFileChoosed}/>
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
                    <AdFormButton isDisabled={isDisabled} />
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
