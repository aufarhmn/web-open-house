import React from "react";

export default function Title() {
    return (
        <div className="overflow-hidden">
            <div className="grid container mx-auto">
                <div className="h-[80vh] flex items-center justify-center md:h-[auto] md:justify-start md:my-[120px] md:mx-[50px] lg:mx-[100px] 2xl:mx-[100px]" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="md:text-[134px] text-[72px] font-bold text-[#93DDDE] font-Josefin text-center md:text-left">
                        TETI Talk
                    </h1>
                </div>
                <div className="flex flex-col w-full lg:flex-row" data-aos="fade-up" data-aos-duration="2000">
                    <div className="h-[40%] lg:w-[40%] lg:h-[auto] flex justify-center items-start">
                        <h2 className="text-[36px] md:text-[58px] font-bold font-Josefin">
                            About TETI
                            <br/>
                            <div className="lg:w-[250px] lg:h-[80px] bg-[#E7FFC1]" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
                                <p className="text-center">Talk</p>
                            </div>
                        </h2>
                    </div>
                    <div className="h-[70%] lg:w-[60%] flex justify-center my-[24px] lg:my-0 font-Poppins text-[24px] md:text-[30px]  text-justify">
                        <p className="w-[90%]">Berbincang bersama dosen - dosen DTETI FT UGM untuk mengenal lebih jauh tentang Departemen Teknik Elektro dan Teknologi Informasi mulai dari program studi hingga kegiatan kemahasiswaan. Selain itu, akan ada juga talkshow dengan alumni-alumni DTETI UGM untuk berbincang bersama, berbagi insight serta pengalaman mereka setelah lulus</p>
                    </div>
                </div>
            </div>
        </div>
    );
}