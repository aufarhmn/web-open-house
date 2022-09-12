import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebase.js";

const Form = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [day, setDay] = React.useState("");
    const dbReff = collection(db, "form-data");

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(dbReff, {
            name: name,
            email: email,
            day: day,
        })
        .then(() => {
            window.alert("Your message has been submitted");
        })
        .catch((error) => {
            console.log(error.message);
        });

        setName("");
        setEmail("");
        setDay("");
    };

    // const testSubmit = () =>{
    //    console.log("test")
    //     // return(
    //     //     <div className="fixed w-4/5 bg-green-400 h-6 p-auto top-0 mx-auto">
    //     //        <span>Success!</span> Data anda telah masuk
    //     //     </div>
    //     // );
    // }

    return (
        <div className="lg:columns-2 bg-blue-500 h-screen ">
            <div className="bg-grey-400 h-screen hidden lg:flex">
               
            </div>
            <div id=" " className="h-screen p-20">
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
                    <div>
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
                    <button type="submit" className="mt-10 h-14 w-1/2 p-auto text-green-300 bg-white rounded-xl text-2xl font-bold font-Montserrat">Submit</button>
                </form>
            </div>
            
        </div>
    );
}

export default Form;