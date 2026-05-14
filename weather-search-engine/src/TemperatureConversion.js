import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("C");

  let temperature = Math.round(props.celsius);

  if (unit === "F") {
    temperature = Math.round((props.celsius * 9) / 5 + 32);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("C");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("F");
  }

  return (
    <div>
      <span className="temperature-number">
        {temperature}
      </span>

      <span className="temperature-unit">
        <a href="/" onClick={showCelsius}>
          °C
        </a>

        {" | "}

        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    </div>
  );
}