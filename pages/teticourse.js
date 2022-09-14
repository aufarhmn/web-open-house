import Footer from "../components/Footer";
import NavbarSimplified from "../components/NavbarSimplified";
import BackToTop from "../components/BackToTop";
import GetInTouch from "../components/GetInTouch";
import Benefits from "../components/Benefits";

export default function TETICourse() {
    return (
        <>
            <NavbarSimplified />
            <div className="my-[120px] mx-[100px] ">
                <h1 className="text-[134px] font-bold text-[#93DDDE] font-Josefin">TETI Course</h1>
            </div>
            <div className="flex w-full">
                <div className="w-[40%] flex justify-center items-start">
                    <h2 className="text-[58px] font-bold font-Josefin">About TETI
                        <br/>
                        <div className="w-[250px] h-[80px] bg-[#E7FFC1]" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
                            <p className="text-center">Course</p>
                        </div>
                    </h2>
                </div>
                <div className="w-[60%] font-Poppins text-[30px] text-justify">
                    <p className="w-[90%]">Rangkaian acara berupa <i>coding session</i> dengan beberapa pilihan course yang dapat dipilih. Beberapa course yang ditawarkan yakni UI/UX, Website Development, dan Robotika.</p>
                </div>
            </div>
            {/* Benefit minjem komponen punya teti talk */}
            <Benefits />
            <GetInTouch />
            <Footer />
            <BackToTop />
        </>
    );
}