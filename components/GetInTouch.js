import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebase.js";

const GetInTouch = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const dbReff = collection(db, "get-in-touch");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(dbReff, {
      name: name,
      email: email,
    })
      .then(() => {
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
  };

  return (
    // TODO: benerin formnya cuy ini jelek bgt wkwk
    <div className="w-full h-full bg-white mt-12 mb-12">
      <div className="grid container mx-auto text-center font-Montserrat font-bold text-[45px]">
            <h1> Missing Something from Us? </h1>
      </div>
      <div className="font-Montserrat text-center pt-8 text-[27px] pb-12">
            <h3> Our Team are happy to help :D </h3>
      </div>

      <div className="bg-grey">
        <form onSubmit={handleSubmit}>
          <div className="">
          <input
            className="w-4/12 p-8 rounded-xl h-8 text-l px-1"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-4/12 p-8 rounded-xl h-8 text-l px-1"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="w-4/12" type="submit"> Get In Touch! </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
