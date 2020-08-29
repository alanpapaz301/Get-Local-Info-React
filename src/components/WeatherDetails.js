import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";

function WeatherDetails() {
  const [data, setData] = useContext(DataContext);

  /*Float formating for temperature display*/

  function roundFix(number, precision) {
    var multi = Math.pow(10, precision);
    return Math.round((number * multi).toFixed(precision + 1)) / multi;
  }


  return (
    <div id="weatherDisplay" className="infoBlock">
      <h1 className="blockTitle">
        Temperature:
      </h1>
      <h1 className="dataContent">
        {roundFix(data.main.temp - 273.15, 1)}℃
      </h1>
      <h1 className="blockTitle">
        Feels like: 
      </h1>
      <h1 className="dataContent">
        {roundFix(data.main.feels_like - 273.15, 1)}℃
      </h1>
    </div>
  );
}
export default WeatherDetails;
