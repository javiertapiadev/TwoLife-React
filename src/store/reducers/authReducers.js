import { AUTH_TYPES } from "../actions/authActions"

const authInitState={
  id:'',
  username:'',
  email:'',
  token:'',
  isLoggedIn:false,
  onLogin:()=>{},
  onLogout:()=>{}
}

const STORAGE={
  KEY:'twolifes'
}

function authReducer(state,action){
  switch(action.type){
    case AUTH_TYPES.LOGIN:
      localStorage.setItem(STORAGE.KEY,action.user.token) 
      console.log('state ',state)
      console.log('new user ',action.user)
      return {...state,...action.user}
    case AUTH_TYPES.LOGOUT:
      localStorage.removeItem(STORAGE.KEY)
      return{...state,authInitState}
    default:
      return state
  }

}

export {authReducer,authInitState}