import Image from "next/image";
import userIcon from "../../Assets/Images/Speaker/usericon.png";

//TODO: responsive
export const SpeakerCard = (props) => {
  const benefitsStyle =
    "bg-[#F3F3F3] rounded-[28px] max-w-[430px] h-min flex flex-col items-center sm:w-[70%] lg:w-max";
  const imgStyle =
    "w-[100%] aspect-square flex justify-center items-end rounded-t-[28px]";
  const shadow = {
    boxShadow:
      "-13.1635px -13.1635px 32.9088px #FFFFFF, 13.1635px 13.1635px 32.9088px #D2D2D2",
  };

  let flexDir = "w-[full] flex flex-col lg:flex-row my-3 xl:gap-20 gap-4 justify-center items-center lg:items-start";

  if(props.index % 2 !== 1) {
    flexDir = "w-[full] flex flex-col my-3 xl:gap-20 gap-4 justify-center lg:flex-row-reverse items-center lg:items-start";
  } 

  return (
    <div className="w-[90%] mx-[5%] sm:mx-auto mb-32">
      <div className={flexDir}>
        <div className={benefitsStyle} style={shadow} data-aos="fade-up" data-aos-duration="2000" data-aos-offset="-100">
          <div className={imgStyle}>
            <Image
              // src={props.photo}
              src={userIcon}
              alt="advantage1"
              // width={400}
              // height={300}
            />
          </div>
          <div className="h-[35%] w-[80%] flex flex-col justify-start">
              <p className="font-Josefin text-[32px] text-[#434343] opacity-50 font-bold text-center">To be Announced</p>
          </div>
          {/* <div className="h-[35%] w-[80%] flex flex-col justify-center">
            <p className="font-Josefin text-[26px] text-[#434343] font-bold">
              {props.name}
              To Be Announced
            </p>
            <p className="font-Josefin text-[20px] md:text-[26px] text-[#434343]">
              {props.job}
            </p>
          </div> */}
        </div>
        <div className="max-w-[646px] lg:h-[500px] font-Poppins flex flex-col justify-evenly" data-aos="fade-left" data-aos-duration="2000">
          {/* <h2 className="text-[32px] font-bold">{props.name}</h2>
          <p className="text-[24.22px] mt-10">{props.desc}</p>
          <p className="text-[24.22px] mt-10">
            Best Paper Award, IEEE Indonesian Section, 2015 Best Paper Award,
            Robotics Society of Taiwan, 2013
          </p>
          <div className="flex w-full gap-2">
            <div className="bg-gray-500 h-[50px] w-full rounded"></div>
            <div className="bg-gray-500 h-[50px] w-full rounded"></div>
            <div className="bg-gray-500 h-[50px] w-full rounded"></div>
          </div> */}
            <h1 className="font-bold text-[60px] text-[#5A5A5A] opacity-50 text-center">Coming Soon!!!</h1>
        {/*
        <div className="lg:max-w-[450px] xl:max-w-[646px] lg:mt-10 lg:mx-5 font-Poppins flex flex-col justify-evenly" data-aos="fade-left" data-aos-offset="-100" data-aos-duration="2000">
          <h2 className="text-[24px] sm:text-[28px] font-bold">{props.name}</h2>
          <p className="text-[18px] sm:text-[20px] md:text-[24.22px] mt-2">{props.desc}</p>
        */}
        </div>
      </div>
    </div>
  );
};
