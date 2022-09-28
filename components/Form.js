import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebase.js";
import SubEventModal from "./SubEventModal";
import { useState } from "react";
import { FormPopUp } from "./FormPopUp.js";

const Form = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [day, setDay] = React.useState("");
    const [showPopUp, setShowPopUp] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const dbReff = collection(db, "form-data");

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(dbReff, {
            name: name,
            email: email,
            day: day,
        })
        .then(() => {
            console.log("Document successfully written!");
            setShowPopUp(true);
        })
        .catch((error) => {
            console.log(error.message);
            setSubmitError(true);
            setShowPopUp(true);
        });

        setName("");
        setEmail("");
        setDay("");
    };

    const closePopUp = () => {
        setShowPopUp(false);
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-blue-500 h-full w-full" id="form">
            <div className="bg-grey-400 h-full hidden lg:flex">
               
            </div>
            <div id=" " className="h-full p-10 sm:p-20">
                <p className="text-5xl text-white font-Josefin">
                    Register yourself for the amazing thing ahead
                </p>
                <p className="text-white font-Montserrat mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididuntut labore et.
                </p>
                <form onSubmit={ handleSubmit }>
                    <div className="">
                        <input 
                            name="nama"
                            className="w-full p-8 mt-11 rounded-xl h-14 text-xl"
                            placeholder="Your Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required
                        /> 
                    </div>
                    <div className="">
                        <input 
                            name="email"
                            className="w-full p-8 mt-7 rounded-xl h-14 text-xl"
                            placeholder="yourmailaddressplease@mail.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                        />
                    </div>
                    <div className="cursor-pointer">
                        <select 
                            name="day"
                            className="w-full p-2 pl-8 mt-7 rounded-xl h-14 text-xl"
                            value={day} 
                            onChange={(e) => setDay(e.target.value)}
                            required
                        >
                            <option value="" disabled selected hidden className="text-grey-400">Select Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <button type="submit" className="mt-10 h-14 w-1/2 p-auto text-green-300 bg-white rounded-xl text-xl sm:text-2xl font-bold font-Montserrat">Submit</button>
                </form>
            <FormPopUp showPopUp={showPopUp} submitError={submitError} closePopUp={closePopUp}/>
            </div>
        </div>
        </>
    );
}

export default Form;