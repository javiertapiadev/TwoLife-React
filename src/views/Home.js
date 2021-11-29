import NavBar from '../components/layout/NavBar'
import { Portada } from '../components/home/Portada'
import Footer from '../components/layout/Footer';
import Latests from '../components/home/Latests';

function Home() {
    return (
        <>
            <NavBar />
            <Portada />
            {/* <Populars /> */}
            <Latests />
            <Footer />
        </>
    );
}

export default Home;
