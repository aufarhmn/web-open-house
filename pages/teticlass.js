import Benefits from "../components/TetiClass/Benefits";
import NavbarSimplified from "../components/NavbarSimplified";
import pakAdha from '../Assets/Images/Speaker/pakAdha.png'
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import BackToTop from "../components/BackToTop";
import Head from "next/head";
// Import untuk speaker component yang fix
import Speaker from "../components/TetiClass/Speaker";
import AboutSpeaker from "../components/TetiClass/AboutSpekear";
// Import untuk speaker component yang coming soon
import ComingSoonSpeaker from "../components/ComingSoon/CSoonSpeaker";
import ComingSoonAboutSpeaker from "../components/ComingSoon/CSoonAboutSpeaker";


let props = {
    photo : pakAdha,
    name : "Pak Adha",
    job : "CEO of Pak Adha"
}



export default function TETIClass() {
    return(
        <>
            <Head>
                <title>TETI Class</title>
            </Head>
            <main  className="overflow-x-hidden">
                <NavbarSimplified />
                <div className="h-[80vh] flex items-center justify-center md:h-[auto] md:justify-start md:my-[120px] md:mx-[50px] lg:mx-[100px]" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="md:text-[134px] text-[72px] font-bold text-[#93DDDE] font-Josefin text-center md:text-left">TETI Class</h1>
                </div>
                <div className="flex flex-col w-full lg:flex-row" data-aos="fade-up" data-aos-duration="2000">
                    <div className="h-[40%] lg:w-[40%] lg:h-[auto] flex justify-center items-start">
                        <h2 className="text-[36px] md:text-[58px] font-bold font-Josefin">About TETI
                            <br/>
                            <div className="lg:w-[250px] lg:h-[80px] bg-[#E7FFC1]" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
                                <p className="text-center">Class</p>
                            </div>
                        </h2>
                    </div>
                    <div className="h-[60%] lg:w-[60%] flex justify-center my-[36px] lg:my-0 font-Poppins text-[24px] md:text-[30px]  text-justify">
                        <p className="w-[90%]">Teti Class merupakan kegiatan berupa online class salah satu mata kuliah di DTETI. Para siswa akan diajak untuk merasakan secara langsung pengalaman berkuliah di DTETI. Dengan adanya kegiatan ini diharapkan dapat menjawab rasa penasaran peserta dengan proses pembelajaran.</p>
                    </div>
                </div>
                <Benefits />
                <div className="w-[80%] flex flex-col mx-auto my-36 md:my-72">
                    <h3 className="text-[58px] font-bold font-Josefin text-[#4f4d4d]">Lectured by</h3>
                    <div className="flex flex-col md:items-center lg:items-start lg:flex-row ">
                        {/* <Speaker {...props} /> */}
                        {/* <AboutSpeaker /> */}
                        <ComingSoonSpeaker />
                        <ComingSoonAboutSpeaker />
                    </div>
                </div>

                <BackToTop />
                <GetInTouch />
                <Footer />
            </main>
        </>
    )
}