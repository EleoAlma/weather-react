import React, { useState } from "react";
import "./Temperature.css"

export default function Temperature(props) {
   const [unit, setUnit] = useState("celsius");

   function showFahrenheit(event) {
   event.preventDefault();
   setUnit("fahrenheit");
   }

   function showCelsius(event) {
   event.preventDefault();
   setUnit("celsius");
   }
   
   function convertFahrenheit() {
      return Math.round((props.celsius * 9) / 5 + 32);
   }
   if (unit === "celsius") { 
      return (   
      <div className="Temperature">         
         <span className="current-city temperature">{props.celsius}</span>
         <sup>
         <a className="active" href="#" rel="noopener noreferrer">
         °C
         </a>
         <a className="fahrenheit" href="#" onClick={showFahrenheit} rel="noopener noreferrer">
         °F
         </a>
         </sup>
      </div>
      )} else {
      return (
         <div className="Temperature">         
            <span className="current-city temperature">{convertFahrenheit()}</span>
            <sup>
            <a href="#" onClick={showCelsius} rel="noopener noreferrer">
            °C
            </a>
            <a className="active fahrenheit" href="#" rel="noopener noreferrer">
            °F
            </a>
            </sup>
         </div>
         )
      }
}