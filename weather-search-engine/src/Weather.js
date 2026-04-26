import React, { useState} from "react";
import "./Weather.css";
import axios from "axios";
import ProvidedDate from "./ProvidedDate";


export default function Weather(props) {
  let[weatherData, setWeatherData]=useState({ready: false});


function giveResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    city: response.data.city,
    date: new Date(response.data.time * 1000),
    temperature: response.data.temperature.current,
    humidity: response.data.temperature.humidity,
    wind: response.data.wind.speed,
    description: response.data.condition.description,
    icon: response.data.condition.icon_url
  });
}

if (weatherData.ready) {
  return (
    <div className="WeatherApp">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a city..."
              className="form-input"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      {/* MAIN WEATHER SECTION */}
      <div className="row">
        
        {/* LEFT SIDE */}
        <div className="col-6">
          <h1>{weatherData.city}</h1>

          <ul className="weather-main">
            <li><ProvidedDate date={weatherData.date} /></li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>

          {/* ICON + TEMP NOW ON LEFT */}
          <div className="d-flex align-items-center mt-3" >
            <img
              src={weatherData.icon}
              alt="weather icon"
            />
            <div>
              <span className="temperature-number">{Math.round(weatherData.temperature)}</span>
              <span className="temperature-unit">°C</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-6">
          <ul className="weather-details">
            <li>Precipitation: 15%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>

      </div>
    </div>
  );
} else {
 let apiKey = "410o3ft86210d5f3d73f24a4d34d2bab";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(giveResponse);


  return "Loading...";
}
}