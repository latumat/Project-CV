import './App.css';
import React, { useState } from "react";
import General from './Components/General';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import NewExperience from './Components/NewExperience';
import Education from './Components/Education';

function App() {
  const [personalInfo, setPersonalInfo] = useState(["", "", "", "", ""]);
  const [previousExperience, setPreviousExperience] = useState(["", "", "", "", ""]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState(["", "", "", ""]);

  function addExperience() {
    setExperiences(experiences.concat(
    <div className="add-experience">
      <p> <b>{previousExperience[0]} | {previousExperience[1]} ({previousExperience[3]} - {previousExperience[4]}) </b></p>
      <p> {previousExperience[2]} </p>
    </div>))
  }

  return (
    <div className="project">
      <div className="navbar">
        <h1> Software Engineer CV </h1>
      </div>
      <div className="submission">
        <General setPersonalInfo={setPersonalInfo}/>
        <Education setEducation={setEducation}/>
        <Skills setSkills={setSkills}/>
        <NewExperience setPreviousExperience={setPreviousExperience}/>
        <div>
          <button onClick={addExperience}> Add </button>
        </div>
      </div>
      <div className="resume-app">
        <Resume personalInfo={personalInfo} previousExperience={previousExperience} education={education} skills={skills} experiences={experiences}/>
      </div>
    
    </div>
  )
}

export default App;
