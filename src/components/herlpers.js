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

module.exports = {
    uploadImg,
    createVideogame
}