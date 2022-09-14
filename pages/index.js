import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DeanMessage from "../components/DeanMessage";
import BackToTop from "../components/BackToTop";
import OHEvents from "../components/OHEvents";
import Footer from "../components/Footer";
import Location from "../components/Location";
import About from "../components/About";
import Form from '../components/Form'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <OHEvents />
            <Location />
            <DeanMessage />
            <Form/>
            <Footer />
            <BackToTop />
        </>
    );
}
