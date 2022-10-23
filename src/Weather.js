import React, { useState } from "react";
import axios from "axios";

import "./styles.css";
import "./Weather.css"

export default function Weather(props) {
  const [city, setCity] = useState("London");
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setData({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: "Sunday 20:00 (TO CHANGE AFTER!)",
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "96eb20764d4adbb57fa516a1544ed0a1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
    console.log(url)
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

let form = <div className="Weather">
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
      <div className="row">
        <div className="col-sm-12 col-md-9 col-lg-9 current">
          <h1 className="current-city">
            <span className="current-city city">{city}</span>
            <span className="current-city temperature">
              {data.temperature}
            </span>
            <sup>
              <a className="active" href="/">
                °C
              </a>
              <a className="fahrenheit" href="/">
                °F
              </a>
            </sup>
            <img
              className="main-icon"
              src={data.icon}
              alt={data.description}
            ></img>
          </h1>
          <ul className="current-date">
            <li className="current-date-element">
              Last updated at: {data.date}
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <ul className="weather-conditions">
            <li>{data.description}</li>
            <li>
              Humidity: <span>{data.humidity}</span>%
            </li>
            <li>
              Wind: <span>{data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="forecast">

      </div>
    </div>
  </div>

</div>

  if (loaded) {
  return form
} else {
  return form;
}
}