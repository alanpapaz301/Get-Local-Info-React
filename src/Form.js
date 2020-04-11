import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Fetch from './Fetch.js';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import CityList  from './city.list.min';
import CountryList from './countries';

function Form(){

  const [data,setData] = useContext(DataContext);
  const [selectedCity,setSelectedCity] = useState(0);
  const [cityOptions,setcityOptions] = useState([]);
  const [cityInputText,setcityInputText] = useState("");
  let tempCity = null;





  let options = [];
  function setOptions(country){
    setcityInputText ("");

    if(country !=null){

      CityList.map(result => (
        result.country === country.abbreviation?
          options.push(result)
          :
          null
      ))
      setcityOptions(options);
      console.log(options);
    }
  }


  function cityChange(v){
    setcityInputText(v.name)
    setSelectedCity(v);
  }

  function runFetch(){
    if(selectedCity != 0)
    Fetch.fetchWeather(selectedCity.id,data,setData);
  }





  return(
    <div id="formContainer">
      <form>
      <Autocomplete

            key={"countries"}
            id="countryList"
            options={CountryList}
            getOptionLabel={(option) => option.country}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
            onChange={(e,v) => setOptions(v)}
      />
      <Autocomplete
                inputValue = {cityInputText}
                key={"cities"}
                id="cityList"
                options={cityOptions}
                getOptionLabel={(option) => option.name}
                style={{ width: 300, marginTop:10 }}
                renderInput={(params) => <TextField {...params} label="City" variant="outlined" />}
                onChange={(e,v) => cityChange(v) }
        />

      </form>
      <Button id="runBtn" variant="contained" color="primary" onClick={() => runFetch() }>
        Run
      </Button>
      </div>



  );
}
export default Form;
