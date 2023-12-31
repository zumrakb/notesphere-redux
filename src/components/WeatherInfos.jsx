import React, { useState, useEffect } from "react";

function WeatherInfo() {
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?q=${lat},${lon}&key=4e3e428f5beb4701a7900654232710`
        );

        const data = await response.json();

        const currentTemperature = data.current.temp_c;
        const region = data.location.region;
        const country = data.location.country;

        setTemperature(`${currentTemperature}°C`);
        setLocation(`${region}, ${country}`);
      } catch (error) {
        console.error("Something went wrong");
        console.log(error);
      }
    }

    fetchWeatherData();

    // Fetch weather data every 10 minutes (600,000 milliseconds)
    const intervalId = setInterval(fetchWeatherData, 600000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="info1">
      <h5 className="weather">{temperature}</h5>
      <h5 className="city">{location}</h5>
    </div>
  );
}

export default WeatherInfo;
