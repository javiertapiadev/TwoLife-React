import { Portada } from '../components/home/Portada'
import Latests from '../components/home/Latests'
import Categories from '../components/home/Categories'

function Home() {
    return (
        <main>
            <Portada/> 
            <Latests/>
            <Categories/>
        </main>
    );
}

export default Home;
