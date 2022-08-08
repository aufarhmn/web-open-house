import { useEffect, useMemo, useState } from "react";
import {IoArrowUpCircleSharp} from 'react-icons/io5'
import {BsFillArrowUpSquareFill, BsArrowUpSquareFill} from 'react-icons/bs'
import clsx from "clsx";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isFooter, setIsFooter] = useState(false);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }   
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    useEffect(() => {
        const changeColor = () => {
            if(window.pageYOffset > (document.body.offsetHeight-1540)){
                setIsFooter(true);
            } else {
                setIsFooter(false);
            }
        };
        window.addEventListener("scroll", changeColor);
        return () => window.removeEventListener('scroll', changeColor);
    }, []);

    return (
        <div onClick={backToTop}>
            <BsArrowUpSquareFill className={clsx(isVisible ? "transition-all ease-in-out duration-500 float-right cursor-pointer fixed right-[24px] bottom-[24px] z-[300] w-[44px] h-[44px] md:right-[54px] md:bottom-[54px] lg:w-[58px] lg:h-[58px]" : "fixed right-[33px] -bottom-14 transition-all ease-in-out duration-500", isFooter ? "text-blue-600 hover:text-blue-400 active:text-blue-700" : "text-blue-600 hover:text-blue-400 active:text-blue-700")}/>
            {/* <BsArrowUpSquareFill className={clsx(isVisible ? "transition-all ease-in-out duration-500 float-right cursor-pointer fixed right-[24px] bottom-[24px] z-[300] w-[64px] h-[64px] md:right-[54px] md:bottom-[54px] lg:w-[78px] lg:h-[78px]" : "fixed right-[33px] -bottom-14 transition-all ease-in-out duration-500", isFooter ? "text-blue-600 hover:text-blue-400 active:text-blue-700" : "text-blue-600 hover:text-blue-400 active:text-blue-700")}/> */}
        </div>
    );
}