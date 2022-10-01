import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebase.js";
import { useState } from "react";
import { FormPopUp } from "./FormPopUp.js";
import { FaSpinner } from "react-icons/fa";

const Form = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [event, setEvent] = React.useState("");
    const [showPopUp, setShowPopUp] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dbReff = collection(db, "form-data");

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        addDoc(dbReff, {
            name: name,
            email: email,
            event: event,
        })
        .then(() => {
            setShowPopUp(true);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error.message);
            setSubmitError(true);
            setShowPopUp(true);
        });

        setName("");
        setEmail("");
        setEvent("");
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
                <form onSubmit={ handleSubmit } className="grid justify-items-center lg:justify-items-start">
                    <div className="w-full">
                        <input 
                            name="nama"
                            className="w-full p-8 mt-11 rounded-xl h-14 text-xl"
                            placeholder="Your Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required
                        /> 
                    </div>
                    <div className="w-full">
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
                    <div className="cursor-pointer w-full">
                        <select 
                            name="event"
                            className="w-full p-2 pl-8 mt-7 rounded-xl h-14 text-xl"
                            value={event} 
                            onChange={(e) => setEvent(e.target.value)}
                            required
                        >
                            <option value="" disabled selected hidden className="text-grey-400">Select Event</option>
                            <option value="TETI Fair">TETI Fair</option>
                            <option value="TETI Course">TETI Course</option>
                            <option value="TETI Class">TETI Class</option>
                            <option value="TETI Talk">TETI Talk</option>
                        </select>
                        <p className="text-white font-Montserrat mt-7 md:text-left text-center">
                            If you want to choose multiple events, please fill this form multiple times.
                        </p>
                    </div>
                    <button type="submit" className="mt-10 h-14 w-1/2 md:w-2/5 lg:w-1/2 2xl:w-2/5 p-auto text-green-300 hover:text-white bg-white hover:bg-green-300 rounded-xl text-xl lg:text-2xl font-bold font-Montserrat duration-200">
                        {isLoading ? <FaSpinner className="animate-spin mx-auto" /> : "Submit"}
                    </button>              
                </form>
            <FormPopUp showPopUp={showPopUp} submitError={submitError} closePopUp={closePopUp}/>
            </div>
        </div>
        </>
    );
}

export default Form;