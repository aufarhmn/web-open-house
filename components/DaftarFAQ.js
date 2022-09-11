import React from "react";
import faq from "./FAQ.json";

const styleQ = "w-full px-[24px] py-[25px] rounded bg-grey-100 font-Josefin font-bold text-xl"
const styleA = "font-Josefin font-light text-xl pb-10"

export default function DaftarFAQ () {
    return (
        <div className="w-full h-full grid content-center px-16 py-[100px] bg-white">
            <div className="container mx-auto space-y-5">
                {
                    //TODO json faq map()
                    faq["faq"].map((e) => {
                        return (
                            <>
                                <div className={styleQ}>
                                    <h2>{e.ask}</h2>
                                </div>
                                <p className={styleA}>{e.answer}</p>
                            </>
                        );
                    })}

            </div>
        </div>
    )
}
