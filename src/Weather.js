import React, { useState } from "react";
import axios from "axios";
import CityWeatherInfo from "./CityWeatherInfo";
import Forecast from "./Forecast";
import { ColorRing } from 'react-loader-spinner'
import "./styles.css";
import "./Weather.css"


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [fullInformation, setFullInformation] = useState({ ready: false });

  function displayWeather(response) {
    setFullInformation({
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

  if (fullInformation.ready) {
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
      <CityWeatherInfo data={fullInformation} />
      <Forecast coordinates={fullInformation.coordinates} />
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