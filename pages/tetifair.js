import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Title from "../components/TetiFair/Title";
import NavbarSimplified from "../components/NavbarSimplified";
import StandFor from "../components/TetiFair/StandFor";
import GetInTouch from "../components/GetInTouch";
import Benefits from "../components/TetiClass/Benefits";
import Head from "next/head";

export default function TETIFair() {
    return (
        <>
            <Head>
                <title>TETI Fair</title>
            </Head>
            <NavbarSimplified />
            <Title />
            <Benefits />
            <StandFor />
            <GetInTouch />
            <Footer />
            <BackToTop />
        </>
    );
}
