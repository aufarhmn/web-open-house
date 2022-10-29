import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Title from "../components/TetiFair/Title";
import NavbarSimplified from "../components/NavbarSimplified";
import StandFor from "../components/TetiFair/StandFor";
import GetInTouch from "../components/GetInTouch";
import TETIFairBenefits from "../components/TetiFair/TETIFairBenefits";
import Head from "next/head";

export default function TETITalk() {
    return (
        <>
            <Head>
                <title>TETI Talk</title>
            </Head>
            <NavbarSimplified />
            <Title />
            <TETIFairBenefits />
            <StandFor />
            <GetInTouch />
            <Footer />
            <BackToTop />
        </>
    );
}
