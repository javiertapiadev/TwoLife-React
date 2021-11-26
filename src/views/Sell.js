import { useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { NavBar } from '../components/NavBar';
import AdForm from '../components/sell/AdForm';
import Footer from '../components/Footer';

export default function Sell() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <>
            <NavBar />
            <main style={{ paddingBottom: "30px" }}>
                <AdForm setIsSubmitting={setIsSubmitting} setIsOpen={setIsOpen} />
            </main>
            <Footer />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isOpen} >

                { isSubmitting ? <CircularProgress color="inherit" /> : <div>Anuncio creado!</div> }
            </Backdrop>
        </>
    )
}