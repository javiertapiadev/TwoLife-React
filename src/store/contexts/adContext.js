import {createContext,useReducer} from 'react'
import { AD_TYPES } from '../actions/authActions'
import {adInitState, adReducer } from '../reducers/authReducers'


const adContext=createContext(adInitState)

function AuthProvider({children}){
  const [adState, dispatch] = useReducer(authReducer, adContext)
  const createHandler=(payload)=>{
    dispatch({type:AD_TYPES.CREATE,payload})
  }
  const updateHandler=(payload)=>{
    dispatch({type:AD_TYPES.DELETE,payload})
  }
  const deleteHandler=()=>{
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

export {adContext,AuthProvider}
