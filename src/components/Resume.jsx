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
                LinkedIn
              </a>
            </div>
            <div>
              <a href={'https://' + person.github} target='_blank'>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className='experience'>
          <div className='section'>Experience</div>
          <ul className='list'>
            {experience.map((item) => {
              return (
                <>
                  <li className='experience-list-item' key={item.experienceId}>
                    <div className='experience-title'>{item.jobTitle}</div>
                    <div className='experience-name'>{item.companyName}</div>
                    <div className='experience-date'>{item.date}</div>
                    <div className='experience-location'>{item.location}</div>
                    <div className='experience-description'>
                      {item.description}
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className='education'>
          <div className='section'>Education</div>
          <ul className='list'>
            {education.map((item) => {
              return (
                <>
                  <li className='edu-list-item' key={item.eduId}>
                    <span className='edu-degree'>{item.degree} | </span>
                    <span className='edu-school'> {item.school} | </span>
                    <span className='edu-location'> {item.location}</span>
                    <span className='edu-date'>{item.date}</span>
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
