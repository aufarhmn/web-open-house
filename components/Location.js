import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

export default function Location() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center px-[78px] xl:px-[98px] pt-[58px] sm:pt-[68px] pb-[98px] relative gap-[70px] 2xl:gap-[120px]">
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start">
                <h2 className="text-[48px] text-[#93DDDE] font-bold lg:text-left text-center">Where Are We Located?</h2>
                <h4 className="text-[22px]  md:w-[600px] lg:w-[450px] xl:w-[500px] mt-[30px] sm:mt-[49px] lg:text-left text-center">
                    Ögonkramp. Otrohetsdejting. Memil. Kärrtorpa. Nätpoker. Kaffeflicka. Rutkod. Lårskav. Dra åt
                    helvete-kapital. Kuddbok. Podda. Skämsfilter. Linjär tv. Rutkod. Gretaeffekten. EU-migrant.
                    Latteliberal. Trumpifiering. Zoombombning. Dumpling.{" "}
                </h4>
                <h5 className="text-[20px]  md:w-[600px] lg:w-[450px] font-bold text-[#545454] mt-[60px] lg:text-left text-center">
                    LODHA Excelus, NM Joshi Marg, Mahalaxmi, Mumbai - 400 011
                </h5>
                <div className="flex flex-row items-center lg:items-start justify-center lg:justify-start gap-[15px] mt-[37px] text-[24px]">
                    <div className="cursor-pointer text-black hover:text-[#93DDD4] transition duration-200 ease-in-out">
                        <MdFacebook />
                    </div>
                    <div className="cursor-pointer text-black hover:text-[#93DDD4] transition duration-200 ease-in-out">
                        <AiOutlineInstagram />
                    </div>
                    <div className="cursor-pointer text-black hover:text-[#93DDD4] transition duration-200 ease-in-out">
                        <AiOutlineTwitter />
                    </div>
                    <div className="cursor-pointer text-black hover:text-[#93DDD4] transition duration-200 ease-in-out">
                        <AiFillYoutube />
                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.226569536515!2d110.36955221456445!3d-7.765781094403143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584e127dc863%3A0x7643dc792fe9ca9!2sDepartemen%20Teknik%20Elektro%20dan%20Teknologi%20Informasi%2C%20UGM!5e0!3m2!1sid!2sid!4v1662969479739!5m2!1sid!2sid"
                className="w-[280px] sm:w-[450px] md:w-[480px] h-[282px] sm:h-[452px] md:h-[482px] rounded-[30px]"
                loading="lazy"
            ></iframe>
        </div>
    );
}
