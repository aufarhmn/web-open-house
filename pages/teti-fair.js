import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Title from "../components/TetiFair/Title";

export default function Home() {
    return (
        <>
            {/* Form belum diexport */}
            <Navbar />
            <Title />
            <Footer />
            <BackToTop />
        </>
    );
}
