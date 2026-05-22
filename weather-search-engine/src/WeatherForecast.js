import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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