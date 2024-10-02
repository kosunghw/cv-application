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
  education,
  setEducation,
  onName,
  onEmail,
  onAddress,
  onLinkedIn,
  onGithub,
}) {
  return (
    <div className='form-section'>
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
          educations={education}
          setEducation={setEducation}
        />
      )}
    </div>
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
    <div className='container'>
      <h2>General Information</h2>
      <form id='info-form'>
        <label htmlFor='name'>
          Full name
          <input
            type='text'
            id='name'
            placeholder='John Doe'
            value={person.fullName}
            onChange={onName}
          />
        </label>

        <label htmlFor='email'>
          Email address
          <input
            type='text'
            id='email'
            placeholder='johndoe@example.com'
            value={person.emailAddress}
            onChange={onEmail}
          />
        </label>
        <label htmlFor='address'>
          Address
          <input
            type='text'
            id='address'
            placeholder='City, Province'
            value={person.address}
            onChange={onAddress}
          />
        </label>
        <label htmlFor='linkedIn'>
          <div>
            LinkedIn <span className='optional'>recommended</span>
          </div>

          <input
            type='text'
            id='linkedIn'
            placeholder='https://www.linkedin.com/user-name'
            value={person.linkedIn}
            onChange={onLinkedIn}
          />
        </label>
        <label htmlFor='github'>
          <div>
            GitHub <span className='optional'>recommended</span>
          </div>
          <input
            type='text'
            id='github'
            placeholder='https://github.com/user-name'
            value={person.github}
            onChange={onGithub}
          />
        </label>
      </form>
      <button
        className='next-button'
        onClick={() => {
          setFormIndex(++formIndex);
        }}
      >
        Next
      </button>
    </div>
  );
}

function Education({
  handleEducationSubmit,
  formIndex,
  setFormIndex,
  educations,
  setEducation,
}) {
  return (
    <div className='container'>
      <h2>Education</h2>
      <form
        id='edu-form'
        onSubmit={(e) => {
          handleEducationSubmit(e);
        }}
      >
        <label htmlFor='school-name'>
          School name
          <input type='text' id='school-name' placeholder='Odin University' />
        </label>
        <label htmlFor='degree'>
          Degree
          <input type='text' id='degree' placeholder='Bachelor of React' />
        </label>
        <label htmlFor='start-date'>
          Start Date
          <input type='text' id='edu-start-date' placeholder='Jul 2024' />
        </label>
        <label htmlFor='end-date'>
          End Date
          <input type='text' id='edu-end-date' placeholder='Oct 2024' />
        </label>
        <label htmlFor='location'>
          <div>
            Location <span className='optional'>optional</span>
          </div>
          <input type='text' id='location' placeholder='City, Province' />
        </label>
        <button className='submit' type='submit'>
          submit
        </button>
      </form>
      <ul>
        {educations.map((education) => (
          <li className='form-list' key={education.eduId}>
            {education.school}{' '}
            <button
              className='delete'
              onClick={() => {
                setEducation(
                  educations.filter((a) => a.eduId !== education.eduId)
                );
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <button
        className='prev-button'
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
    <div className='container'>
      <h2>Experience / Projects</h2>
      <form
        id='ex-form'
        onSubmit={(e) => {
          handleExperienceSubmit(e);
        }}
      >
        <label htmlFor='job-title'>
          Role
          <input
            type='text'
            id='job-title'
            placeholder='Full Stack Developer'
          />
        </label>
        <label htmlFor='company-name'>
          Company / Project
          <input type='text' id='company-name' placeholder='The Odin Project' />
        </label>
        <label htmlFor='job-start-date'>
          Start Date
          <input type='text' id='job-start-date' placeholder='2020' />
        </label>
        <label htmlFor='job-end-date'>
          End Date
          <input type='text' id='job-end-date' placeholder='2024' />
        </label>
        <label htmlFor='job-location'>
          <div>
            Location <span className='optional'>optional</span>
          </div>
          <input type='text' id='job-location' placeholder='City, Province' />
        </label>
        <label htmlFor='job-description'>
          <div>
            Description <span className='optional'>recommended</span>
          </div>
          <textarea
            name='job-description'
            id='job-description'
            placeholder='Describe your experience'
            rows='5'
          ></textarea>
        </label>
        <button className='submit' type='submit'>
          submit
        </button>
      </form>
      <ul>
        {experiences.map((experience) => (
          <li className='form-list' key={experience.experienceId}>
            {experience.companyName}{' '}
            <button
              className='delete'
              onClick={() => {
                setExperience(
                  experiences.filter(
                    (a) => a.experienceId !== experience.experienceId
                  )
                );
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div className='button-container'>
        <button
          className='prev-button'
          onClick={() => {
            setFormIndex(--formIndex);
          }}
        >
          Prev
        </button>
        <button
          className='next-button'
          onClick={() => {
            setFormIndex(++formIndex);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Form;
