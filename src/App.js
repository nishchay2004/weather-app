import './App.css';
import Current from "./components/top/current"
import Search from "./components/search/search"
import Forecast from "./components/forecast/forecast"
import { useState } from "react";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  function handleOnSearchChange(searchData) {

    const [lat, lon] = searchData.value.split(" ");
    const API_key = "6833fca1b734c1c92f9eef1efced2b77";
    const fetchCurrentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`);
    const fetchForecast = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`);

    Promise.all([fetchCurrentWeather, fetchForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })

      .catch((err) => console.log("error"));
  }

  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className='container'>
      <Search
        onSearchChange={handleOnSearchChange}
      />
      {currentWeather && <Current currentWeather={currentWeather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 6833fca1b734c1c92f9eef1efced2b77
