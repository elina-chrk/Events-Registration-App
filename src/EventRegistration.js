import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EventRegistration() {
  const { eventId } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/register`, {
      eventId,
      name,
      email,
      dob,
      source,
    }).then(response => {
      alert('Registration successful');
    }).catch(error => {
      console.error('Error registering:', error);
    });
  };

  return (
    <div>
      <h2>Register for Event {eventId}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
        <input type="text" placeholder="Where did you hear about this event?" value={source} onChange={(e) => setSource(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default EventRegistration;
