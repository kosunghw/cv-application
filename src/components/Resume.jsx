import { useState } from "react";
import "../styles/resume-style.css";

function Resume({ person, education, experience }) {
  return (
    <div>
      <h1>Resume Field</h1>
      <h4>Basic Information</h4>
      <h1 className="full-name">{person.fullName}</h1>
      <p>
        phone: {person.phoneNumber} email: {person.emailAddress} address:{" "}
        {person.address}
      </p>
      <h4>Education</h4>
      <p>
        school: {education.school} degree: {education.degree} start date:{" "}
        {education.startDate} end date: {education.endDate} location:{" "}
        {education.location}
      </p>
      <h4>Experience</h4>
      <p>
        Job Title: {experience.length > 0 && experience[0].jobTitle} Company
        Name: {experience.length > 0 && experience[0].companyName} start date:{" "}
        {experience.length > 0 && experience[0].startDate} end date:{" "}
        {experience.length > 0 && experience[0].endDate} location:{" "}
        {experience.length > 0 && experience[0].location} Description:{" "}
        {experience.length > 0 && experience[0].description}
      </p>
    </div>
  );
}

export default Resume;
