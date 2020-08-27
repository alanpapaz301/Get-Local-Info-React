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
      <h3 className="DataContent">
        Temperature: {roundFix(data.main.temp - 273.15, 1)}℃
      </h3>
      <h3 className="DataContent">
        Feels like: {roundFix(data.main.feels_like - 273.15, 1)}℃
      </h3>
      <h3 className="DataContent">Humidity: {data.main.humidity}%</h3>
      <h3 className="DataContent">Wind speed: {data.wind.speed} Meter/sec</h3>
    </div>
  );
}
export default WeatherDetails;
