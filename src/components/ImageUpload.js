import { useState } from 'react';

// import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Input from '@mui/material/Input';

import '../styles/ImageUpload.css'

export default function ImageUpload() {
    const [mainImage, setMainImage] = useState("");
    const [optionalImages, setOptionalImages] = useState([]);



    const handleFileChoosed = (e) => {
        const file = e.target.files[0]
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onloadend = () => {
            setMainImage(fileReader.result)
        }
    }

    const handleMultipleFiles = (e) => {
        const fileList = e.target.files
        const files = [...fileList]

        if (files.length + optionalImages.length <= 4) {
            files.forEach(file => {
                const fileReader = new FileReader();

                fileReader.readAsDataURL(file);

                fileReader.onloadend = () => {
                    setOptionalImages(prevImages => [...prevImages, fileReader.result])
                }
            })
        } else {
            console.log("No puede escoger más de 4 imágenes")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        tryUpload(mainImage, true)
        optionalImages.forEach(image => tryUpload(image, false))
    }

    const tryUpload = (image, isMainImg) => {
        const formData = new FormData()
        formData.append('file', image);
        formData.append('upload_preset', CLOUDINARY_PRESET)
        
        const requestOptions = {
            method: 'POST',
            body: formData
        };

        try {
            fetch(CLOUDINARY_URL, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(isMainIMg) mainImgURL = data.secure_url
                    else optionalImages.push(data.secure_url)
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <form>
            <Card sx={{ maxWidth: 250 }} height="300">
                <CardMedia
                    component="img"
                    alt="Imagen principal"
                    height="255"
                    image={mainImage} />

                <CardActions className="img-picker-cont">
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChoosed(e)}
                        className="img-picker"
                        id="main-img-picker" />
                    <label
                        htmlFor="main-img-picker"
                        className="img-picker-label">
                        Escoger imagen
                    </label>
                </CardActions>
            </Card>

            <div>
                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {optionalImages.map((img) => (
                        <ImageListItem key={img}>
                            <img
                                src={img}
                                loading="lazy"
                                alt=""
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                <div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleMultipleFiles(e)}
                        className="img-picker"
                        id="album-picker"
                        multiple />
                    <label
                        htmlFor="album-picker"
                        className="img-picker-label">
                        Escoger imágenes
                    </label>
                </div>
            </div>

            <Input type="submit" onClick={(e) => handleSubmit(e)}/>
        </form>
    )
}
