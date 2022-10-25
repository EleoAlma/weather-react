import React from "react";

import "./Forecast.css";

export default function Forecast() {
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
            <img src="/" alt="fancy weather icon in future" />
         </div>
      </div>
    </div>
  );
}