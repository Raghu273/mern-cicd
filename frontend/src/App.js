import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the message from the backend API
    axios.get('http://localhost:5000/api/messages')
      .then((response) => {
        // Set the message from backend to be displayed in the frontend
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('There was an error fetching the message!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{message ? message : 'Loading...'}</h1>
    </div>
  );
}

export default App;
