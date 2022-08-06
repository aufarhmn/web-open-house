
//TODO : Responsiveness (depending on content)
const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pl-[80px] py-[120px] font-Josefin leading-[64px] w-full bg-blue-500 text-white flex">
        <div>
          <h1 className="text-[64px] max-w-[450px] font-bold">
            We look forward for you to join us!
          </h1>
        </div>
        <div>
          {/* div untuk konten di kanan */}
        </div>
      </div>
      <div className="w-[60%] h-[140px] bg-white shadow-md rounded-[20px] -mt-[70px]"></div>
    </div>
  );
};

export default Hero;
