import { useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import AdForm from '../components/sell/AdForm';

export default function Sell() {
    const [isPosted, setIsPosted] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <>
            <main style={{ paddingBottom: "30px" }}>
                <AdForm 
                    setIsSubmitting={setIsSubmitting}
                    setIsOpen={setIsOpen}
                    setIsPosted={setIsPosted} />
            </main>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isOpen} >
                {
                    isSubmitting ? <CircularProgress color="inherit" /> : 
                    isPosted ? <div>Anuncio creado!</div> : <div>No se pudo crear el anuncio</div>
                }
            </Backdrop>
        </>
    )
}