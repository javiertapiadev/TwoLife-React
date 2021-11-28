import { Box } from "@mui/system"
import LoginForm from '../components/login/LoginForm'
import { ReactComponent as PinkBlur } from '../assets/pink-blur.svg'
import { ReactComponent as BlueBlur } from '../assets/blue-blur.svg'

const styles = {
  main: {
      backgroundColor: "#0F2026",
      minWidth: "100%",
      minHeight: "100vh",
      paddingTop: "20px",
      paddingBottom: "30px",
      position: "relative"
  },
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
      maxWidth: "100%"
  }
}


function Login(){
  return(
 /*    <Box sx={{display:'flex',backgroundColor:'black',flexDirection:{xs:'column',lg:'row'}}}>
      <Box sx={{display:{xs:'none',lg:'flex'}, width:{lg:'50%'} , height:'100vh',backgroundColor:'pink'}}>
        hrhrhrhhr
      </Box>
      <Box sx={{display:'flex', width:{lg:'50%'}, height:'100vh', backgroundColor:'green', justifyContent:'center',alignItems:'center'}}>
        <div>
          
        </div>
        <LoginForm></LoginForm>
      </Box>
    </Box> */

    <>
      <main style={styles.main}>
          <PinkBlur style={styles.pink} />
          <BlueBlur style={styles.blue} />
          <LoginForm />
      </main>
     
    </>
  )
}

export default Login