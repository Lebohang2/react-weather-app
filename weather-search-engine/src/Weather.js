import React, { useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  let[weatherData, setWeatherData]=useState({ready: false});
  let [city, setCity] = useState(props.defaultCity);

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

function find() {
 let apiKey = "410o3ft86210d5f3d73f24a4d34d2bab";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(giveResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  find();
}
  function handleCityTransform(event) { 
    setCity(event.target.value);
  }
  
  if (weatherData.ready) {
  return (
    <div className="WeatherApp">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a city..."
              className="form-input"
              autoFocus="on"
            onChange={handleCityTransform}/>
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
      <WeatherInfo data={weatherData} />

    </div>
  );
} else {
find();
  return "Loading...";
}
}