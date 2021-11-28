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

const createVideogame = async (videogameTitle, setIdVideogame) => {
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

const postResource = async (body, path, isAd) => {
    if (isAd) body.idAdvertiser = "61520646ae73563db061bb36"

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, requestOptions)
        
        if(response.status === 200) {
            const data = await response.json()
            console.log("Recurso creado!")
            console.log(data)
            return true
        }

        console.log("No se ha podido crear el resurso. Status: ", response.status)
        return false
    }
    catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    uploadImg,
    createVideogame,
    postResource
}