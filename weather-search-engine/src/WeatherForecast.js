import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (!props.coordinates) return;

    let apiKey = "410o3ft86210d5f3d73f24a4d34d2bab";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      console.log(response.data.daily);
      setForecast(response.data.daily);
    });
  }, [props.coordinates]);

  if (!forecast) return "Loading...";

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 7) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
     