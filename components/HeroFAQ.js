import Image from "next/image"
import FAQImage from "../Assets/FAQ/FAQHero.png"

export const HeroFAQ = () =>{
    return(
        <div className="lg:columns-2 mx-auto sm:mx-0 sm:px-40 mt-5 flex w-2/3 lg:w-full">
            <div className="h-max lg:w-2/3 lg:ml-7 flex-1 my-auto">
                <p className="text-bold font-Josefin text-6xl lg:text-8xl text-blue-25 lg:w-1/3 h-max">
                    Frequently Asked Questions
                </p>
            </div>
            <div className="hidden lg:block">
                <Image src={FAQImage} alt="FAQ" />
            </div>
        </div>
    )
}