import { useState } from 'react';

function Resume({ person }) {
  return (
    <div>
      <h1>Resume Field</h1>
      <p>
        name: {person.firstName} {person.lastName} phone: {person.phoneNumber}{' '}
        email: {person.emailAddress} address: {person.address}
      </p>
    </div>
  );
}

export default Resume;
