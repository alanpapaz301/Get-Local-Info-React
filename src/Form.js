import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Fetch from './Fetch.js';


function Form(){

  const [data,setData] = useContext(DataContext);



  return(
    <div id="formContainer">
      <form>
        <input type="text" id="City"/>
        <input type="text" id="Country"/>
      </form>
      <button id="run" onClick={() => Fetch.fetchData(data,setData,document.getElementById('City').value,document.getElementById('Country').value)}>Run</button>
      </div>



  );
}
export default Form;
