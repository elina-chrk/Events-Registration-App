import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Event from './Event';

function EventsBoard() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Events</h1>
        <Event/>
      </header>
      
    </div>
  );
}

export default EventsBoard;