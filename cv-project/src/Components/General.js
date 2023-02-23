import React, { useState } from "react";

function General({setPersonalInfo}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const infos = [firstName, lastName, address, phoneNumber, email];

    return (
        <div className="generalInformation">
            <h1> Personal Information </h1>
            <input onChange={(e) => {setFirstName(e.target.value); setPersonalInfo(infos)}} className="info" type="text" placeholder="First Name" id="firstName" value={firstName}/>
            <input onChange={(e) => {setLastName(e.target.value); setPersonalInfo(infos)}} className="info" type="text" placeholder="Last Name" id="lastName" value={lastName}/>
            <input onChange={(e) => {setAddress(e.target.value); setPersonalInfo(infos)}} className="info" type="text" placeholder="Address" id="address" value={address}/>
            <input onChange={(e) => {setPhoneNumber(e.target.value); setPersonalInfo(infos)}} className="info" type="text" placeholder="Phone Number" id="phoneNumber" value={phoneNumber}/>
            <input onChange={(e) => {setEmail(e.target.value); setPersonalInfo(infos)}} className="info" type="text" placeholder="Email" id="email" value={email}/>
        </div>
    )

}

export default General;