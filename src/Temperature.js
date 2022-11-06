import React from "react";
import "./Temperature.css"

export default function Temperature(props) {
      return (   
      <div className="Temperature">         
         <span className="current-city temperature">{props.celsius}</span>
         <sup>
            <span className="active" href="/">
            °C
            </span>
         </sup>
      </div>
      )}
