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
const styleTitle = "font-bold text-[19px] mt-10 lg:mt-20 mb-5"
const styleDescription = "text-[17px]"

export default function StandFor() {
    return (
        // TODO: Responsive, aos
        <div className="w-full h-full px-16 pb-[120px]">
            <div className="grid container mx-auto space-y-32">
                <h3 className="text-[58px] font-bold text-black-100 text-left font-Josefin">
                    What Does TETITB Stand for?
                </h3>
                <div className="flex items-start justify-between flex-col lg:flex-row gap-y-20 xl:gap-y-0 gap-x-10 xl:gap-x-[62px] font-Montserrat text-black-200 text-center">
                    <div className="grid justify-items-center">
                        <div className={styleCircle} style={shadowCircle}>
                            <div className={styleCircleInner} style={shadowCircleInner}>
                                <Image src={v4} alt="v4" className={styleImg}/>
                            </div>
                        </div>
                        <h4 className={styleTitle}>
                            Electrical Engineering
                        </h4>
                        <p className={styleDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        </p>
                    </div>
                    <div className="grid justify-items-center">
                        <div className={styleCircle} style={shadowCircle}>
                            <div className={styleCircleInner} style={shadowCircleInner}>
                                <Image src={v5} alt="v4" className={styleImg}/>
                            </div>
                        </div>
                        <h4 className={styleTitle}>
                            Information Technology
                        </h4>
                        <p className={styleDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        </p>
                    </div>
                    <div className="grid justify-items-center">
                        <div className={styleCircle} style={shadowCircle}>
                            <div className={styleCircleInner} style={shadowCircleInner}>
                                <Image src={v6} alt="v4" className={styleImg}/>
                            </div>
                        </div>
                        <h4 className={styleTitle}>
                            Biomedical Engineering
                        </h4>
                        <p className={styleDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}