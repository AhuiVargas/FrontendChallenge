import React, { useState } from 'react';
import './App.css';

const Form = () => {
  const [firstName, setFirstName] = useState('Coder');
  const [lastName, setLastName] = useState('Byte');
  const [phone, setPhone] = useState('8885559999');
  const [contacts, setContacts] = useState([]);

  const handleSubmit = () => {
    // Create a new contact object
    const newContact = { firstName, lastName, phone };

    // Update the contacts array with the new contact
    setContacts([...contacts, newContact]);

    // Clear input fields
    setFirstName('');
    setLastName('');
    setPhone('');
  };

  // Sort the contacts by last name
  const sortedContacts = [...contacts].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  return (
    <div className="form-container">
      <h1 className="form-title">Simple Phone Book</h1>
      <div className="form-label">
        <label>
          First Name:
          <input
            className="form-input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-label">
        <label>
          Last Name:
          <input
            className="form-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-label">
        <label>
          Phone:
          <input
            className="form-input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
      </div>
      <button className="form-button" onClick={handleSubmit}>Submit</button>
      <h2 className="form-title">Contact List</h2>
      <ul className="contact-list">
        {sortedContacts.map((contact, index) => (
          <li className="contact-item" key={index}>
            {contact.lastName}, {contact.firstName} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>

  );
}

export default Form;
