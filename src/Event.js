import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Event.css';

function Event() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/events')
        .then(response => setEvents(response.data))
        .catch(error => console.error('Error fetching events:', error));
    }, []);

    return(
        <div className="Event-board">
        {events.map(event => (
          <div key={event.id} className='event-item'>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Date: {new Date(event.event_date).toLocaleDateString()}</p>
            <p>Organizer: {event.organizer}</p>
            <button onClick={() => window.location.href = `/register/${event.id}`}>Register</button>
            <button onClick={() => window.location.href = `/participants/${event.id}`}>View Participants</button>
          </div>
        ))}
      </div>
    )
    
}

export default Event;