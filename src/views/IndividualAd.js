import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Ad from '../components/ads/Ad'
require('dotenv').config();


function IndividualAd () {
    const { id } = useParams()
    const [ad, setAd] = useState({})
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/ads/${id}`)
            .then(response => {
                Promise.all([
                    axios.get(`${process.env.REACT_APP_API_URL}/videogames/${response.data.idVideogame}`),
                    axios.get(`${process.env.REACT_APP_API_URL}/platforms/${response.data.idPlatform}`),
                    axios.get(`${process.env.REACT_APP_API_URL}/users/${response.data.idAdvertiser}`)
                ]).then(([videogame, platform, advertiser]) => {
                    setAd({
                        ...response.data,
                        videogame: videogame.data,
                        platform: platform.data.platform,
                        advertiser: advertiser.data
                    })
                    setFlag(true)
                })
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <main>
            {flag && <Ad ad={ad}/>}
        </main>
    )
}

export default IndividualAd;
