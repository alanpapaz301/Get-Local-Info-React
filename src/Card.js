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
        <h3>Temp: {data[0].Temp}</h3>
        <h3>Feels like: {data[0].FeelsLike}</h3>
        <h3>Humidity: {data[0].Humidity}</h3>
        </div>
      ))
      :
      null



    );
  }

return(
  <div id = "cardContainer">

    <button id="run" onClick={() => Fetch.fetchData(data,setData)}>Run</button>
    <ConditionalRender/>

  </div>



);
}
export default Card;
