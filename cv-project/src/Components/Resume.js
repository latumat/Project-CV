import React, { useState } from "react";

function Resume({personalInfo, previousExperience, education, skills, experiences}) {

    return (
        <div className="resume">
            <div className="header">
                <h1> {personalInfo[0]} {personalInfo[1]} </h1>
                {personalInfo[2]} | {personalInfo[3]} | {personalInfo[4]} | <a href={personalInfo[5]}>Linkedin</a> | <a href={personalInfo[6]}>GitHub</a>
            </div>
            <div className="container">
                    <div>
                        <h1>Education</h1>
                        <p><b>{education[0]}</b></p>
                        <p><b>{education[1]}</b> ({education[2]} to {education[3]})</p>
                        <p><b>Relevant Coursework: </b> {education[4]}</p>
                    </div>
                    <div className="skills-resume">
                        <h1>Skills</h1>
                        <p><b> Programming Languages:</b> {skills[0]} </p>
                        <p><b> Technical Skills:</b> {skills[1]} </p>
                        <p><b> Languages Spoken:</b> {skills[2]} </p>
                    </div>
                    <div className="experience">
                        <h1> Work Experience </h1>
                        {experiences}
                    </div>
            </div>
        </div>
    )
}

export default Resume;