import { useState, useEffect } from "react";
import styles from "./Weather.module.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [cityName, setCityName] = useState("");
  const [isDayTime, setIsDayTime] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });

      try {
        const locationKeyResponse = await fetch(
          `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=uOtUB2HjqvccRseuDd3b9Yv3WG9krzT4&q=${latitude},${longitude}`
        );

        if (!locationKeyResponse.ok) {
          throw new Error("Failed to fetch location key");
        }

        const locationKeyData = await locationKeyResponse.json();
        const locationKey = locationKeyData.Key;
        setCityName(locationKeyData.LocalizedName);

        const weatherResponse = await fetch(
          `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=uOtUB2HjqvccRseuDd3b9Yv3WG9krzT4`
        );

        if (!weatherResponse.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const weatherData = await weatherResponse.json();
        setWeather(weatherData[0]);

        const currentTime = new Date();
        const sunsetTime = new Date(weatherData[0].Sunset);
        setIsDayTime(currentTime < sunsetTime);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    });
  }, []);

  if (!weather || !location)
    return (
      <div
        className={`${styles.weatherWidget} ${
          isDayTime ? styles.dayTime : styles.nightTime
        }`}
      >
        <p>Loading...</p>
      </div>
    );

  return (
    <div
      className={`${styles.weatherWidget} ${
        isDayTime ? styles.dayTime : styles.nightTime
      }`}
    >
      <div className={styles.weatherInfo}>
        <p className={styles.cityName}>{cityName}</p>
        <p className={styles.temperature}>
          {weather.Temperature.Metric.Value}°{weather.Temperature.Metric.Unit}
        </p>
        <p className={styles.weatherText}>{weather.WeatherText}</p>
      </div>
    </div>
  );
};

export default Weather;
