import { AUTH_TYPES } from "../actions/authActions"

const authInitState={
  id:'',
  username:'',
  email:'',
  token:'',
  profilePic:'',
  isLoggedIn:false
}

const STORAGE={
  KEY:'twolifes'
}

function authReducer(state,action){
  switch(action.type){
    case AUTH_TYPES.LOGIN:
      // localStorage.setItem(STORAGE.KEY,action.payload.token)
      return { ...state, ...action.payload, isLoggedIn: true}
    case AUTH_TYPES.LOGOUT:
      // localStorage.removeItem(STORAGE.KEY)
      return authInitState
    default:
      return state
  }
}

export {authReducer,authInitState}