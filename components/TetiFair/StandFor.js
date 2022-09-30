import React from "react";
import Image from "next/image";
import v4 from "../../Assets/Images/TetiFair/v4.svg"
import v5 from "../../Assets/Images/TetiFair/Group 5 (1).svg"
import v6 from "../../Assets/Images/TetiFair/Vector 5.svg"

const styleCircle = "bg-[#EDEDED] rounded-full w-[242px] h-[242px] flex flex-col items-center justify-center"
const styleCircleInner = "w-[158px] h-[158px] flex justify-center items-center rounded-full"
const styleImg = "w-[66px]"
const shadowCircle = {
    boxShadow: "inset -14.8564px -14.8564px 37.1411px #FFFFFF, inset 14.8564px 14.8564px 37.1411px #CDCDCD"
}
const shadowCircleInner = {
    boxShadow: "14.8564px 14.8564px 37.1411px rgba(0, 0, 0, 0.18), inset 14.8564px 14.8564px 37.1411px rgba(255, 255, 255, 0.25), inset -14.8564px -14.8564px 37.1411px #CDCDCD, inset 14.8564px 14.8564px 37.1411px #FFFFFF"
}
const styleTitle = "font-bold text-[20px]"
const styleSubTitle = "font-semibold text-[19px] mt-10 lg:mt-10 mb-5"
const styleDescription = "text-[17px] text-justify"

export default function StandFor() {
    return (
        <div className="w-full h-full px-7 md:px-16 pb-[120px]">
            <div className="grid container mx-auto space-y-20 md:space-y-32">
                <h3 className="text-[58px] font-bold text-black-100 text-left font-Josefin" data-aos="fade-up" data-aos-duration="2000">
                    What Does TETITB Stand for?
                </h3>
                <div className="flex items-start justify-between flex-col xl:flex-row gap-y-20 xl:gap-y-0 gap-x-10 xl:gap-x-[62px] font-Montserrat text-black-200 text-center" data-aos="fade-up" data-aos-duration="2000">
                    <div className="grid justify-items-center">
                        <div className={styleCircle} style={shadowCircle}>
                            <div className={styleCircleInner} style={shadowCircleInner}>
                                <Image src={v4} alt="v4" className={styleImg}/>
                            </div>
                        </div>
                        <div className="grid justify-items-center content-center w-[320px] md:w-[330px] lg:w-[320px] h-[50px] md:h-[54px] lg:h-[50px] bg-[#E7FFC1] mt-10" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
                            <p className={styleTitle}>
                                Electrical Engineering
                            </p>
                        </div>
                        <h5 className={styleSubTitle}>
                            Apa itu Teknik Elektro?
                        </h5>
                        <p className={styleDescription}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                        </p>
                        <h5 className={styleSubTitle}>
                            Kenapa TE DTETI?
                        </h5>
                        <p className={styleDescription}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                        </p>
                    </div>
                    <div className="grid justify-items-center">
                        <div className={styleCircle} style={shadowCircle}>
                            <div className={styleCircleInner} style={shadowCircleInner}>
                                <Image src={v5} alt="v4" className={styleImg}/>
                            </div>
                        </div>
                        <div className="grid justify-items-center content-center w-[320px] md:w-[330px] lg:w-[320px] h-[50px] md:h-[54px] lg:h-[50px] bg-[#E7FFC1] mt-10" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
                            <p className={styleTitle}>
                                Information Technology
                            </p>
                        </div>
                        <h5 className={styleSubTitle}>
                            Apa itu Teknologi Informasi?
                        </h5>
                        <p className={styleDescription}>
                            Teknologi Informasi merupakan program studi yang mempelajari solusi untuk permasalahan informasi yang diselesaikan menggunakan
                            teknologi dan diterapkan di berbagai bidang seperti pemerintahan, kesehatan, pendidikan, dan pengembangan bisnis.
                        </p>
                        <h5 className={styleSubTitle}>
                            Kenapa TI DTETI?
                        </h5>
                        <p className={styleDescription}>
                            Program Studi Teknologi Informasi DTETI menawarkan proses pembelajaran yang dirancang agar mahasiswa dapat memberikan bekal keahlian 
                            yang menyeluruh bagi mahasiswa sehingga mereka mempunyai kompetensi dasar untuk semua bidang keteknikan dan informasi.
                        </p>
                    </div>
                    <div className="grid justify-items-center">
                        <div className={styleCircle} style={shadowCircle}>
                            <div className={styleCircleInner} style={shadowCircleInner}>
                                <Image src={v6} alt="v4" className={styleImg}/>
                            </div>
                        </div>
                        <div className="grid justify-items-center content-center w-[320px] md:w-[330px] lg:w-[320px] h-[50px] md:h-[54px] lg:h-[50px] bg-[#E7FFC1] mt-10" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
                            <p className={styleTitle}>
                                Biomedical Engineering
                            </p>
                        </div>
                        <h5 className={styleSubTitle}>
                            Apa itu Teknik Biomedis?
                        </h5>
                        <p className={styleDescription}>
                            Teknik Biomedis adalah program studi yang menggabungkan kemampuan engineer, terlebih dalam bidang teknologi, terhadap ilmu medis dan biologis 
                            sehingga dapat menciptakan atau mengembangkan peralatan serta metode-metode baru untuk memudahkan diagnosis dan ilmu kesehatan.
                        </p>
                        <h5 className={styleSubTitle}>
                            Kenapa TB DTETI?
                        </h5>
                        <p className={styleDescription}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}