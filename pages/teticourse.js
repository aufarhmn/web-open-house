import Footer from "../components/Footer";
import NavbarSimplified from "../components/NavbarSimplified";
import BackToTop from "../components/BackToTop";
import GetInTouch from "../components/GetInTouch";
import Head from "next/head";
import podium from "../Assets/Images/TetiCourse/podium.png";
import love from "../Assets/Images/TetiCourse/love.png";
import orang from "../Assets/Images/TetiCourse/orang.png";
import Image from "next/image";
import Objective from "../components/TetiCourse/Objective";
import TETICourseBenefits from "../components/TetiCourse/TETICourseBenefits";

export default function TETICourse() {
    return (
        <>
            <Head>
                <title>TETI Course</title>
            </Head>
            <main  className="overflow-x-hidden">
                <NavbarSimplified />
                <div className="h-[80vh] flex items-center justify-center md:h-[auto] md:justify-start md:my-[120px] md:mx-[50px] lg:mx-[100px]" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="md:text-[134px] text-[72px] font-bold text-[#93DDDE] font-Josefin text-center md:text-left">TETI Course</h1>
                </div>
                <div className="flex flex-col w-full lg:flex-row" data-aos="fade-up" data-aos-duration="2000">
                    <div className="h-[40%] lg:w-[40%] lg:h-[auto] flex justify-center items-start">
                        <h2 className="text-[36px] md:text-[58px] font-bold font-Josefin">About TETI
                            <br/>
                            <div className="lg:w-[250px] lg:h-[80px] bg-[#E7FFC1]" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
                                <p className="text-center">Course</p>
                            </div>
                        </h2>
                    </div>
                    <div className="h-[60%] lg:w-[60%] flex justify-center my-[36px] lg:my-0 font-Poppins text-[24px] md:text-[30px]  text-justify">
                        <p className="w-[90%]">Rangkaian acara berupa <i>coding session</i> dengan beberapa pilihan course yang dapat dipilih. Beberapa <i>course</i> yang ditawarkan yakni UI/UX, <i>Website Development</i>, dan Robotika.</p>
                    </div>
                </div>
                <TETICourseBenefits />
            <section className="objective">
                <div className="flex flex-col items-center md:items-start justify-start overflow-hidden relative px-[40px] md:px-[100px] lg:px-[150px] pt-[130px] pb-[90px]">
                    <h4 className="text-[56px] font-bold text-[#1F1F1F] md:text-left text-center">
                        TETI Course Objective
                    </h4>
                    <Objective
                        imgSrc={podium}
                        body="Introducing to you a UI & UX focused website with a cutting edge technology as a platform for
                            digital marketing and lead generation."
                    />
                    <Objective
                        imgSrc={love}
                        body="Establishing the first stepping stone in the micro markets of Navi Mumbai, and later leaving
                        footprints as a standard bearer in the micro markets of Mumbai. We strive to always have a
                        dedicated focus on the consumer's requirements and expectations"
                    />
                    <Objective
                        imgSrc={orang}
                        body="We believe in long term orientation with our diversified business model thus making us stand out
                        in the industry"
                    />
                </div>
            </section>
            <GetInTouch />
            <Footer />
            <BackToTop />
            </main>
        </>
    );
}
