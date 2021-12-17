import {createContext,useReducer} from 'react'
import { AUTH_TYPES } from '../actions/authActions'
import {authInitState, authReducer } from '../reducers/authReducers'

const authContext=createContext(authInitState)

function AuthProvider({children}){
  const [state, dispatch] = useReducer(authReducer, authInitState)
  
  const onLogin=(payload)=>{
    dispatch({type:AUTH_TYPES.LOGIN,payload})
  }
  
  const onLogout=()=>{
    dispatch({type:AUTH_TYPES.LOGOUT})
  }
  
  return(
    <authContext.Provider value={{ state, onLogin, onLogout}}>
      {children}
    </authContext.Provider>
  )
}

export {authContext,AuthProvider}
