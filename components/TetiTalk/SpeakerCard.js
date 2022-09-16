import Image from "next/image";

//TODO: responsive
export const SpeakerCard = (props) => {
  const benefitsStyle =
    "bg-[#F3F3F3] rounded-[28px] w-[430px] h-[592px] flex flex-col items-center ";
  const imgStyle =
    "w-[100%] h-[100%] flex justify-center items-end rounded-t-[28px]";
  const shadow = {
    boxShadow:
      "-13.1635px -13.1635px 32.9088px #FFFFFF, 13.1635px 13.1635px 32.9088px #D2D2D2",
  };

  let flexDir = "w-[full] flex flex-col xl:flex-row my-3 xl:gap-20 gap-10 justify-center items-center";

  if(props.index % 2 !== 1) {
    flexDir = "w-[full] flex flex-col my-3 xl:gap-20 gap-10 justify-center xl:flex-row-reverse items-center";
  } 

  return (
    <div className="w-[90%] mx-auto mb-32">
      <div className={flexDir}>
        <div className={benefitsStyle} style={shadow} data-aos="fade-up" data-aos-duration="2000">
          <div className={imgStyle}>
            <Image
              src={props.photo}
              alt="advantage1"
              width={400}
              height={300}
            />
          </div>
          <div className="h-[35%] w-[80%] flex flex-col justify-center">
            <p className="font-Josefin text-[26px] text-[#434343] font-bold">
              {props.name}
            </p>
            <p className="font-Josefin text-[26px] text-[#434343]">
              {props.job}
            </p>
          </div>
        </div>

        <div className="max-w-[646px] font-Poppins flex flex-col justify-evenly" data-aos="fade-left" data-aos-duration="2000">
          <h2 className="text-[32px] font-bold">{props.name}</h2>
          <p className="text-[24.22px] mt-10">{props.desc}</p>
          <p className="text-[24.22px] mt-10">
            Best Paper Award, IEEE Indonesian Section, 2015 Best Paper Award,
            Robotics Society of Taiwan, 2013
          </p>
          <div className="flex w-full gap-2">
            <div className="bg-gray-500 h-[50px] w-full rounded"></div>
            <div className="bg-gray-500 h-[50px] w-full rounded"></div>
            <div className="bg-gray-500 h-[50px] w-full rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
