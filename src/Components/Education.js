import React, { useState, useEffect} from "react";

function Education({ setEducation }) {
    const [university, setUniversity] = useState("Harvard University");
    const [degree, setDegree] = useState("Bachelor of Science, Computer Science");
    const [start, setStart] = useState("2022");
    const [expected, setExpected] = useState("2025");
    const [relevant, setRelevant] = useState("Data Structures and Algorithms, Calculus 3, and Linear Algebra");
    const educationCopy = [university, degree, start, expected, relevant];

    useEffect(() => {
        setEducation(educationCopy);
    }, [educationCopy]);

    return (
        <div>
            <h1>Education</h1>
            <input onChange={(e) => {setUniversity(e.target.value)}} type="text" placeholder="University Name"/>
            <input onChange={(e) => {setDegree(e.target.value)}} type="text" placeholder="Degree"/>
            <input onChange={(e) => {setStart(e.target.value)}} type="text" placeholder="Start"/>
            <input onChange={(e) => {setExpected(e.target.value)}} type="text" placeholder="Expected"/>
            <input onChange={(e) => {setRelevant(e.target.value)}} type="text" placeholder="Relevant Coursework"/>

        </div>
    )
}

export default Education;