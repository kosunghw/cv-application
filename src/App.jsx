import { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";

function App() {
  const [person, setPerson] = useState({
    fullName: "",
    emailAddress: "",
    address: "",
    linkedIn: "",
    github: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [experience, setExperience] = useState({
    jobTitle: "",
    companyName: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  // const [skills, setSkills] = useState([]);

  function handleBasicSubmit(e) {
    e.preventDefault();
    const newObj = {
      fullName: document.getElementById("name").value,
      emailAddress: document.getElementById("email").value,
      address: document.getElementById("address").value,
      linkedIn: document.getElementById("linkedIn").value,
      github: document.getElementById("github").value,
    };
    setPerson(newObj);
  }

  function handleEducationSubmit(e) {
    e.preventDefault();
    const newObj = {
      school: document.getElementById("name").value,
      degree: document.getElementById("phone-number").value,
      startDate: document.getElementById("start-date").value,
      endDate: document.getElementById("end-date").value,
      location: document.getElementById("location").value,
    };
    setEducation(newObj);
  }

  function handleExperienceSubmit(e) {
    e.preventDefault();
    const newObj = {
      jobTitle: document.getElementById("job-title").value,
      companyName: document.getElementById("company-name").value,
      startDate: document.getElementById("job-start-date").value,
      endDate: document.getElementById("job-end-date").value,
      location: document.getElementById("job-location").value,
      description: document.getElementById("job-description"),
    };
    setExperience(newObj);
  }

  return (
    <>
      <h1>CV application</h1>
      <Form
        handleBasicSubmit={handleBasicSubmit}
        handleEducationSubmit={handleEducationSubmit}
        handleExperienceSubmit={handleExperienceSubmit}
      />
      <Resume person={person} education={education} experience={experience} />
    </>
  );
}

export default App;
