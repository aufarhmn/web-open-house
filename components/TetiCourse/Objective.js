import Image from "next/image";

export default function Objective({
    imgSrc = "",
    body = "Introducing to you a UI & UX focused website with a cutting edge technology as a platform for digital marketing and lead generation.",
}) {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-[20px] md:gap-[88px] mt-[60px] md:mt-[50px]" data-aos="zoom-in-up" data-aos-duration="2000">
                <div className="relative w-[144px] h-[144px]">
                    <Image src={imgSrc} layout="fixed"></Image>
                </div>
                <h6 className="text-[24px] text-[#1F1F1F] md:text-left text-center">{body}</h6>
            </div>
        </>
    );
}
