import React from "react";

export default function About() {
    return (
        // TODO: Responsive (font size)
        <div className="w-full h-full px-16 pt-[209px] pb-[175px] bg-white" id="about">
            <div className="grid container mx-auto space-y-16 font-Poppins text-center">
                <h2 className="text-[54px] font-bold text-black-100">
                    About Open House
                </h2>
                <p className="text-[27px] font-normal text-black-200">
                    Open House merupakan kegiatan tahunan yang diadakan oleh Departemen Teknik Elektro dan Teknologi Informasi 
                    yang bertujuan untuk memperkenalkan DTETI ke masyarakat luas khususnya kepada siswa/i yang akan 
                    melanjutkan studinya ke perguruan tinggi. Open House DTETI 2022 mengangkat tema TETIZONE 
                    serta tagline “Break the Encryption, Unveil your Passion”. Rangkaian acara yang diadakan pada event ini 
                    yaitu Teti Fair, Teti Class, Teti Course, dan juga Teti Talk.
                </p>
            </div>
        </div>
    );
}