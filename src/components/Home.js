import { NavBar } from './NavBar'
import { Portada } from './Portada'
import Footer from './Footer';
import Latests from './Latests';
import Populars from './Populars';

function Home() {
    return (
        <>
            <NavBar />
            <Portada />
            <Populars />
            <Latests />
            <Footer />
        </>
    );
}

export default Home;
