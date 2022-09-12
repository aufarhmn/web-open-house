import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DeanMessage from "../components/DeanMessage";
import SubEvents from "../components/SubEvents";
import BackToTop from "../components/BackToTop";
import OHEvents from "../components/OHEvents";
import Footer from "../components/Footer";
import Location from "../components/Location";
import About from "../components/About";
import Form from '../components/Form'

export default function Home() {
    return (
        <>
            {/* Form belum diexport */}
            <Navbar />
            <Hero />
            <About />
            <OHEvents />
            <Location />
            <DeanMessage />
            <SubEvents />
            <Form/>
            <Footer />
            <BackToTop />
        </>
    );
}
