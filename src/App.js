import React from "react";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <>
      <div className="App">
         <div className="container">
            <Weather defaultCity="London" />
         
            <div className="row open-source text-center">
               <div className="col">
                  <a
                  href="https://github.com/EleoAlma/weather-react"
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
    </>
  );
}