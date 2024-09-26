import { useState } from 'react';
import '../styles/resume-style.css';

function Resume({ person, education, experience }) {
  return (
    <div className='flex-container'>
      <div className='resume-container'>
        <div className='resume-top'>
          <h1 className='full-name'>{person.fullName}</h1>
          <div className='personal-info'>
            <div>{person.emailAddress}</div>
            <div>{person.address}</div>
            <div>
              <a href={'https://' + person.linkedIn} target='_blank'>
                {person.linkedIn}
              </a>
            </div>
            <div>
              <a href={person.github} target='_blank'>
                {person.github}
              </a>
            </div>
          </div>
        </div>
        <div className='experience'>
          <div className='section'>Experience</div>
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
        </div>
        <div className='education'>
          <div className='section'>Education</div>
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
      </div>
    </div>
  );
}

export default Resume;
