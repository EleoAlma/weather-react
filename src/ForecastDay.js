import React from "react";
import Icons from "./Icons";

export default function ForecastDay(props) {
   function maxTemperature() {
      let temperature = Math.round(props.data.temp.max);
      return `${temperature}°`;
    }
  
    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}°`;
    }
  
    function day() {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();
  
      let days = ["Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday"
        ];
  
      return days[day];
    }

   return (
      <div className="ForecastDay">
         <div className="forecast-day-week">
            {day()}
         </div>
         <div className="forecast-temperature">
            <span className="forecast-max-temperature">
               {maxTemperature()}
            </span>
            <span className="forecast-min-temperature">
               {minTemperature()}
            </span>
         </div>   
         <Icons code={props.data.weather[0].icon} size={45} />
      </div>
   )
}