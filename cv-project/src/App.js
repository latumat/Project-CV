import './App.css';
import General from './Components/General';
import Resume from './Components/Resume';
import NewExperience from './Components/NewExperience';
import React, { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState(["", "", "", "", ""]);
  const [previousExperience, setPreviousExperience] = useState(["", "", "", ""]);
  const [addedExperience, setAddedExperience] = useState(["", "", "", "", ""]);
  const [experiences, setExperiences] = useState([]);

  function addExperience() {
    setExperiences(experiences.concat(
    <div>
      {previousExperience[2]} - {previousExperience[3]}: {previousExperience[0]} at {previousExperience[1]}
    </div>))
  }

  function testing2() {
    console.log(previousExperience);
  }

  return (
    <div className="project">
      <div className="submission">
        <General setPersonalInfo={setPersonalInfo}/>
        <NewExperience setPreviousExperience={setPreviousExperience}/>
        <button onClick={addExperience}> Add </button>
        <button onClick={testing2}> TEST2</button>
      </div>
      <Resume personalInfo={personalInfo} previousExperience={previousExperience} experiences={experiences}/>
    </div>
  )
}

export default App;
