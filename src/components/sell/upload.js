import { useState, useEffect } from 'react';
import SingleImage from './SingleImage'

export default function Upload() {
    const [mainImg, setMainImg] = useState("");

    const handleFileChoosed = (e) => {
        const file = e.target.files[0]
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onloadend = () => {
            setMainImg(fileReader.result)
        }
    }

    const handleSubmit = async (e) => {
        console.log("Hey")
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', mainImg);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/images`, requestOptions)
            const data = await response.json()
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <SingleImage
            isDisabled={false}
            mainImg={mainImg}
            handleFileChoosed={handleFileChoosed}/>
            
            <input type="submit" onClick={(e) => handleSubmit(e)}/>
        </>
    )
}