import { getDocs, addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebase.js";
import { useState } from "react";
import { useEffect } from "react";

const Stats = () => {
    const [getAllData, setGetAllData] = useState(true);
    const [webDevCount, setWebDevCount] = useState(0);
    const [uiuxCount, setUiUxCount] = useState(0);
    const [robotikaCount, setRobotikaCount] = useState(0);
    const [tetiTalkCount, setTetiTalkCount] = useState(0);
    const [tetiFairCount, setTetiFairCount] = useState(0);
    const [allCount, setAllCount] = useState(0);

    const limitForm = async () => {
        const getAllDocs = await getDocs(collection(db, "form-data"));
        var allData = getAllDocs.docs.map((doc) => doc.data());
        setGetAllData(allData);
        for(var i = 0; i < allData.length; i++){
            if(allData[i].event === "TETI Course - Web Dev"){
                webDevCount++;
            }
            else if(allData[i].event === "TETI Course - UI/UX"){
                uiuxCount++;
            }
            else if(allData[i].event === "TETI Course - Robotika"){ 
                robotikaCount++;
            }
            else if(allData[i].event === "TETI Talk"){ 
                tetiTalkCount++;
            }
            else if(allData[i].event === "TETI Fair"){ 
                tetiFairCount++;
            }
        }
        allCount = webDevCount + uiuxCount + robotikaCount + tetiTalkCount + tetiFairCount
        setAllCount(allCount);
        setWebDevCount(webDevCount);
        setUiUxCount(uiuxCount);
        setRobotikaCount(robotikaCount);
        setTetiTalkCount(tetiTalkCount);
        setTetiFairCount(tetiFairCount);
    }

    useEffect(() => {
        if (getAllData === true) {
            limitForm();
            setGetAllData(false);
        }
    }, [getAllData]);

    return (
        <div>
            <h1>Statistik Pendaftar</h1>
            <h2> Total : {allCount} </h2>
            <h2> Web Dev : {webDevCount} </h2>
            <h2> UI/UX : {uiuxCount} </h2>
            <h2> Robotika : {robotikaCount} </h2>
            <h2> TETI Talk : {tetiTalkCount} </h2>
            <h2> TETI Fair : {tetiFairCount} </h2>
        </div>
    )    
}

export default Stats;