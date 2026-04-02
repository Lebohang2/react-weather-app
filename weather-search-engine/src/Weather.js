import React from "react";
import "./Weather.css";


export default function Weather() {
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
          <h1>New York</h1>

          <ul className="weather-main">
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
          </ul>

          {/* ICON + TEMP NOW ON LEFT */}
          <div className="d-flex align-items-center mt-3" >
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather icon"
            />
            <div>
              <span className="temperature-number">6</span>
              <span className="temperature-unit">°C</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-6">
          <ul className="weather-details">
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>

      </div>
    </div>
  );
}