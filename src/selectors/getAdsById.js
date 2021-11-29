import {Ads} from '../database/anuncios'

const getAdsById = ({id}) => {
    return anuncios.filter (anuncio => anuncio.id === id);
}