import { useState, useEffect } from "react";
import styles from "./Weather.module.css";
import sunny from "./Assets/01-s.png";
import mostlySunny from "./Assets/02-s.png";
import partlySunny from "./Assets/03-s.png";
import intermittentClouds from "./Assets/04-s.png";
import hazySunshine from "./Assets/05-s.png";
import mostlyCloudy from "./Assets/06-s.png";
import cloudy from "./Assets/07-s.png";
import dreary from "./Assets/08-s.png";
import fog from "./Assets/11-s.png";
import showers from "./Assets/12-s.png";
import mostlyCloudyWithShowers from "./Assets/13-s.png";
import partlySunnyWithShowers from "./Assets/14-s.png";
import tStorms from "./Assets/15-s.png";
import mostlyCloudyWithTStorms from "./Assets/16-s.png";
import partlySunnyWithTStorms from "./Assets/17-s.png";
import rain from "./Assets/18-s.png";
import flurries from "./Assets/19-s.png";
import mostlyCloudyWithFlurries from "./Assets/20-s.png";
import partlySunnyWithFlurries from "./Assets/21-s.png";
import snow from "./Assets/22-s.png";
import mostlyCloudyWithSnow from "./Assets/23-s.png";
import ice from "./Assets/24-s.png";
import sleet from "./Assets/25-s.png";
import freezingRain from "./Assets/26-s.png";
import rainAndSnow from "./Assets/29-s.png";
import hot from "./Assets/30-s.png";
import cold from "./Assets/31-s.png";
import windy from "./Assets/32-s.png";
import clear from "./Assets/33-s.png";
import mostlyClear from "./Assets/34-s.png";
import partlyCloudy from "./Assets/35-s.png";
import intermittentCloudsNight from "./Assets/36-s.png";
import hazyMoonlight from "./Assets/37-s.png";
import mostlyCloudyNight from "./Assets/38-s.png";
import partlyCloudyWithShowers from "./Assets/39-s.png";
import mostlyCloudyWithShowersNight from "./Assets/40-s.png";
import partlyCloudyWithTStorms from "./Assets/41-s.png";
import mostlyCloudyWithTStormsNight from "./Assets/42-s.png";
import mostlyCloudyWithSnowNight from "./Assets/43-s.png";

const weatherIcons = {
  1: sunny,
  2: mostlySunny,
  3: partlySunny,
  4: intermittentClouds,
  5: hazySunshine,
  6: mostlyCloudy,
  7: cloudy,
  8: dreary,
  11: fog,
  12: showers,
  13: mostlyCloudyWithShowers,
  14: partlySunnyWithShowers,
  15: tStorms,
  16: mostlyCloudyWithTStorms,
  17: partlySunnyWithTStorms,
  18: rain,
  19: flurries,
  20: mostlyCloudyWithFlurries,
  21: partlySunnyWithFlurries,
  22: snow,
  23: mostlyCloudyWithSnow,
  24: ice,
  25: sleet,
  26: freezingRain,
  29: rainAndSnow,
  30: hot,
  31: cold,
  32: windy,
  33: clear,
  34: mostlyClear,
  35: partlyCloudy,
  36: intermittentCloudsNight,
  37: hazyMoonlight,
  38: mostlyCloudyNight,
  39: partlyCloudyWithShowers,
  40: mostlyCloudyWithShowersNight,
  41: partlyCloudyWithTStorms,
  42: mostlyCloudyWithTStormsNight,
  43: mostlyCloudyWithSnowNight,
};

// const mainCities = ["Sofia", "Varna", "Plovdiv", "Burgas"];

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [cityName, setCityName] = useState("");
  const [isDayTime, setIsDayTime] = useState(true);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        try {
          const locationKeyResponse = await fetch(
            `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=uOtUB2HjqvccRseuDd3b9Yv3WG9krzT4&q=${latitude},${longitude}`
          );

          // for (const city of mainCities) {
          //   const response = await fetch(
          //     `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=uOtUB2HjqvccRseuDd3b9Yv3WG9krzT4&q=${city}`
          //   );
          //   const cityData = (await response.json()).filter(x => x.Country.ID === 'BG')[0];
          //   console.log(cityData);
          // }
          

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
          setWeatherIcon(weatherData[0].WeatherIcon);
          setWeather(weatherData[0]);
          setIsDayTime(weatherData[0].IsDayTime);
        } catch (error) {
          console.error("Error fetching weather data:", error);
          setError("Failed to load weather data.");
        }
      },
      (err) => {
        console.error("Error getting geolocation:", err);
        setError("Geolocation is not enabled.");
      }
    );

  }, []);

  if (!weather || !location)
    return (
      <div
        className={`${styles.weatherWidget} ${
          isDayTime ? styles.dayTime : styles.nightTime
        }`}
      >
        <p>Loading...</p>
        {error && <p>{error}</p>}
      </div>
    );

  return (
    <div
      className={`${styles.weatherWidget} ${
        isDayTime ? styles.dayTime : styles.nightTime
      }`}
    >
      <div className={styles.weatherInfo}>
        <img className={styles.weatherIcon} src={weatherIcons[weatherIcon]} alt="" />
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
