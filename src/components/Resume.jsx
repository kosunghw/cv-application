import { useState } from 'react';
import '../styles/resume-style.css';

function Resume({ person, education, experience }) {
  return (
    <div>
      <h1>Resume Field</h1>
      <h4>Basic Information</h4>
      <h1 className='full-name'>{person.fullName}</h1>
      <p>
        phone: {person.phoneNumber} email: {person.emailAddress} address:{' '}
        {person.address} LinkedIn: {person.linkedIn} GitHub: {person.github}
      </p>
      <h4>Experience</h4>
      <ul>
        {experience.map((item) => {
          return (
            <>
              <li key={item.experienceId}>
                Job Title: {item.jobTitle}
                Company Name: {item.companyName}
                Start Date: {item.startDate}
                End Date: {item.endDate}
                Location: {item.location}
                Description: {item.description}
              </li>
            </>
          );
        })}
      </ul>
      <h4>Education</h4>
      <ul>
        {education.map((item) => {
          return (
            <>
              <li key={item.eduId}>
                School: {item.school}
                Degree: {item.degree}
                Start Date: {item.startDate}
                End Date: {item.endDate}
                Location: {item.location}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Resume;
