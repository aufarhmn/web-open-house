import React from "react";
import { db } from "../firebase/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import faq from "./FAQ.json";

const styleQ = "w-full px-[24px] py-[25px] rounded bg-grey-100 font-Josefin font-bold text-xl"
const styleA = "font-Josefin font-light text-xl pb-10"

const faqRef = collection(db, "faq-details");
const docsSnap = await getDocs(faqRef);
var data = docsSnap.docs.map((doc) => doc.data());

export default function DaftarFAQ () {
    return (
        <div className="w-full h-full grid content-center px-16 py-[100px] bg-white">
            <div className="container mx-auto space-y-5">
                {
                    data.map((faq, index) => {
                        return (
                            <>
                                <div className={styleQ} key={index}>
                                    <h2>{faq.question}</h2>
                                </div>
                                    <p className={styleA} key={index}>{faq.answer}</p>
                            </>
                    );
                })}
            </div>
        </div>
    )
}
