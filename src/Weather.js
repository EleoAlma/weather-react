import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import Icons from "./Icons";
import { ColorRing } from 'react-loader-spinner'
import "./styles.css";
import "./Weather.css"


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState({ ready: false });

  function displayWeather(response) {
    setData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon
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
      <div className="row">
        <div className="col-sm-12 col-md-9 col-lg-9 current">
          <h1 className="current-city">
            <span className="current-city city">{data.city}</span>
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
              <Icons code={data.icon} size={55} />
          </h1>
          <ul className="current-date">
            <li className="current-date-element">
              <FormattedDate date={data.date}/>
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
      <Forecast coordinates={data.coordinates} />
    </div>
  </div>
</div> );
} else {
  searchWeather();
  return (
<ColorRing
  visible={true}
  height="200"
  width="200"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['cadetblue', 'cadetblue', 'cadetblue', 'cadetblue', 'cadetblue']}
/>);
}
}