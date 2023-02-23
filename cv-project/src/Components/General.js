import React, { useState, useEffect } from "react";

function General({setPersonalInfo}) {
    const [firstName, setFirstName] = useState("Nadine");
    const [lastName, setLastName] = useState("Lee");
    const [address, setAddress] = useState("Cambridge, MA");
    const [phoneNumber, setPhoneNumber] = useState("514-123-4567");
    const [email, setEmail] = useState("nadinelee@gmail.com");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const infos = [firstName, lastName, address, phoneNumber, email, linkedin, github];

    useEffect(() => {
        setPersonalInfo(infos);
    })

    return (
        <div className="generalInformation">
            <h1> Personal Information </h1>
            <input onChange={(e) => {setFirstName(e.target.value)}} className="info" type="text" placeholder="First Name"/>
            <input onChange={(e) => {setLastName(e.target.value)}} className="info" type="text" placeholder="Last Name"/>
            <input onChange={(e) => {setAddress(e.target.value)}} className="info" type="text" placeholder="Address"/>
            <input onChange={(e) => {setPhoneNumber(e.target.value)}} className="info" type="text" placeholder="Phone Number"/>
            <input onChange={(e) => {setEmail(e.target.value)}} className="info" type="text" placeholder="Email"/>
            <input onChange={(e) => {setLinkedin(e.target.value)}} className="info" type="text" placeholder="Linkedin"/>
            <input onChange={(e) => {setGithub(e.target.value)}} className="info" type="text" placeholder="GitHub"/>
        </div>
    )

}

export default General;