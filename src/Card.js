import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Fetch from './Fetch.js';
import Clock from 'react-live-clock';
var tzlookup = require("tz-lookup");



function Card(){

const [data,setData] = useContext(DataContext);




{/*Maps the data state only if not empty*/}
  const ConditionalRender = () => {
    return(
      data.length>0 ?
      data.map(item => (
        <div className="cardDisplay">
        <h3>City: {item.name} / {item.sys.country}</h3>
        <Clock className="liveClock" format={'HH:mm:ss'} ticking={true} timezone={tzlookup(item.coord.lat,item.coord.lon)} />
        <h3>Temp {item.main.temp}</h3>
        <h3>Humidity: {item.main.humidity}</h3>
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
