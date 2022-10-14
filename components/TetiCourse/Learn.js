import Image from 'next/image'
import arduino from '/Assets/Images/TetiCourse/arduino.jpg';
import uiux from '/Assets/Images/TetiCourse/uiux.jpg';
import webdev from '/Assets/Images/TetiCourse/webdev.jpeg';


// const benefitsStyle = "bg-[#F3F3F3] rounded-[28px] w-[430px] h-[60vh] md:h-[592px] flex flex-col items-center "
const imgStyle = "w-1/2 flex rounded-full h-72"

const shadow = {
    boxShadow: "-13.1635px -13.1635px 32.9088px #FFFFFF, 13.1635px 13.1635px 32.9088px #D2D2D2"
}
export const CardLearn = ({picture, title, mentor, description}) => {
    return(
        <div 
        className="bg-white w-full md:w-4/5 xl:w-5/12 min-w-[520px] h-full flex-row flex rounded-3xl p-5 gap-5 " 
        data-aos="fade-up"
        data-aos-duration="700" 
        style={shadow}>
            <div className={imgStyle}>
                <Image src={picture} className="rounded-xl object-cover object-left h-72" alt={title} />
            </div>
            <div className="flex-col w-1/2">
                <div className="font-Montserrat text-2xl font-bold">
                    {title}
                </div>
                <div className="font-Montserrat text-xs font-semibold">
                    Teach By {mentor}
                </div>
                <div className="mt-5 font-Montserrat text-xs">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default function Learn() {
    


    return(
        <>
            <CardLearn
                picture={arduino}
                title="Robotics"
                mentor="Ahmad Ataka"
                description="We believe in long term orientation with our diversified business model thus making us stand out in the industry" />
            <CardLearn
                picture={webdev}
                title="Web Development"
                mentor="Ridi Ferdian"
                description="Para peserta akan belajar mengenai alur mengembangkan dan membuat web secara terstruktur bersama dengan dosen berpengalaman." />
            <CardLearn
                picture={uiux}
                title="UI/UX"
                mentor="Sigit Basuki"
                description="We believe in long term orientation with our diversified business model thus making us stand out in the industry" />
        </>
           
    )
}