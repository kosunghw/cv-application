import { useState } from "react";

function Form({
  handleBasicSubmit,
  handleEducationSubmit,
  handleExperienceSubmit,
}) {
  return (
    <>
      <h1>Input field</h1>
      <BasicInformation handleBasicSubmit={handleBasicSubmit} />
      <Experience handleExperienceSubmit={handleExperienceSubmit} />
      <Education handleEducationSubmit={handleEducationSubmit} />
    </>
  );
}

function BasicInformation({ handleBasicSubmit }) {
  return (
    <div>
      <h4>Basic Information</h4>
      <form
        onSubmit={(e) => {
          handleBasicSubmit(e);
        }}
      >
        <label htmlFor="name">
          Full name:
          <input type="text" id="name" />
        </label>

        <label htmlFor="email">
          Email address:
          <input type="text" id="email" />
        </label>
        <label htmlFor="address">
          Address:
          <input type="text" id="address" />
        </label>
        <label htmlFor="linkedIn">
          LinkedIn:
          <input type="text" id="linkedIn" />
        </label>
        <label htmlFor="github">
          Github:
          <input type="text" id="github" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

function Education({ handleEducationSubmit }) {
  return (
    <div>
      <h4>Education</h4>
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

function Experience({ handleExperienceSubmit }) {
  return (
    <div>
      <h4>Experience / Projects</h4>
      <form
        onSubmit={(e) => {
          handleExperienceSubmit(e);
        }}
      >
        <label htmlFor="job-title">
          Job Title:
          <input type="text" id="job-title" />
        </label>
        <label htmlFor="company-name">
          Company Name:
          <input type="text" id="company-name" />
        </label>
        <label htmlFor="start-date">
          Start Date:
          <input type="text" id="job-start-date" />
        </label>
        <label htmlFor="end-date">
          End Date:
          <input type="text" id="job-end-date" />
        </label>
        <label htmlFor="job-location">
          Location:
          <input type="text" id="job-location" />
        </label>
        <label htmlFor="description">
          Description:
          <input type="text" id="description" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
