import Image from 'next/image'
import questionMark from '/Assets/Images/TetiCourse/questionmark.svg'


const benefitsStyle = "bg-[#F3F3F3] rounded-[28px] w-[430px] h-[60vh] md:h-[592px] flex flex-col items-center "
const imgStyle = "w-[80%] h-[80%] flex justify-center items-end rounded-t-[28px]"

const shadow = {
    boxShadow: "-13.1635px -13.1635px 32.9088px #FFFFFF, 13.1635px 13.1635px 32.9088px #D2D2D2"
}


export default function ComingSoon(props) {
    return(
        
                <div className="w-[100%] md:w-[auto] flex justify-between my-20 md:my-3" data-aos="fade-up-right" data-aos-duration="2000">
                    <div className={benefitsStyle} style={shadow}>
                        <div className={imgStyle}>
                            <Image src={questionMark} alt="advantage1" />
                        </div>
                    </div>
                </div>

    )
}