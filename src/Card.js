import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Fetch from './Fetch.js';

function Card(){

const [data,setData] = useContext(DataContext);




{/*Maps the data state only if not empty*/}
  const ConditionalRender = () => {
    return(
      data.length>0 ?
      data.map(item => (
        <div className="cardDisplay">
        <h3>City: {item.name} / {item.sys.country}</h3>
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
