import { AUTH_TYPES } from "../actions/authActions"

const authInitState={
  id='',
  username:'',
  email:'',
  token:'',
  isLoggedIn:false,
  onLogin:()=>{},
  onLogout:()=>{}
}

function authReducer(state,action){
  switch(action.type){
    case AUTH_TYPES.LOGIN:
      return {...state,...action.user}
    case AUTH_TYPES.LOGOUT:
      return{...state,authInitState}
    default:
      return state    
  }

}

export {authReducer,authInitState}