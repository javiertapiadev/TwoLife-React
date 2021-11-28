import { Box } from "@mui/system"
import LoginForm from '../components/login/LoginForm'

function Login(){
  return(
    <Box sx={{display:'flex',backgroundColor:'black',flexDirection:{xs:'column',lg:'row'}}}>
      <Box sx={{display:{xs:'none',lg:'flex'}, width:{lg:'50%'} , height:'100vh',backgroundColor:'pink'}}>
        hrhrhrhhr
      </Box>
      <Box sx={{display:'flex', width:{lg:'50%'}, height:'100vh', backgroundColor:'green', justifyContent:'center',alignItems:'center'}}>
        <div>
          
        </div>
        <LoginForm></LoginForm>
      </Box>
    </Box>
  )
}

export default Login