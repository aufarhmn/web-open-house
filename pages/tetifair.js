import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Title from "../components/TetiFair/Title";
import NavbarSimplified from "../components/NavbarSimplified";
import StandFor from "../components/TetiFair/standFor";
import GetInTouch from "../components/GetInTouch";

export default function TETIFair() {
    return (
        <>
            <NavbarSimplified />
            <Title />
            <StandFor />
            <GetInTouch />
            <Footer />
            <BackToTop />
        </>
    );
}
