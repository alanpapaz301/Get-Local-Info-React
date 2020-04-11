import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Fetch from './Fetch.js';
import Clock from 'react-live-clock';
var tzlookup = require("tz-lookup");



function Card(){

const [data,setData] = useContext(DataContext);


{/*Float formating for temperature display*/}
function roundFix(number, precision)
{
    var multi = Math.pow(10, precision);
    return Math.round( (number * multi).toFixed(precision + 1) ) / multi;
}


{/*Maps the data state only if not empty*/}
  const ConditionalRender = () => {
    return(
      data.length>0 ?
      data.map(item => (
        <div className="cardDisplay">
        <h3 className="cardCity">{item.name} , {item.sys.country}</h3>
        <div className="localTime">
          <h3>Local time:</h3>
          <Clock className="liveClock" format={'HH:mm:ss'} ticking={true} timezone={tzlookup(item.coord.lat,item.coord.lon)} />
          <h3>({tzlookup(item.coord.lat,item.coord.lon)})</h3>
        </div>
        <h3 className="cardContent">Temperature: {roundFix(item.main.temp - 273.15,1)}℃</h3>
        <h3 className="cardContent">Feels like: {roundFix(item.main.feels_like - 273.15,1)}℃</h3>
        <h3 className="cardContent">Humidity: {item.main.humidity}%</h3>
        </div>
      ))
      :
      null



    );
  }

return(
  <div id = "cardContainer">


    <ConditionalRender/>

  </div>



);
}
export default Card;
