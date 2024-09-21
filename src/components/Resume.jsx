import { useState } from "react";

function Resume({ person, education }) {
  return (
    <div>
      <h1>Resume Field</h1>
      <p>
        name: {person.firstName} {person.lastName} phone: {person.phoneNumber}{" "}
        email: {person.emailAddress} address: {person.address}
      </p>
      <p>
        school: {education.school} degree: {education.degree} start date:{" "}
        {education.startDate} end date: {education.endDate} location:{" "}
        {education.location}
      </p>
    </div>
  );
}

export default Resume;
