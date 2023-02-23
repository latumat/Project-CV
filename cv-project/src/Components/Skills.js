import React, { useState, useEffect } from "react";

const Skills = ({ setSkills }) => {
    const [programmingLanguages, setProgrammingLanguages] = useState("JavaScript, HTML, and CSS");
    const [technicalSkills, setTechnicalSkills] = useState("React.js, Git, and Linux");
    const [languagesSpoken, setLanguagesSpoken] = useState("English and Korean");
    const skillsCopy = [programmingLanguages, technicalSkills, languagesSpoken];

    useEffect(() => {
        setSkills(skillsCopy);
    })
    return (
        <div className="skills">
            <h1>Skills</h1>
            <input onChange={(e) => {setProgrammingLanguages(e.target.value)}} className="info" type="text" placeholder="Programming Languages"/>
            <input onChange={(e) => {setTechnicalSkills(e.target.value)}} className="info" type="text" placeholder="Technical Skills"/>
            <input onChange={(e) => {setLanguagesSpoken(e.target.value)}} className="info" type="text" placeholder="Languages Spoken"/>
        </div>
    )
}

export default Skills;