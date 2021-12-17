import {createContext,useReducer} from 'react'
import { AD_TYPES } from '../actions/adActions'
import {adInitState, adReducer } from '../reducers/adReducers'

const adContext=createContext(adInitState)

function AdProvider({children}){
  const [adState, dispatch] = useReducer(adReducer, adContext)
  const createHandler=(payload)=>{
    dispatch({type:AD_TYPES.CREATE,payload})
  }
  const updateHandler=(payload)=>{
    dispatch({type:AD_TYPES.DELETE,payload})
  }
  const deleteHandler=(payload)=>{
    dispatch({type:AD_TYPES.UPDATE,payload})
  }
  const ad={
    ...adState,
    onCreate:createHandler,
    onUpdate:updateHandler,
    onDelete:deleteHandler
  }
 
  return(
    <adContext.Provider value={ad}>
      {children}
    </adContext.Provider>
  )
}

export {adContext,AdProvider}
