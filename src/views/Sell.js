import { NavBar } from '../components/NavBar';
import AdForm from '../components/sell/AdForm';
import Footer from '../components/Footer';

export default function Sell() {
    return (
        <>
            <NavBar />
            <main style={{paddingBottom: "30px"}}>
                <AdForm />
            </main>
            <Footer />
        </>
    )
}