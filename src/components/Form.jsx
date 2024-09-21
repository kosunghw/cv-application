import { useState } from "react";

function Form({ handleBasicSubmit, handleEducationSubmit }) {
  return (
    <>
      <h1>Input field</h1>
      <BasicInformation handleBasicSubmit={handleBasicSubmit} />
      <Education handleEducationSubmit={handleEducationSubmit} />
    </>
  );
}

function BasicInformation({ handleBasicSubmit }) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleBasicSubmit(e);
        }}
      >
        <label htmlFor="name">
          Full name:
          <input type="text" id="name" />
        </label>
        <label htmlFor="phone-number">
          Phone number:
          <input type="text" id="phone-number" />
        </label>
        <label htmlFor="email">
          Email address:
          <input type="text" id="email" />
        </label>
        <label htmlFor="address">
          Address:
          <input type="text" id="address" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

function Education({ handleEducationSubmit }) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleEducationSubmit(e);
        }}
      >
        <label htmlFor="school-name">
          School name:
          <input type="text" id="school-name" />
        </label>
        <label htmlFor="degree">
          Degree:
          <input type="text" id="degree" />
        </label>
        <label htmlFor="start-date">
          Start Date:
          <input type="text" id="start-date" />
        </label>
        <label htmlFor="end-date">
          End Date:
          <input type="text" id="end-date" />
        </label>
        <label htmlFor="location">
          Location:
          <input type="text" id="location" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
