import React from 'react'
import {getAdsById} from '../../selectors/getAdsById'

export const adsList = ({id}) => {
    
    const ads = getAdsById ({id})
    
    return (
        <>
        <h1>Ads List</h1>

        <ul>

        </ul>
        </>
    )
}
