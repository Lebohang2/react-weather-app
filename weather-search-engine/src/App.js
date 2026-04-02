import React from 'react';
import './App.css';
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      <footer>
        This project was coded by {""} <a href="https://github.com/Lebohang2" target="_blank" rel="noopener noreferrer">Lebohang Kubheka</a>{""} and is {""} <a href="https://github.com/Lebohang2/weather-search-engine" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
