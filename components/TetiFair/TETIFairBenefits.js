import Image from 'next/image'
import benefits1 from '/Assets/Images/benefitsAssets/1.svg'
import benefits2 from '/Assets/Images/benefitsAssets/2.svg'
import benefits3 from '/Assets/Images/benefitsAssets/3.svg'

const benefitsStyle = "bg-[#F3F3F3] rounded-[28px] w-[290px] h-[412px] flex flex-col items-center my-5 lg:my-0"
const imgStyle = "w-[155.55px] h-[155.55px] flex justify-center items-center rounded-full mt-[25px] "

const shadow1 = {
    boxShadow: "-13.1635px -13.1635px 32.9088px #FFFFFF, 13.1635px 13.1635px 32.9088px #D2D2D2"
}

const shadow2 = {
    boxShadow: "inset -11.7839px -11.7839px 29.4597px #FFFFFF, inset 11.7839px 11.7839px 29.4597px #CDCDCD"
}

export default function TETIFairBenefits() {
    return(
        <div className="w-[100%] h-full px-16 py-36 md:py-72">
            <div className="grid container mx-auto">
                    <h3 className="text-[58px] font-bold font-Josefin text-[#4f4d4d]" data-aos="fade-up" data-aos-duration="2000">
                        The Benefits
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-between gap-x-10 lg:mx-0 pt-10 md:pt-14 mx-auto" data-aos="zoom-in-up" data-aos-duration="2000">
                        <div className={benefitsStyle} style={shadow1}>
                            <div className={imgStyle} style={shadow2}>
                                <Image src={benefits1} alt="advantage1" />
                            </div>
                            <div className="w-[80%] h-[50%] flex justify-center items-center">
                                <p className="font-Josefin text-[#434343] text-center">
                                    Mengetahui berbagai macam laboratorium yang ada pada gedung DTETI FT UGM.
                                </p>
                            </div>
                        </div>
                        <div className={benefitsStyle} style={shadow1}>
                            <div className={imgStyle} style={shadow2}>
                                <Image src={benefits2} alt="advantage2" />
                            </div>
                            <div className="w-[80%] h-[50%] flex justify-center items-center">
                                <p className="font-Josefin text-[#434343]  text-center">
                                    Menambah pengetahuan tentang Unit Kegiatan Mahasiswa (UKM) dan berbagai macam Team yang dapat diikuti atau dimasuki oleh mahasiswa TETI.
                                </p>
                            </div>
                        </div>
                        <div className={benefitsStyle} style={shadow1}>
                            <div className={imgStyle} style={shadow2}>
                                <Image src={benefits3} alt="advantage3" />
                            </div>
                            <div className="w-[80%] h-[50%] flex justify-center items-center">
                                <p className="font-Josefin text-[#434343] text-center">
                                    DTETI FT UGM sudah mengadopsi kurikulum internasional dari IABEE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}