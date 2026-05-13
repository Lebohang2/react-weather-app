import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  return (
    <img
      src={props.icon}
      alt="Weather icon"
      className="WeatherIcon"
    />
  );
}