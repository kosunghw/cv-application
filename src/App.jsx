import { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";

function App() {
  const [person, setPerson] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    address: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  // function handleFirstNameChange(e) {
  //   setPerson({ ...person, firstName: e.target.value });
  // }
  // function handleLastNameChange(e) {
  //   setPerson({ ...person, lastName: e.target.value });
  // }
  // function handlePhoneChange(e) {
  //   setPerson({ ...person, phoneNumber: e.target.value });
  // }
  // function handleEmailChange(e) {
  //   setPerson({ ...person, emailAddress: e.target.value });
  // }
  // function handleAddressChange(e) {
  //   setPerson({ ...person, address: e.target.value });
  // }

  function handleBasicSubmit(e) {
    e.preventDefault();
    const newObj = {
      fullName: document.getElementById("name").value,
      phoneNumber: document.getElementById("phone-number").value,
      emailAddress: document.getElementById("email").value,
      address: document.getElementById("address").value,
    };
    setPerson(newObj);
  }

  function handleEducationSubmit(e) {
    e.preventDefault();
    const newObj = {
      school: document.getElementById("name").value,
      degree: document.getElementById("phone-number").value,
      startDate: document.getElementById("start-date").value,
      endDate: document.getElementById("end-date").value,
      location: document.getElementById("location").value,
    };
    setEducation(newObj);
  }

  return (
    <>
      <h1>CV application</h1>
      <Form
        handleBasicSubmit={handleBasicSubmit}
        handleEducationSubmit={handleEducationSubmit}
      />
      <Resume person={person} education={education} />
    </>
  );
}

export default App;
