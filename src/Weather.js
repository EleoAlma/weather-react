import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";

import "./styles.css";
import "./Weather.css"


export default function Weather(props) {
  const [city, setCity] = useState("London");
  const [data, setData] = useState({ ready: false });

  function displayWeather(response) {
    setData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: "Sunday 20:00 (TO CHANGE AFTER!)",
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function searchWeather() {
    let apiKey = "96eb20764d4adbb57fa516a1544ed0a1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
    console.log(url)
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }



  if (data.ready) {
  return ( <div className="Weather">
  <div className="weather-app-wrapper">
    <div className="weather-app">
      <div className="row">
        <div className="col-12 location-input">
          <form onSubmit={handleSubmit} >
            <input
              type="search"
              className="form-control shadow-sm"
              name="enter-city"
              placeholder="Enter a location..."
              autoComplete="off"
              autoFocus
              onChange={changeCity}
            />
            <input
              type="submit"
              value="Go"
              className="btn btn-primary shadow-sm go"
            />
            <input
              type="button"
              value="📍"
              className="btn btn-primary shadow-sm location"
            />
          </form>
        </div>
      </div>
      <CurrentWeather data={data} />
      <Forecast coordinates={data.coordinates}  />
    </div>
  </div>
</div> );
} else {
  searchWeather();
  return "Loading...";
}
}