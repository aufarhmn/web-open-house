import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start bg-[#2EA4FE] overflow-hidden relative px-[20px] sm:px-[95px] pt-[63px] gap-[60px] md:gap-[80px] lg:gap-[120px] xl:gap-[160px] 2xl:gap-[170px]">
            <div className="flex flex-col items-center md:items-start justify-center md:mb-[80px]">
                <h3 className="text-[30px] font-bold md:text-left text-center mx-[10px] sm:mx-0">
                    Open House DTETI FT UGM
                </h3>
                <h6 className="text-[18px] mx-[20px] sm:mx-0 sm:w-[350px] mt-[15px] xl:mt-[22px] md:text-left text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,{" "}
                </h6>
                <div className="flex flex-row items-start justify-start gap-[15px] mt-[17px] xl:mt-[27px] text-[24px]">
                    <div className="cursor-pointer text-white hover:text-black transition duration-200 ease-in-out">
                        <MdFacebook />
                    </div>
                    <div className="cursor-pointer text-white hover:text-black transition duration-200 ease-in-out">
                        <AiOutlineInstagram />
                    </div>
                    <div className="cursor-pointer text-white hover:text-black transition duration-200 ease-in-out">
                        <AiOutlineTwitter />
                    </div>
                    <div className="cursor-pointer text-white hover:text-black transition duration-200 ease-in-out">
                        <AiFillYoutube />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start justify-center mb-[90px] md:mb-0">
                <h4 className="text-[24px] font-bold md:text-left text-center">Features</h4>
                <div className="flex flex-row items-center md:items-start justify-center md:justify-start gap-[30px] mt-[20px] flex-wrap">
                    <h5 className="text-[18px] cursor-pointer md:text-left text-center hover:text-white transition duration-200 ease-in-out">
                        TETI Fair
                    </h5>
                    <h5 className="text-[18px] cursor-pointer md:text-left text-center hover:text-white transition duration-200 ease-in-out">
                        TETI Course
                    </h5>
                    <h5 className="text-[18px] cursor-pointer md:text-left text-center hover:text-white transition duration-200 ease-in-out">
                        TETI Class
                    </h5>
                    <h5 className="text-[18px] cursor-pointer md:text-left text-center hover:text-white transition duration-200 ease-in-out">
                        TETI Talk
                    </h5>
                </div>
            </div>
        </div>
    );
}