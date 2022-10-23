import React from "react";

export default function About() {
    return (
        <main className="overflow-x-hidden">
            <div className="w-full h-full px-7 sm:px-10 md:px-16 pt-32 md:pt-40 lg:pt-[209px] pb-[175px] bg-white" id="about">
                <div className="grid container mx-auto space-y-16 font-Poppins text-center">
                    <h2 className="text-[40px] leading-tight sm:text-5xl sm:leading-tight font-bold text-black-100" data-aos="zoom-in" data-aos-duration="2000">
                        About Open House
                    </h2>
                    <p className="text-xl leading-relaxed sm:text-2xl sm:leading-relaxed font-normal text-black-200" data-aos="zoom-in" data-aos-duration="2000">
                        Open House merupakan kegiatan tahunan yang diadakan oleh Departemen Teknik Elektro dan Teknologi Informasi 
                        yang bertujuan untuk memperkenalkan DTETI ke masyarakat luas khususnya kepada siswa/i yang akan 
                        melanjutkan studinya ke perguruan tinggi. Open House DTETI 2022 mengangkat tema TETIZONE 
                        serta tagline “Break the Encryption, Unveil your Passion”. Rangkaian acara yang diadakan pada event ini 
                        yaitu TETI Fair, TETI Class, TETI Course, dan juga TETI Talk
                    </p>
                </div>
            </div>
        </main>
    );
}