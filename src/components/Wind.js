import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";

function Wind() {
  const [data, setData] = useContext(DataContext);


    return (
      <div id="windContainer" className="infoBlock">
        <h1 className="blockTitle">
          Wind Speed 
        </h1>
        <h3 className="dataContent">{data.wind.speed} Meter/sec</h3>
          
      </div>
    );
  }
  export default Wind;