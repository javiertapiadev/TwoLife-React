import React from 'react';
import NavBar from '../components/NavBar'
import { Portada } from '../components/home/Portada'
import Latests from '../components/home/Latests'
import Categories from '../components/home/Categories'
import Footer from '../components/Footer';

function Home() {
    return (
        <React.Fragment>
            <NavBar/>
            <Portada/> 
            <Latests/>
            <Categories/>
            <Footer />
        </React.Fragment>
    );
}

export default Home;
