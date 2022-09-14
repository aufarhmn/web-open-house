import Benefits from "../components/Benefits";
import NavbarSimplified from "../components/NavbarSimplified";
import Speaker from "../components/Speaker";
import pakAdha from '../Assets/Images/Speaker/pakAdha.png'
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";


let props = {
    photo : pakAdha,
    name : "Pak Adha",
    job : "CEO of Pak Adha"
}

const shadow = {
    boxShadow: "-6.90431px -6.90431px 13.8086px #FFFFFF, 6.90431px 6.90431px 13.8086px rgba(0, 0, 0, 0.09)"
}

export default function TETIClass() {
    return(
        <>
            <NavbarSimplified />
            <div className="my-[120px] mx-[100px] ">
                <h1 className="text-[134px] font-bold text-[#93DDDE] font-Josefin">TETI Class</h1>
            </div>
            <div className="flex w-full">
                <div className="w-[40%] flex justify-center items-start">
                    <h2 className="text-[58px] font-bold font-Josefin">About TETI
                        <br/>
                        <div className="w-[250px] h-[80px] bg-[#E7FFC1]" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
                            <p className="text-center">Class</p>
                        </div>
                    </h2>
                </div>
                <div className="w-[60%] font-Poppins text-[30px] text-justify">
                    <p className="w-[90%]">Teti Class merupakan kegiatan berupa online class salah satu mata kuliah di DTETI. Para siswa akan diajak untuk merasakan secara langsung pengalaman berkuliah di DTETI. Dengan adanya kegiatan ini diharapkan dapat menjawab rasa penasaran peserta dengan proses pembelajaran.</p>
                </div>
            </div>
            <Benefits />
            <div className="w-[80%] flex flex-col mx-auto my-72">
                <h3 className="text-[58px] font-bold font-Josefin text-[#4f4d4d]">Lectured by</h3>
                <div className="flex flex-row">
                    <Speaker {...props} />
                    <div className="w-[70%] flex flex-col justify-center px-[50px] font-Poppins text-[#5A5A5A]">
                        <h3 className="font-bold text-[32px] mb-[16px]">Dr.Eng. Ir. Adha Imam Cahyadi, S.T., M.Eng., IPM.</h3>
                        <p className=" text-[24px] mb-[16px]">
                            Control for nonlinear dynamical systems, Control for systems with delay, Multi agents control systems, Teleoperation systems
                        </p>
                        <p className=" text-[24px] mb-[16px]">
                            Best Paper Award, IEEE Indonesian Section, 2015
                            Best Paper Award, Robotics Society of Taiwan, 2013  
                        </p>
                        <div className="w-[286px] h-[198px] flex flex-col justify-center bg-[#F3F3F3] font-Montserrat text-center rounded-[10px]" style={shadow}>
                            <p className="text-[24px]  text-[#434343]">Years of Experience</p>
                            <h1 className="text-[75px] font-bold text-[#29BDBC]">12</h1>
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
            <Footer />
        </>
    )
}