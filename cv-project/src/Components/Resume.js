import React, { useState } from "react";

function Resume({personalInfo, previousExperience, experiences}) {

    return (
        <div className="resume">
            <div className="header">
                <h1>{personalInfo[0]} {personalInfo[1]}</h1>
            </div>
            <div className="container">
                <div className="experience">
                    <h1> Experiences </h1>
                    {experiences}
                </div>
                <div className="personal">
                    <p>Address</p>
                    <p>{personalInfo[2]}</p>
                    <p>Phone Number</p>
                    <p>{personalInfo[3]}</p>
                    <p>Email</p>
                    <p>{personalInfo[4]}</p>
                </div>
            </div>
        </div>
    )
}

export default Resume;