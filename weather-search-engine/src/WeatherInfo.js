import React from "react";
import ProvidedDate from "./ProvidedDate";

export default function WeatherInfo(props) {
    {/* MAIN WEATHER SECTION */}
    return (
        <div className="weatherInfo">
        
          <div className="row">
            
            {/* LEFT SIDE */}
            <div className="col-6">
              <h1>{props.data.city}</h1>
    
              <ul className="weather-main">
                <li><ProvidedDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
              </ul>
    
              {/* ICON + TEMP NOW ON LEFT */}
              <div className="d-flex align-items-center mt-3" >
                <img
                  src={props.data.icon}
                  alt="weather icon"
                />
                <div>
                  <span className="temperature-number">{Math.round(props.data.temperature)}</span>
                  <span className="temperature-unit">°C</span>
                </div>
              </div>
            </div>
    
            {/* RIGHT SIDE */}
            <div className="col-6">
              <ul className="weather-details">
                <li>Precipitation: 15%</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
    
          </div>
        </div>
    );
}