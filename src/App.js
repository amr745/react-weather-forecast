import React from "react";
import "./styles.css";
import weatherData from "./WeatherData";
import WeatherForcast from "./components/WeatherForcast";

const App = () => {
  const allWeatherData = weatherData.map((ele, index) => {
    return (
    <WeatherForcast {...ele} key={index}/>
    )
  });

  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {allWeatherData}
        </section>
    </div>
  );
}

export default App;