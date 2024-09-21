import { useState } from 'react';

function Form({ person, onFirst, onLast, onPhone, onEmail, onAddress }) {
  return (
    <>
      <h1>Input field</h1>
      <BasicInformation
        person={person}
        onFirst={onFirst}
        onLast={onLast}
        onPhone={onPhone}
        onEmail={onEmail}
        onAddress={onAddress}
      />
    </>
  );
}

function BasicInformation({
  person,
  onFirst,
  onLast,
  onPhone,
  onEmail,
  onAddress,
}) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('submitting');
        }}
      >
        <label>
          First name:
          <input type='text' onChange={onFirst} />
        </label>
        <label>
          Last name:
          <input type='text' onChange={onLast} />
        </label>
        <label>
          Phone number:
          <input type='text' onChange={onPhone} />
        </label>
        <label>
          Email address:
          <input type='text' onChange={onEmail} />
        </label>
        <label>
          Address:
          <input type='text' onChange={onAddress} />
        </label>
      </form>
      <p>
        {person.firstName} {person.lastName} {person.phoneNumber}{' '}
        {person.emailAddress} {person.address}
      </p>
    </div>
  );
}

export default Form;
