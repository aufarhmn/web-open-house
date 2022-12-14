import { getDocs, addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import React, { lazy } from "react";
import { db } from "../firebase/firebase.js";
import { useState } from "react";
import { FormPopUp } from "./FormPopUp.js";
import { FaSpinner } from "react-icons/fa";
import { useEffect } from "react";

import VectorImg from "../Assets/Images/Group 254.png";
import { Lazy } from "swiper";

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [event, setEvent] = React.useState("");
  const [asalSekolah, setAsalSekolah] = React.useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [getAllData, setGetAllData] = useState(true);
  const dbReff = collection(db, "form-data");
	//! buka tutup form
  const isFormClosed = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormClosed) {
      setIsLoading(true);
      addDoc(dbReff, {
        name: name,
        email: email,
        event: event,
        asalSekolah: asalSekolah,
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
      setAsalSekolah("");
    } else {
      alert("Pendaftaran telah ditutup");
    }
  };

  const limitForm = async () => {
    const getAllDocs = await getDocs(collection(db, "form-data"));
    var allData = getAllDocs.docs.map((doc) => doc.data());
    setGetAllData(allData);
    var webDevCount = 0,
      uiuxCount = 0;
    for (var i = 0; i < allData.length; i++) {
      if (allData[i].event === "TETI Course - Web Dev") {
        webDevCount++;
      }
      if (allData[i].event === "TETI Course - UI/UX") {
        uiuxCount++;
      }
    }
    if (webDevCount >= 34) {
      document.getElementById("WebDev").disabled = true;
    }
    if (uiuxCount >= 24) {
      document.getElementById("UIUX").disabled = true;
    }
  };

  useEffect(() => {
    if (getAllData === true) {
      limitForm();
      setGetAllData(false);
    }
  }, [getAllData]);

  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <>
      <div className="px-7 md:px-16 pt-28 pb-48">
        <div className="grid md:container mx-auto">
          <h2
            className="font-Poppins pb-16 text-center text-[40px] leading-tight sm:text-5xl sm:leading-tight font-bold text-blue-25"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Register Here!
          </h2>
          <div
            id="form"
            className="rounded-[29.6203px] bg-white mx-auto"
            style={{
              boxShadow:
                "0.987342px 0.987342px 25.6709px 8.88608px rgba(0, 0, 0, 0.25)",
            }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              id=" "
              className="w-full lg:flex lg:justify-center lg:gap-x-10 p-10 sm:p-14 lg:p-14 xl:py-20"
            >
              <div
                className="hidden lg:grid w-full content-end"
                style={{
                  transform: "translate(0%, -20%)",
                  width: "80%",
                }}
              >
                <Image src={VectorImg.src} width={692.63} height={271.31} />
              </div>
              <div className="w-full lg:w-2/4 grid justify-items-center">
                <p className="text-[35px] sm:text-[40px] lg:text-5xl leading-tight text-[#525252] font-Josefin">
                  Register yourself for the amazing thing ahead
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="grid justify-items-center lg:justify-items-start"
                >
                  <div className="w-full">
                    {isFormClosed ? (
                      <input
                        name="nama"
                        className="w-full px-6 py-8 mt-11 border-2 border-blue-25 rounded-xl h-14 text-xl cursor-not-allowed"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled
                      />
                    ) : (
                      <input
                        name="nama"
                        className="w-full px-6 py-8 mt-11 border-2 border-blue-25 rounded-xl h-14 text-xl"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    )}
                  </div>
                  <div className="w-full">
                    {isFormClosed ? (
                      <input
                        name="asalSekolah"
                        className="w-full px-6 py-8 mt-7 border-2 border-blue-25 rounded-xl h-14 text-xl cursor-not-allowed"
                        placeholder="School Name"
                        value={asalSekolah}
                        onChange={(e) => setAsalSekolah(e.target.value)}
                        disabled
                      />
                    ) : (
                      <input
                        name="asalSekolah"
                        className="w-full px-6 py-8 mt-7 border-2 border-blue-25 rounded-xl h-14 text-xl"
                        placeholder="School Name"
                        value={asalSekolah}
                        onChange={(e) => setAsalSekolah(e.target.value)}
                        required
                      />
                    )}
                  </div>
                  <div className="w-full">
                    {isFormClosed ? (
                      <input
                        name="email"
                        className="w-full px-6 py-8 mt-7 border-2 border-blue-25 rounded-xl h-14 text-xl cursor-not-allowed"
                        placeholder="yourmailaddressplease@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled
                        type="email"
                      />
                    ) : (
                      <input
                        name="email"
                        className="w-full px-6 py-8 mt-7 border-2 border-blue-25 rounded-xl h-14 text-xl"
                        placeholder="yourmailaddressplease@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                      />
                    )}
                  </div>
                  <div className="cursor-pointer w-full">
                    {isFormClosed ? (
                      <select
                        name="event"
                        className="w-full px-6 mt-7 border-2 border-blue-25 rounded-xl h-14 text-xl cursor-not-allowed"
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                        disabled
                      >
                        <option
                          value=""
                          disabled
                          selected
                          hidden
                          className="text-grey-400"
                        >
                          Select Event
                        </option>
                        <option value="TETI Fair">TETI Fair</option>
                        <option value="TETI Talk">TETI Talk</option>
                        <option value="TETI Course - Web Dev" id="WebDev">
                          TETI Course - Website Development
                        </option>
                        <option value="TETI Course - UI/UX" id="UIUX">
                          TETI Course - UI/UX
                        </option>
                        <option value="TETI Course - Robotika">
                          TETI Course - Robotika
                        </option>
                      </select>
                    ) : (
                      <select
                        name="event"
                        className="w-full px-6 mt-7 border-2 border-blue-25 rounded-xl h-14 text-xl"
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                        required
                      >
                        <option
                          value=""
                          disabled
                          selected
                          hidden
                          className="text-grey-400"
                        >
                          Select Event
                        </option>
                        <option value="TETI Fair">TETI Fair</option>
                        <option value="TETI Talk">TETI Talk</option>
                        <option value="TETI Course - Web Dev" id="WebDev">
                          TETI Course - Website Development
                        </option>
                        <option value="TETI Course - UI/UX" id="UIUX">
                          TETI Course - UI/UX
                        </option>
                        <option value="TETI Course - Robotika">
                          TETI Course - Robotika
                        </option>
                      </select>
                    )}
                    <p className="text-black font-Montserrat mt-7 md:text-left text-center">
                      If you want to choose multiple events, please fill this
                      form multiple times.
                    </p>
                  </div>
                  {isFormClosed ? (
                    <button
                      type="submit"
											title="Pendaftaran sudah ditutup"
                      className="mt-10 h-14 w-1/2 md:w-2/5 lg:w-1/2 2xl:w-2/5 p-auto text-white bg-blue-25 rounded-xl text-xl xl:text-2xl font-bold font-Montserrat duration-200 bg-opacity cursor-not-allowed"
                    >
                      {isLoading ? (
                        <FaSpinner className="animate-spin mx-auto" />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="mt-10 h-14 w-1/2 md:w-2/5 lg:w-1/2 2xl:w-2/5 p-auto text-white hover:text-white bg-blue-25 hover:bg-green-300 rounded-xl text-xl xl:text-2xl font-bold font-Montserrat duration-200"
                    >
                      {isLoading ? (
                        <FaSpinner className="animate-spin mx-auto" />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormPopUp
        showPopUp={showPopUp}
        submitError={submitError}
        closePopUp={closePopUp}
      />
    </>
  );
};

export default Form;
