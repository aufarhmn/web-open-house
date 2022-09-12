import Image from 'next/image'
import benefits1 from '../Assets/Images/benefitsAssets/1.svg'
import benefits2 from '../Assets/Images/benefitsAssets/2.svg'
import benefits3 from '../Assets/Images/benefitsAssets/3.svg'

const benefitsStyle = "bg-[#F3F3F3] rounded-[28px] w-[290px] h-[412px] flex flex-col items-center "
const imgStyle = "w-[155.55px] h-[155.55px] flex justify-center items-center rounded-full mt-[25px] "

const shadow1 = {
    boxShadow: "-13.1635px -13.1635px 32.9088px #FFFFFF, 13.1635px 13.1635px 32.9088px #D2D2D2"
}

const shadow2 = {
    boxShadow: "inset -11.7839px -11.7839px 29.4597px #FFFFFF, inset 11.7839px 11.7839px 29.4597px #CDCDCD"
}

export default function Benefits() {
    return(
        <div className="w-[80%] flex flex-col mx-auto my-72">
                <h3 className="text-[58px] font-bold font-Josefin text-[#4f4d4d]">The Benefits</h3>
                <div className="flex justify-between my-3">
                    <div className={benefitsStyle} style={shadow1}>
                        <div className={imgStyle} style={shadow2}>
                            <Image src={benefits1} alt="advantage1" />
                        </div>
                        <div className="w-[80%] h-[50%] flex justify-center items-center">
                            <p className="font-Josefin text-[#434343] text-center">Penjelasan secara lebih mendetail tentang departemen teknik elektro dan teknologi informasi.</p>
                        </div>
                    </div>
                    <div  className={benefitsStyle} style={shadow1}>
                        <div  className={imgStyle}  style={shadow2}>
                            <Image src={benefits2} alt="advantage2" />
                        </div>
                        <div className="w-[80%] h-[50%] flex justify-center items-center">
                            <p className="font-Josefin text-[#434343]  text-center">Pengalaman bermanfaat untuk mempersiapkan dunia perkuliahan secara lebih awal.</p>
                        </div>
                    </div>
                    <div className={benefitsStyle} style={shadow1}>
                        <div className={imgStyle}   style={shadow2}>
                            <Image src={benefits3} alt="advantage3" />
                        </div>
                        <div className="w-[80%] h-[50%] flex justify-center items-center">
                            <p className="font-Josefin text-[#434343] text-center">“ Establish ourselves as a reliable medium between the demand side and the supply side of the real estate industry ” one-stop</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}