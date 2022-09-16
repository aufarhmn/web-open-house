import Head from "next/head";
import NavbarSimplified from "../components/NavbarSimplified";
import Benefits from "../components/TetiClass/Benefits";
import { SpeakerCard } from "../components/TetiTalk/SpeakerCard";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import GetInTouch from "../components/GetInTouch";


export default function TETITalk() {
  //TODO: Benefits Section, Speaker Section, Responsiveness, Footer, Navbar

  const speakers = [
    {
      index: 1,
      name: "Adha Imam Cahyadi",
      job: "Control for nonlinear dynamical systems, Control for systems with delay, Multi agents control systems, Teleoperation systems",
      photo: "/vercel.svg",
    },
    {
      index: 2,
      name: "Adha Imam Cahyadi 2",
      job: "Control for nonlinear dynamical systems, Control for systems with delay, Multi agents control systems, Teleoperation systems",
      photo: "/vercel.svg",
    },
    {
      index: 3,
      name: "Adha Imam Cahyadi 3",
      job: "Control for nonlinear dynamical systems, Control for systems with delay, Multi agents control systems, Teleoperation systems",
      photo: "/vercel.svg",
    },
  ]

  return (
    <>
      <Head>
        <title>TETI Talk</title>
      </Head>
      <main>
        <NavbarSimplified />
        <h1 className="text-[134px] font-Josefin font-bold my-[120px] mx-[100px] text-blue-25">
          TETI Talk
        </h1>

        <div className="flex px-32 font-Josefin justify-between gap-4 text-green-200">
          <div className="font-bold text-center">
            <h2 className="text-[58.5px] w-max">About TETI</h2>
            <h2
              className="text-[72.65px] bg-[#E7FFC1]"
              style={{
                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
              }}
            >
              Talk
            </h2>
          </div>
          <p className="max-w-[730px] text-[30px] font-light">
            Acara berupa talkshow yang akan mengundang alumni-alumni DTETI untuk berbincang bersama, berbagi insight serta pengalaman mereka setelah lulus. Pada Open House kali ini akan mengundang ...
          </p>
        </div>

        <Benefits />

        <div className="mx-auto w-[80%]">
          <h1 className="text-[58.5px] font-Poppins font-bold text-green-200 mb-32 text-center">
            Meet Our Speakers
          </h1>
        </div>
        <div className="odd:flex-row-reverse">
          {speakers.map((speaker) => (
            <SpeakerCard index={speaker.index} photo={speaker.photo} name={speaker.name} job="Dosen" desc={speaker.job} />
          ))}
        </div>
      </main>
      <GetInTouch />
      <Footer />
      <BackToTop />
    </>
  );
}
