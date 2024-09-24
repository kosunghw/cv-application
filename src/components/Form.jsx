import { useState } from 'react';
import '../styles/form-style.css';

function Form({
  handleEducationSubmit,
  handleExperienceSubmit,
  formIndex,
  setFormIndex,
  person,
  experience,
  setExperience,
  onName,
  onEmail,
  onAddress,
  onLinkedIn,
  onGithub,
}) {
  return (
    <>
      <h1>Input field</h1>
      {formIndex === 0 && (
        <BasicInformation
          formIndex={formIndex}
          setFormIndex={setFormIndex}
          person={person}
          onName={onName}
          onEmail={onEmail}
          onAddress={onAddress}
          onLinkedIn={onLinkedIn}
          onGithub={onGithub}
        />
      )}
      {formIndex === 1 && (
        <Experience
          handleExperienceSubmit={handleExperienceSubmit}
          formIndex={formIndex}
          setFormIndex={setFormIndex}
          experiences={experience}
          setExperience={setExperience}
        />
      )}
      {formIndex === 2 && (
        <Education
          handleEducationSubmit={handleEducationSubmit}
          formIndex={formIndex}
          setFormIndex={setFormIndex}
        />
      )}
    </>
  );
}

function BasicInformation({
  formIndex,
  setFormIndex,
  person,
  onName,
  onEmail,
  onAddress,
  onLinkedIn,
  onGithub,
}) {
  return (
    <div>
      <h4>Basic Information</h4>
      <form>
        <label htmlFor='name'>
          Full name:
          <input
            type='text'
            id='name'
            value={person.fullName}
            onChange={onName}
          />
        </label>

        <label htmlFor='email'>
          Email address:
          <input
            type='text'
            id='email'
            value={person.emailAddress}
            onChange={onEmail}
          />
        </label>
        <label htmlFor='address'>
          Address:
          <input
            type='text'
            id='address'
            value={person.address}
            onChange={onAddress}
          />
        </label>
        <label htmlFor='linkedIn'>
          LinkedIn:
          <input
            type='text'
            id='linkedIn'
            value={person.linkedIn}
            onChange={onLinkedIn}
          />
        </label>
        <label htmlFor='github'>
          Github:
          <input
            type='text'
            id='github'
            value={person.github}
            onChange={onGithub}
          />
        </label>
      </form>
      <button
        onClick={() => {
          setFormIndex(++formIndex);
        }}
      >
        Next
      </button>
    </div>
  );
}

function Education({ handleEducationSubmit, formIndex, setFormIndex }) {
  return (
    <div>
      <h4>Education</h4>
      <form
        onSubmit={(e) => {
          handleEducationSubmit(e);
        }}
      >
        <label htmlFor='school-name'>
          School name:
          <input type='text' id='school-name' />
        </label>
        <label htmlFor='degree'>
          Degree:
          <input type='text' id='degree' />
        </label>
        <label htmlFor='start-date'>
          Start Date:
          <input type='text' id='start-date' />
        </label>
        <label htmlFor='end-date'>
          End Date:
          <input type='text' id='end-date' />
        </label>
        <label htmlFor='location'>
          Location:
          <input type='text' id='location' />
        </label>
        <button type='submit'>submit</button>
      </form>
      <button
        onClick={() => {
          setFormIndex(--formIndex);
        }}
      >
        Prev
      </button>
    </div>
  );
}

function Experience({
  handleExperienceSubmit,
  formIndex,
  setFormIndex,
  experiences,
  setExperience,
}) {
  return (
    <div>
      <h4>Experience / Projects</h4>
      <form
        onSubmit={(e) => {
          handleExperienceSubmit(e);
        }}
      >
        <label htmlFor='job-title'>
          Job Title:
          <input type='text' id='job-title' />
        </label>
        <label htmlFor='company-name'>
          Company Name:
          <input type='text' id='company-name' />
        </label>
        <label htmlFor='start-date'>
          Start Date:
          <input type='text' id='job-start-date' />
        </label>
        <label htmlFor='end-date'>
          End Date:
          <input type='text' id='job-end-date' />
        </label>
        <label htmlFor='job-location'>
          Location:
          <input type='text' id='job-location' />
        </label>
        <label htmlFor='description'>
          Description:
          <input type='text' id='job-description' />
        </label>
        <button type='submit'>submit</button>
      </form>
      <ul>
        {experiences.map((experience) => (
          <li key={experience.experienceId}>
            {experience.companyName}{' '}
            <button
              onClick={() => {
                setExperience(
                  experiences.filter(
                    (a) => a.experienceId !== experience.experienceId
                  )
                );
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setFormIndex(--formIndex);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setFormIndex(++formIndex);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Form;
