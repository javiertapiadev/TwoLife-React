import { Portada } from '../components/home/Portada'
import Latests from '../components/home/Latests'
import Categories from '../components/home/Categories'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer';

function Home() {
    return (
        <>
            <NavBar/>
            <Portada/> 
            <Latests/>
            <Categories/>
            <Footer />
        </>
    );
}

export default Home;
