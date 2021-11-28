import {createContext} from 'react'
import Login from '../../views/Login'
import { AUTH_TYPES } from '../actions/authActions'
import {authInitState, authReducer } from '../reducers/authReducers'


const authContext=createContext(authInitState)

const [authState, dispatch] = useReducer(authReducer, authContext)

const loginHandler=(user)=>{
  dispatch({type:AUTH_TYPES.LOGIN,user})
}

const logoutHandler=()=>{
  dispatch({type:AUTH_TYPES.LOGOUT})
}

const auth={
  ...authState,
  onLogin:loginHandler,
  onLogout:logoutHandler
}

function authProvider({children}){
  return(
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export {authContext,authProvider}
