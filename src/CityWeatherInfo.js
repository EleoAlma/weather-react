import React from "react";
import FormattedDate from "./FormattedDate";
import Icons from "./Icons";
import Temperature from "./Temperature";

import "./CityWeatherInfo.css"

export default function CityWeatherInfo(props) {
   return(
   <div className="CityWeatherInfo row mt-2">
      <div className="col-sm-12 col-md-9 col-lg-9 current">
         <h1 className="current-city">
            <span className="current-city city">{props.data.city}</span>
            <Temperature celsius={props.data.temperature} />
            <Icons code={props.data.icon} size={60} />
         </h1>
         <ul className="current-date">
            <li className="current-date-element">
               <FormattedDate date={props.data.date}/>
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
   </div>);
}