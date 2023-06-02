import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movie = () => {
  const [summary, setSummary] = useState('');

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!');
  };
  
  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        const data = response.data[0].show; 
        setSummary(data.summary);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);
    
  return (
    <div class="container">
      <h1>Show Summary</h1>
      {summary}
      <div>
      <button type="button" class="btn btn-success" onClick={handleClick}>Book Tickets</button>
      <br/>
      <br/>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h2 text-align="center">Tickets Booking form</h2>
          <br/>
          <label>
            Movie Title
            <input type="text" name="name" />
          </label>
          <label>
            Reservation name
            <input type="text" name="name" />
          </label>
          <br/>
          <label>
            Date of the show
            <input type="date" name="date" />
          </label>
          <label>
            Show Timings
            <input type="time" name="time" />
          </label>
          <br />
          <label>
            No.of adult tickets
            <input type="number" name="number" />
          </label>
          <br />
          <label>
            No.of child tickets
            <input type="number" name="number" />
          </label>
          <br />
          <button type="submit" class="btn btn-danger">Submit</button>
          <button type="submit" class="btn btn-danger">Reset</button>
          <br/>
        </form>
      )}
    </div>
    </div>
  );
};

export default Movie;