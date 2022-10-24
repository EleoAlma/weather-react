import React from "react";
import "./Forecast.css";

export default function Forecast(data) {
  return (
    <div className="Forecast">
      <div className="row">
         <div className="col forecast-day">
            <div className="forecast-day-week">
               Monday
            </div>
            <div className="forecast-temperature">
               <span className="forecast-max-temperature">
                  17°
               </span>
               <span className="forecast-min-temperature">
                  12°
               </span>
            </div>
            <div className="forecast-icon">
               <img id="icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="Icon of forecast weather" />      
            </div>
         </div>
      </div>
    </div>
  );
}