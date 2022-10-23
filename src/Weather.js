import React from "react";

import "./styles.css";
import "./Weather.css"

export default function Weather() {
  let weatherData = {
    city: "London ",
    temperature: 21,
    date: "Tuesday, June 21, 18:18",
    description: "Cloudy",
    imgURL: "http://openweathermap.org/img/wn/02d@2x.png",
    humidity: 48,
    wind: 8
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="row">
              <div className="col-12 location-input">
                <form action="#">
                  <input
                    type="search"
                    className="form-control shadow-sm"
                    name="enter-city"
                    placeholder="Enter a location..."
                    autocomplete="off"
                    autofocus
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
                  <span className="current-city city">{weatherData.city}</span>
                  <span className="current-city temperature">
                    {weatherData.temperature}
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
                    src={weatherData.imgURL}
                    alt={weatherData.description}
                  ></img>
                </h1>
                <ul className="current-date">
                  <li className="current-date-element">
                    Last updated at: {weatherData.date}
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <ul className="weather-conditions">
                  <li>{weatherData.description}</li>
                  <li>
                    Humidity: <span>{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span>{weatherData.wind}</span> km/h
                  </li>
                </ul>
              </div>
            </div>

            <div className="forecast"></div>
          </div>
        </div>
        <div className="row open-source">
          <div className="col">
            <a
              href="https://github.com/EleoAlma/weather-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            , by Eleonora Zahrubska-Voloshchuk
          </div>
        </div>
      </div>
    </div>
  );
}
