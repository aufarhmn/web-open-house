import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Title from "../components/TetiFair/Title";
import NavbarSimplified from "../components/NavbarSimplified";
import StandFor from "../components/TetiFair/standFor";

export default function TetiFair() {
    return (
        <>
            <NavbarSimplified />
            <Title />
            <StandFor />
            <Footer />
            <BackToTop />
        </>
    );
}
