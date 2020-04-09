import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Fetch from './Fetch.js';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import CityList  from './city.list.min';
import CountryList from './countries';

function Form(){

  const [data,setData] = useContext(DataContext);
  const [selectedCity,setSelectedCity] = useState(0);
  let tempCity = null;

  let options = [];

  function setOptions(country){
    if(country !=null){
      CityList.map(result => (
        result.country === country.abbreviation?
          options.push(result)
          :
          null
      ))
      console.log(options);
  }
  }







  return(
    <div id="formContainer">
      <form>
      <Autocomplete
            id="countryList"
            options={CountryList}
            getOptionLabel={(option) => option.country}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
            onChange={(e,v) => setOptions(v)}
      />
      <Autocomplete
                id="cityList"
                options={options}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Cities" variant="outlined" />}
                onChange={(e,v) => setSelectedCity(v)}
        />

      </form>
      <button id="run" onClick={() => Fetch.fetchWeather(selectedCity.id,data,setData)}>Run</button>
      </div>



  );
}
export default Form;
