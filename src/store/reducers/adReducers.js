import { AD_TYPES } from "../actions/adActions"

const adInitState={
  ads:[]
}

function adReducer(state,action){
  switch (action.type) {
    case AD_TYPES.CREATE:
      return {
        ...state,
        ads: [...state.ads, action.payload],
      }
    case AD_TYPES.UPDATE:
      const updatedAd = action.payload;
      const updatedAds = state.ads.map((ad) => {
        if (ad.id === updatedAd.id) {
          return updatedAd;
        }
        return ad;
      })
      return {
        ...state,
        ads: updatedAds
      }
    case AD_TYPES.DELETE:
      return {
        ...state,
        ads: state.ads.filter(
          (ad) => ad.id !== action.payload
        )
      }
    default:
      return state;
  }
}

export {adReducer,adInitState}