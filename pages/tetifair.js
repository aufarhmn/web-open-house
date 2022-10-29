import Head from "next/head";
import NavbarSimplified from "../components/NavbarSimplified";
import TETITalkBenefits from "../components/TetiTalk/TETITalkBenefits";
import { SpeakerCard } from "../components/TetiTalk/SpeakerCard";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import GetInTouch from "../components/GetInTouch";
import pakAdha from '../Assets/Images/Speaker/pakAdha.png'


export default function TETIFair() {
  //TODO: Benefits Section, Speaker Section, Responsiveness, Footer, Navbar

  const speakers = [
    {
      index: 1,
      name: "Adha Imam Cahyadi",
      job: "Control for nonlinear dynamical systems, Control for systems with delay, Multi agents control systems, Teleoperation systems",
      photo: pakAdha,
    },
    {
      index: 2,
      name: "Adha Imam Cahyadi 2",
      job: "Control for nonlinear dynamical systems, Control for systems with delay, Multi agents control systems, Teleoperation systems",
      photo: pakAdha,
    },
    {
      index: 3,
      name: "Adha Imam Cahyadi 3",
      job: "Control for nonlinear dynamical systems, Control for systems with delay, Multi agents control systems, Teleoperation systems",
      photo: pakAdha,
    },
  ]

  return (
    <>
      <Head>
                <title>TETI Fair</title>
            </Head>
            <main  className="overflow-x-hidden">
                <NavbarSimplified />
                <div className="h-[80vh] flex items-center justify-center md:h-[auto] md:justify-start md:my-[120px] md:mx-[50px] lg:mx-[100px]" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="md:text-[134px] text-[72px] font-bold text-[#93DDDE] font-Josefin text-center md:text-left">TETI Fair</h1>
                </div>
                <div className="flex flex-col w-full lg:flex-row" data-aos="fade-up" data-aos-duration="2000">
                    <div className="h-[40%] lg:w-[40%] lg:h-[auto] flex justify-center items-start">
                        <h2 className="text-[36px] md:text-[58px] font-bold font-Josefin">About TETI
                            <br/>
                            <div className="lg:w-[250px] lg:h-[80px] bg-[#E7FFC1]" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
                                <p className="text-center">Fair</p>
                            </div>
                        </h2>
                    </div>
                    <div className="h-[60%] lg:w-[60%] flex justify-center my-[36px] lg:my-0 font-Poppins text-[24px] md:text-[30px]  text-justify">
                        <p className="w-[90%]">Acara berupa talkshow yang akan mengundang alumni-alumni DTETI untuk berbincang bersama, berbagi insight serta pengalaman mereka setelah lulus.</p>
                    </div>
                </div>
        <TETITalkBenefits />
        <div className="mx-auto w-[80%]">
          <h1 className="text-[40px] sm:text-[58.5px] font-Poppins font-bold text-green-200 mb-10 text-center">
            Meet Our Speakers
          </h1>
        </div>
        <div className="mx-[5%]">
          {speakers.map((speaker) => (
            <SpeakerCard index={speaker.index} photo={speaker.photo} name={speaker.name} job="Dosen" desc={speaker.job} key={speaker.index}/>
          ))}
        </div>
      </main>
      <GetInTouch />
      <Footer />
      <BackToTop />
    </>
  );
}
