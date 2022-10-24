import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-sm-12 col-md-9 col-lg-9 current">
          <h1 className="current-city">
            <span className="current-city city">{props.data.city}</span>
            <span className="current-city temperature">
              {props.data.temperature}
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
              src={props.data.icon}
              alt={props.data.description}
            />
          </h1>
          <ul className="current-date">
            <li className="current-date-element">
              Last updated at: {props.data.date}
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <ul className="weather-conditions">
            <li>{props.data.description}</li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span>{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}