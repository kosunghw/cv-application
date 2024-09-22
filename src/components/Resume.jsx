import { useState } from "react";

function Resume({ person, education, experience }) {
  return (
    <div>
      <h1>Resume Field</h1>
      <h4>Basic Information</h4>
      <h1>{person.fullName}</h1>
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
        Job Title: {experience.jobTitle} Company Name: {experience.companyName}{" "}
        start date: {experience.startDate} end date: {experience.endDate}{" "}
        location: {experience.location} Description: {experience.description}
      </p>
    </div>
  );
}

export default Resume;
