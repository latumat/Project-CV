import React, { useState, useEffect } from "react";

function NewExperience({setPreviousExperience}) {
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    let experienceCopy = [position, company, from, to];

    function testing() {
        console.log(experienceCopy)
    }
    return (
        <div className="add-experience">
            <h1> Experience </h1>
            <input onChange={(e) => {setPosition(e.target.value); setPreviousExperience(experienceCopy)}} className="exp" type="text" placeholder="Position" value={position}/>
            <input onChange={(e) => {setCompany(e.target.value); setPreviousExperience(experienceCopy)}} className="exp" type="text" placeholder="Company" value={company}/>
            <input onChange={(e) => {setFrom(e.target.value); setPreviousExperience(experienceCopy)}} className="exp" type="text" placeholder="From" value={from}/>
            <input onChange={(e) => {setTo(e.target.value); setPreviousExperience(experienceCopy)}} className="exp" type="text" placeholder="To" value={to}/>
            <button onClick={testing}>test</button>
        </div>
    )
}

export default NewExperience;