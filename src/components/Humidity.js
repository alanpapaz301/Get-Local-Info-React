import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Humidity() {
  const [data, setData] = useContext(DataContext);

  /*Float formating for temperature display*/



  return (
    <div id="humidityDisplay" className="infoBlock"> 
    <h1 className="blockTitle" id="humidityTitle">Humidity</h1>
    <CircularProgressbar id="humidityBar" value={data.main.humidity} text={`${data.main.humidity}%`}/>
    </div>
  );
}
export default  Humidity;
