import { addDoc, collection } from "firebase/firestore";
import { GetInTouchPopUp } from "./GetInTouchPopUp.js";
import React from "react";
import { useState } from "react";
import { db } from "../firebase/firebase.js";

const GetInTouch = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const dbReff = collection(db, "get-in-touch");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(dbReff, {
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        setShowPopUp(true);
      })
      .catch((error) => {
        setSubmitError(true);
        setShowPopUp(true);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  const closePopUp = () => {
      setShowPopUp(false);
  }

  const shadowInput = {
    boxShadow: "inset 7.66376px 7.66376px 15.3275px rgba(0, 0, 0, 0.09)"
  }

  return (
    <div className="w-full h-full bg-white px-16 py-20">
      <div className="grid container mx-auto text-center font-Montserrat font-bold text-[45px]" data-aos="fade-up" data-aos-duration="2000">
        <h1>
          Missing Something from Us?
        </h1>
        <div className="font-normal text-center pt-8 text-[27px] pb-12">
          <h3>
            Our Team are happy to help you :D
          </h3>
        </div>
        <div className="w-full flex justify-center" data-aos="fade-up" data-aos-duration="2000">
          <form onSubmit={handleSubmit}>
            <div className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-full flex flex-col lg:flex-row space-y-10 lg:space-y-0 space-x-0 lg:space-x-10 xl:space-x-14">
              <input
                className="p-8 rounded-xl h-8 text-xl text-black bg-[#E8E8E8]"
                style={shadowInput}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="p-8 rounded-xl h-8 text-xl text-black bg-[#E8E8E8]"
                style={shadowInput}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
            </div>
            <div className="mt-8 w-[250px] sm:w-[300px] md:w-[400px] lg:w-full">
              <input 
                className="w-full p-8 rounded-xl text-xl text-black bg-[#E8E8E8]"
                style={shadowInput}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="pt-10">
              <button className="text-xl py-4 lg:py-4 px-5 lg:px-10 rounded-xl bg-green-300 hover:bg-[#12ABAA] text-xl text-white" type="submit">
                Get In Touch
              </button>
            </div>
          </form>
          <GetInTouchPopUp getInTouchPopUpShowPopUp={showPopUp} getInTouchPopUpSubmitError={submitError} getInTouchPopUpClosePopUp={closePopUp}/>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
