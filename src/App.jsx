import { useState } from 'react';
import Form from './components/Form';
import Resume from './components/Resume';

function App() {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
  });

  function handleFirstNameChange(e) {
    setPerson({ ...person, firstName: e.target.value });
  }
  function handleLastNameChange(e) {
    setPerson({ ...person, lastName: e.target.value });
  }
  function handlePhoneChange(e) {
    setPerson({ ...person, phoneNumber: e.target.value });
  }
  function handleEmailChange(e) {
    setPerson({ ...person, emailAddress: e.target.value });
  }
  function handleAddressChange(e) {
    setPerson({ ...person, address: e.target.value });
  }

  return (
    <>
      <h1>CV application</h1>
      <Form
        person={person}
        onFirst={handleFirstNameChange}
        onLast={handleLastNameChange}
        onPhone={handlePhoneChange}
        onEmail={handleEmailChange}
        onAddress={handleAddressChange}
      />
      <Resume person={person} />
    </>
  );
}

export default App;
