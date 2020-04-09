import react from 'react';



export default class Fetch{


/*Uses geocode API to fetch longitute and latitude data based on city and country selected*/
static fetchData =  async (state,setState) => {


    const response = await fetch('http://open.mapquestapi.com/geocoding/v1/address?key=jsuGcsSCBdSwCpqdUr8lHquiJEr8lhDD&location=Rome,Italy')
    let latLong = await response.json()
    Promise.resolve(latLong).then(() => {
      let lat = latLong.results[0].locations[0].latLng.lat;
      let long = latLong.results[0].locations[0].latLng.lng;
      fetchWeather(lat,long,state,setState);

    });
  }
}

/*Fetches weather data from the lat and longitute passed to the function, pushes the desired parts of the data to state*/
const fetchWeather =  async (lat,long,state,setState) => {


  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=427d7627c7d080347a72af19766c1f3a`)
  let weatherData = await response.json()
  Promise.resolve(weatherData).then(() => {
    console.log(lat);
    console.log(weatherData);
    console.log("Função do tempo rodou");
    let newData = {"Temp":weatherData.current.temp,"FeelsLike":weatherData.current.feels_like,"Humidity":weatherData.current.humidity};
      setState(state.concat(newData));

  });

}
