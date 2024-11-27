import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState(''); // Store the city name entered by the user
  const [weather, setWeather] = useState(null); // Store the weather data for the entered city
  const [error, setError] = useState(null); // Handle errors

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Function to fetch weather data for a specific city
  const fetchWeather = async () => {
    setError(null); // Reset errors
    setWeather(null); // Reset weather data

    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/weather?city=${city}`);
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError('Failed to fetch weather data. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>

      {/* Search bar */}
      <div className="search">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {/* Error handling */}
      {error && <p className="error">{error}</p>}

      {/* Display weather details */}
      {weather && (
        <div className="weather-details">
          <h2>{weather.city}</h2>
          <p>Temperature: {weather.temperature} °C</p>
          <p>Humidity: {weather.humidity} %</p>
          <p>Description: {weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
