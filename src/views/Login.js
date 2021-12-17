import { Box } from "@mui/system"
import LoginForm from '../components/login/LoginForm'
import { ReactComponent as PinkBlur } from '../assets/pink-blur.svg'
import { ReactComponent as BlueBlur } from '../assets/blue-blur.svg'

const styles = {
 
  pink: {
      position: "absolute",
      top: "0",
      right: "0",
      maxHeight: "370px",
      width: "auto"
  },
  blue: {
      position: "absolute",
      bottom: "0",
      left: "0",
      maxHeight: "270px",
      width: "auto",
      maxWidth: "100%",
     
  }
}


function Login(){
  return(
    <>
      <Box sx={{display:'flex',position:'relative', backgroundColor:'#0F2026',height:'100vh',width:'100%',padding:'10%', justifyContent:'center',alignItems:'center'}}>
        <PinkBlur style={styles.pink} />
        <BlueBlur style={styles.blue} />
        <Box sx={{zIndex:'999',height:'70%',width:{lg:'50%'}}}>
          <LoginForm  />
        </Box>
          
      </Box>
     
    </>
  )
}

export default Login