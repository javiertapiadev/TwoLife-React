import { useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { ReactComponent as PinkBlur } from '../assets/pink-blur.svg'
import { ReactComponent as BlueBlur } from '../assets/blue-blur.svg'

import SignUpForm from '../components/signup/SignUpForm';

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

export default function SignUp() {
    // Agregar iconos
    // Agregar link hacia el login
    // Hacer algo cuando se logra crear
    // Informar al usuario si introdujo algo mal
    const [isPosted, setIsPosted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div style={styles.main}>
                <PinkBlur style={styles.pink} />
                <BlueBlur style={styles.blue} />
                <main>
                    <SignUpForm
                        setIsSubmitting={setIsSubmitting}
                        setIsOpen={setIsOpen}
                        setIsPosted={setIsPosted} />
                </main>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isOpen} >
                {
                    isSubmitting ? <CircularProgress color="inherit" /> :
                        isPosted ? <div>Usuario creado!</div> : <div>No se pudo crear el usuario</div>
                }
            </Backdrop>
        </>
    )
}