import React, { useState, useEffect } from "react";

function NewExperience({setPreviousExperience}) {
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [workDescription, setWorkDescription] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const experienceCopy = [position, company, workDescription, from, to];

    useEffect(() => {
        setPreviousExperience(experienceCopy);
    },[experienceCopy]);

    return (
        <div className="add-experience">
            <h1> Experience </h1>
            <input onChange={(e) => {setPosition(e.target.value)}} className="info" type="text" placeholder="Position"/>
            <input onChange={(e) => {setCompany(e.target.value)}} className="info" type="text" placeholder="Company"/>
            <input onChange={(e) => {setWorkDescription(e.target.value)}} className="info" type="text" placeholder="Description"/>
            <input onChange={(e) => {setFrom(e.target.value)}} className="info" type="text" placeholder="From"/>
            <input onChange={(e) => {setTo(e.target.value)}} className="info" type="text" placeholder="To"/>
        </div>
    )
}

export default NewExperience;