import react from 'react';



export default class Fetch{




/*Fetches weather data from the lat and longitute passed to the function, pushes the desired parts of the data to state*/
static fetchWeather =  async (cityID,state,setState) => {


  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=427d7627c7d080347a72af19766c1f3a`)
  let weatherData = await response.json()
  Promise.resolve(weatherData).then(() => {
    console.log(weatherData);
    console.log("Função do tempo rodou");
      setState(state.concat(weatherData));

  });
}
}
