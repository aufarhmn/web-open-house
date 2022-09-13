import Image from "next/image";

//TODO : Responsiveness, button links, animation, hover

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
    <div className="flex flex-col items-center font-Poppins pt-10">
      <div className="px-16 md:leading-[85px] leading-[64px] w-full text-white flex items-center justify-between flex-col lg:flex-row">
        <div data-aos="fade-up" data-aos-duration="700">
          <h1 className="md:text-[81px] text-[64px] max-w-[600px] font-bold text-blue-25">
            We look forward for you to join us!
          </h1>
        </div>
        <div className="max-w-[580px] w-full">
          <Image src="/OpenHouseHero.png" width={3147} height={2000} />
        </div>
      </div>
      <div className="w-full px-16 flex gap-5 lg:gap-16 md:flex-row text-[23px] justify-center items-center flex-col lg:justify-start md:mt-5">
        <div
          className="cursor-pointer text-white bg-[#F0ABC0] flex justify-center items-center w-[80%] md:w-[192px] h-[85px] rounded-[15px] shadow-lg"
          onClick={() => {
            scrollToForm();
          }}
        >
          Register Now
        </div>
        <div className="cursor-pointer text-[#8A8D8F] bg-[#F9F9F9] flex justify-center items-center w-[80%] md:w-[192px] h-[85px] rounded-[15px] border-[5px] border-[#E3E3E3]"
          onClick={() => {
            scrollToEvents();
          }}
        >
          Learn More
        </div>
      </div>
    </div>
  );
};

export default Hero;
