import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Ad from '../components/ads/Ad'
require('dotenv').config();


function IndividualAd () {
    const { id } = useParams()
    const [ad, setAd] = useState({})

    useEffect(() => {
        const fetchAdData = async () => {
            const url = `${process.env.REACT_APP_API_URL}/ads/${id}?populate=[videogame,platform,advertiser]`
            const response = await axios.get(url)
            console.log(response)
            setAd(response.data)
        }

        fetchAdData()
    }, [])

    return (
        <>
            {Object.keys(ad).length > 0 && <Ad ad={ad}/>}
        </>
    )
}

export default IndividualAd;
