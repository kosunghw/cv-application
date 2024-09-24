import { useState } from 'react';
import Form from './components/Form';
import Resume from './components/Resume';

function App() {
  const [person, setPerson] = useState({
    fullName: '',
    emailAddress: '',
    address: '',
    linkedIn: '',
    github: '',
  });

  const [education, setEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const [experience, setExperience] = useState([]);
  const [experienceId, setExperienceId] = useState(0);

  const [showResume, setShowResume] = useState(false);

  const [formIndex, setFormIndex] = useState(0);

  // const [skills, setSkills] = useState([]);

  function onBasicNameInput(e) {
    setPerson({ ...person, fullName: e.target.value });
  }

  function onBasicEmailInput(e) {
    setPerson({ ...person, emailAddress: e.target.value });
  }

  function onBasicAddressInput(e) {
    setPerson({ ...person, address: e.target.value });
  }

  function onBasicLinkedInInput(e) {
    setPerson({ ...person, linkedIn: e.target.value });
  }
  function onBasicGithubInput(e) {
    setPerson({ ...person, github: e.target.value });
  }

  function handleEducationSubmit(e) {
    e.preventDefault();
    const newObj = {
      school: document.getElementById('name').value,
      degree: document.getElementById('phone-number').value,
      startDate: document.getElementById('start-date').value,
      endDate: document.getElementById('end-date').value,
      location: document.getElementById('location').value,
    };
    setEducation(newObj);
  }

  function handleExperienceSubmit(e) {
    e.preventDefault();
    const newObj = {
      jobTitle: document.getElementById('job-title').value,
      companyName: document.getElementById('company-name').value,
      startDate: document.getElementById('job-start-date').value,
      endDate: document.getElementById('job-end-date').value,
      location: document.getElementById('job-location').value,
      description: document.getElementById('job-description').value,
      experienceId: experienceId,
    };
    setExperience([...experience, newObj]);
    setExperienceId(experienceId + 1);
    e.target.reset();
  }

  if (!showResume) {
    return (
      <>
        <Form
          handleEducationSubmit={handleEducationSubmit}
          handleExperienceSubmit={handleExperienceSubmit}
          formIndex={formIndex}
          setFormIndex={setFormIndex}
          person={person}
          experience={experience}
          setExperience={setExperience}
          onName={onBasicNameInput}
          onEmail={onBasicEmailInput}
          onAddress={onBasicAddressInput}
          onLinkedIn={onBasicLinkedInInput}
          onGithub={onBasicGithubInput}
        />
        <button
          onClick={() => {
            setShowResume(!showResume);
          }}
        >
          Show Resume
        </button>
      </>
    );
  } else {
    return (
      <>
        <Resume person={person} education={education} experience={experience} />
        <button
          onClick={() => {
            setShowResume(!showResume);
          }}
        >
          Show Form
        </button>
      </>
    );
  }

  return (
    <>
      <h1>CV application</h1>

      <Form
        handleBasicSubmit={handleBasicSubmit}
        handleEducationSubmit={handleEducationSubmit}
        handleExperienceSubmit={handleExperienceSubmit}
      />
      <button
        onClick={() => {
          setShowResume(!showResume);
        }}
      >
        Show Resume
      </button>
      <Resume person={person} education={education} experience={experience} />
    </>
  );
}

export default App;
