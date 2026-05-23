import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function giveResponse(response) {
    console.log(response.data);
  }
  console.log(props.coordinates);

  if(!props.coordinates) {
    return null;
  }

  let apiKey = "410o3ft86210d5f3d73f24a4d34d2bab";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(giveResponse);

   
    return(
         <div className="WeatherForecast">
        <div className="row">
            <div className="col text-center">
                <div className="WeatherForecast-day">
                Thurs
                </div>
                <div className="WeatherForecast-icon">
                <WeatherIcon icon={props.icon} size="small" />
                </div>
                <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">15°</span>
                <span className="WeatherForecast-temperature-min">10°</span>    
                </div>
                </div>
                </div>
                </div>
                ); 
   
}