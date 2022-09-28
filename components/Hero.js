import Image from "next/image";
import Link from "next/link";

//TODO : Responsiveness, animation, hover

const scrollToForm = () => {
  const form = document.getElementById("form");
  form.scrollIntoView({ behavior: "smooth" });
};

const scrollToEvents = () => {
  const events = document.getElementById("events");
  events.scrollIntoView({ behavior: "smooth" });
}

const Hero = () => {
  return (
    <main className="overflow-x-hidden">
    <div className="flex flex-col items-center font-Poppins pt-10">
      <div className="px-[5%] w-full text-white flex items-center justify-between flex-col lg:flex-row">
        <div data-aos="fade-up" data-aos-duration="700">
          <h1 className="text-[40px] leading-[40px] sm:text-[50px] sm:leading-[50px] text-center md:text-[60px] md:leading-[60px] lg:text-[70px] lg:leading-[70px] lg:text-left xl:text-[81px] xl:leading-[81px] max-w-[600px] font-bold text-blue-25">
            We look forward for you to join us!
          </h1>
        </div>
        <div className="max-w-[580px] w-full" data-aos="fade-up" data-aos-duration="700" data-aos-delay="700">
          <Image src="/OpenHouseHero.png" width={3147} height={2000} priority/>
        </div>
      </div>
      <div className="w-full px-[5%] flex gap-5 xl:gap-16 sm:flex-row text-[23px] justify-center items-center flex-col xl:justify-start md:mt-5">
        <div
          className="cursor-pointer text-white bg-[#F0ABC0] flex justify-center items-center w-[80%] md:w-[192px] md:h-[60px] lg:h-[85px] rounded-[15px] shadow-lg text-[18px] lg:text-[23px] h-[50px] hover:bg-[#ff8eb0]"
          onClick={() => {
            scrollToForm();
          }}
        >
          Register Now
        </div>
        <div className="cursor-pointer text-[#8A8D8F] bg-[#F9F9F9] flex justify-center items-center w-[80%] md:w-[192px] md:h-[60px] lg:h-[85px] rounded-[15px] border-[5px] border-[#E3E3E3] text-[18px] lg:text-[23px] h-[50px] hover:bg-[#E3E3E3]"
          onClick={() => {
            scrollToEvents();
          }}
        >
          Learn More
        </div>
      </div>
    </div>
    </main>
  );
};

export default Hero;
