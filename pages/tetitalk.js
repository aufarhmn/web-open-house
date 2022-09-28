import Head from "next/head";
import NavbarSimplified from "../components/NavbarSimplified";
import Benefits from "../components/TetiClass/Benefits";
import { SpeakerCard } from "../components/TetiTalk/SpeakerCard";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import GetInTouch from "../components/GetInTouch";
import pakAdha from '../Assets/Images/Speaker/pakAdha.png'


export default function TETITalk() {
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
        <title>TETI Talk</title>
      </Head>
      <main className="overflow-x-hidden">
        <NavbarSimplified />
        <h1 className="text-[60px] sm:text-[80px] md:text-[134px] w-max mx-auto font-Josefin font-bold :my-[120px] lg:mx-[100px] text-blue-25"
        data-aos="fade-up" data-aos-duration="2000">
          TETI Talk
        </h1>

        <div className="flex md:px-32 font-Josefin flex-col lg:flex-row justify-between lg:gap-4 lg:md-0 lg:items-center text-green-200">
          <div className="font-bold text-center w-min mx-auto mt-10 sm:mt-5" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="700">
            <h2 className="text-[48px] md:text-[58.5px] w-max">About TETI</h2>
            <h2
              className="text-[60px] sm:text-[65px] md:text-[72.65px] bg-[#E7FFC1] max-w-[313px]"
              style={{
                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
              }}
            >
              Talk
            </h2>
          </div>
          <p className="max-w-[730px] text-[22px] mx-[5%] lg:mx-0 lg:ml-10 sm:text-[22px] md:text-[26px] font-light" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="700">
            Acara berupa talkshow yang akan mengundang alumni-alumni DTETI untuk berbincang bersama, berbagi insight serta pengalaman mereka setelah lulus. Pada Open House kali ini akan mengundang ...
          </p>
        </div>

        <Benefits />

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
