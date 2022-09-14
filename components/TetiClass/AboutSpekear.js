export default function AboutSpeaker(){

    const shadow = {
        boxShadow: "-6.90431px -6.90431px 13.8086px #FFFFFF, 6.90431px 6.90431px 13.8086px rgba(0, 0, 0, 0.09)"
    }

    return(
        <>
            <div className="w-[100%] lg:w-[70%] md:my-10 flex flex-col justify-center text-justify lg:text-left lg:px-[50px] font-Poppins text-[#5A5A5A]" data-aos="fade-up-left" data-aos-duration="2000">
                <h3 className="font-bold text-[24px] md:text-[32px] mb-[24px]">Dr.Eng. Ir. Adha Imam Cahyadi, S.T., M.Eng., IPM.</h3>
                <p className=" text-[16px] md:text-[24px] mb-[24px]">
                    Control for nonlinear dynamical systems, Control for systems with delay, Multi agents control systems, Teleoperation systems
                </p>
                <p className=" text-[16px] md:text-[24px] mb-[24px]">
                    Best Paper Award, IEEE Indonesian Section, 2015
                    Best Paper Award, Robotics Society of Taiwan, 2013  
                </p>
                <div className="w-[100%] h-[10vh] lg:w-[286px] md:h-[198px] flex lg:flex-col flex-row-reverse justify-around lg:justify-center items-center bg-[#F3F3F3] font-Montserrat text-center rounded-[10px]" style={shadow}>
                    <p className="text-[16px] md:text-[24px]  text-[#434343]">Years of Experience</p>
                    <h1 className="text-[48px] md:text-[75px] font-bold text-[#29BDBC]">12</h1>
                </div>
            </div>
        </>
    )
}