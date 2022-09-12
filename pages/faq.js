import NavbarSimplified from "../components/NavbarSimplified";
import DaftarFAQ from '../components/DaftarFAQ';
import { HeroFAQ } from "../components/HeroFAQ";
import Footer from "../components/Footer";

export default function FAQ() {
    return(
        <>
            <NavbarSimplified />
            <HeroFAQ/>
            <DaftarFAQ />
            <Footer />
        </>
    )
}