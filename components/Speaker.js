import Image from 'next/image'


const benefitsStyle = "bg-[#F3F3F3] rounded-[28px] w-[430px] h-[592px] flex flex-col items-center "
const imgStyle = "w-[100%] h-[100%] flex justify-center items-end rounded-t-[28px]"

const shadow = {
    boxShadow: "-13.1635px -13.1635px 32.9088px #FFFFFF, 13.1635px 13.1635px 32.9088px #D2D2D2"
}


export default function Speaker(props) {
    return(
        
                <div className="w-[30%]flex justify-between my-3">
                    <div className={benefitsStyle} style={shadow}>
                        <div className={imgStyle}>
                            <Image src={props.photo} alt="advantage1" />
                        </div>
                        <div className="h-[35%] w-[80%] flex flex-col justify-center">
                            <p className="font-Josefin text-[26px] text-[#434343] font-bold">{props.name}</p>
                            <p className="font-Josefin text-[26px] text-[#434343]">{props.job}</p>
                        </div>
                    </div>
                </div>

    )
}