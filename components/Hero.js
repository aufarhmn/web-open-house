import Image from "next/image";

//TODO : Responsiveness, button links, animation, hover
const Hero = () => {
  return (
    <div className="flex flex-col items-center font-Poppins">
      <div className="px-16 leading-[85px] w-full text-white flex items-center justify-between">
        <div data-aos="fade-up" data-aos-duration="700">
          <h1 className="text-[81px] max-w-[600px] font-bold text-blue-25">
            We look forward for you to join us!
          </h1>
        </div>
        <div className="w-[580px]">
          <Image src="/OpenHouseHero.png" width={3147} height={2000}/>
        </div>
      </div>
      <div className="w-full px-16 flex gap-16 text-[23px] ">
        <div className="cursor-pointer text-white bg-[#F0ABC0] flex justify-center items-center w-[192px] h-[85px] rounded-[15px] shadow-lg">Register Now</div>
        <div className="cursor-pointer text-[#8A8D8F] bg-[#F9F9F9] flex justify-center items-center w-[192px] h-[85px] rounded-[15px] border-[5px] border-[#E3E3E3]">Learn More</div>
      </div>
    </div>
  );
};

export default Hero;
