import React from "react";

const styleCircle = "bg-[#EDEDED] rounded-full w-[242px] flex justify-center items-center"
const styleCircleInner = "w-[158px] flex justify-center items-center rounded-full"
const styleImg = "w-[66px]"
const shadowCircle = {
    boxShadow: "inset -14.8564px -14.8564px 37.1411px #FFFFFF, inset 14.8564px 14.8564px 37.1411px #CDCDCD"
}
const shadowCircleInner = {
    boxShadow: "14.8564px 14.8564px 37.1411px rgba(0, 0, 0, 0.18), inset 14.8564px 14.8564px 37.1411px rgba(255, 255, 255, 0.25), inset -14.8564px -14.8564px 37.1411px #CDCDCD, inset 14.8564px 14.8564px 37.1411px #FFFFFF"
}

export default function StandFor() {
    return (
        // TODO: Responsive, aos
        <div className="w-full h-full px-16 py-[120px]">
            <div className="grid container mx-auto space-y-16 font-Montserrat">
                <h3 className="text-[41px] font-bold text-black-100 text-left">
                     What's TETITB Stand for
                </h3>
                <div className="flex items-start justify-between lg:flex-row gap-10 xl:gap-x-[62px] text-black-100 text-center">
                    <div className={styleCircle} style={shadowCircle}>
                         <div className={styleCircleInner} style={shadowCircleInner}>
                            <img
                                src="/Assets/Images/TetiFair/Vector 4.svg"
                                className={styleImg}
                            />
                        </div>
                        <h4 className="font-bold text-[19px]">
                            Electrical Engineering
                        </h4>
                        <p className="text-[17px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}