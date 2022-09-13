import React from "react";

export default function Title() {
    return (
        // TODO: Responsive, padding (px)
        <div className="w-full h-full px-16 py-[120px]">
            <div className="grid container mx-auto space-y-16 font-Poppins">
                <div className="grid justify-items-start space-y-[100px] lg:space-y-[200px]">
                    <h1 className="font-Josefin text-[134px] font-bold text-blue-25">
                        TETI Fair
                    </h1>
                    <div className="flex items-start flex-col lg:flex-row gap-10 lg:gap-0 font-Poppins text-blue-950">
                        <div className="grid w-full xl:w-3/5 text-left">
                            <h2 className="font-bold text-[58px]">
                                About TETI
                                <br/>
                                <p className="text-[72px]">
                                    Fair
                                </p>
                            </h2>
                        </div>
                        <p className="text-justify text-[30px] lg:w-full xl:">
                            Kegiatan webinar yang akan mengenalkan lebih jauh Departemen Teknik Elektro dan Teknologi Informasi 
                            mulai dari program studinya sampai kegiatan kemahasiswaan. Para siswa akan di kenalakan secara lebih 
                            mendalam tentang dunia perkuliahan, program studi yang ditawarkan, dan hal apa saja yang diperlukan 
                            sebelum menjadi mahasiswa DTETI.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}