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
        <div>
        <form onSubmit={ handleSubmit }>
            <label> Name: </label>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
            />

            <label> Email: </label>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            />

            <label> Select Day </label>
            <select value={day} onChange={(e) => setDay(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>

            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default Form;