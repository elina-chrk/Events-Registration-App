import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EventParticipants() {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/participants/${eventId}`)
      .then(response => setParticipants(response.data))
      .catch(error => console.error('Error fetching participants:', error));
  }, [eventId]);

  return (
    <div>
      <h2>Participants for Event {eventId}</h2>
      <ul>
        {participants.map(participant => (
          <li key={participant.id}>
            <p>Name: {participant.name}</p>
            <p>Email: {participant.email}</p>
            <p>Date of Birth: {new Date(participant.dob).toLocaleDateString()}</p>
            <p>Source: {participant.source}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventParticipants;
