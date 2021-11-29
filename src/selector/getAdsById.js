import { ads } from "../data/ads"


export const getAdsById = (id = '') => {
    return ads.find(ad => ad.id === id)
}