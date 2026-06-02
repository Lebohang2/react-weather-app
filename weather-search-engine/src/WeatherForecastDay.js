import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
function maxTemperature() {
  let temperature = Math.round(props.data.temperature.maximum);
  return `${temperature}°`;
}

function minTemperature() {
 let temperature = Math.round(props.data.temperature.minimum);
  return `${temperature}°`;
}
function day() {
  let date = new Date(props.data.time * 1000);
  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
  return days[date.getDay()];
}
return (
  <div>
    <div className="WeatherForecast-day">
      {day()}
    </div>

      <div className="WeatherForecast-icon">
        <WeatherIcon icon={props.data.condition.icon_url} size="small" />
      </div>

      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>

        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}