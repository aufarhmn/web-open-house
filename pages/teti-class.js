import Navbar from "../components/Navbar";

export default function TETIClass() {
    return(
        <>
            <Navbar />
            <div className="my-[120px] mx-[100px] ">
                <h1 className="text-[134px] font-bold text-[#93DDDE] font-Josefin">TETI Class</h1>
            </div>
            <div className="flex w-full">
                <div className="w-[40%] flex justify-center items-start">
                    <h2 className="text-[58px] font-bold font-Josefin">About TETI
                        <br/>
                        <div className="w-[250px] h-[80px] bg-[#E7FFC1]" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
                            <p className="text-center">Class</p>
                        </div>
                    </h2>
                </div>
                <div className="w-[60%] font-Poppins text-[30px] text-justify">
                    <p className="w-[90%]">Teti Class merupakan kegiatan berupa online class salah satu mata kuliah di DTETI. Para siswa akan diajak untuk merasakan secara langsung pengalaman berkuliah di DTETI. Dengan adanya kegiatan ini diharapkan dapat menjawab rasa penasaran peserta dengan proses pembelajaran.</p>
                </div>
            </div>
        </>
    )
}