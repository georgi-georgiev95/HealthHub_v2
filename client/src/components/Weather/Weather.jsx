import { useState, useEffect } from "react";

import styles from "./Weather.module.css";
import sunny from "/images/weatherIcons/01-s.png";
import mostlySunny from "/images/weatherIcons/02-s.png";
import partlySunny from "/images/weatherIcons/03-s.png";
import intermittentClouds from "/images/weatherIcons/04-s.png";
import hazySunshine from "/images/weatherIcons/05-s.png";
import mostlyCloudy from "/images/weatherIcons/06-s.png";
import cloudy from "/images/weatherIcons/07-s.png";
import dreary from "/images/weatherIcons/08-s.png";
import fog from "/images/weatherIcons/11-s.png";
import showers from "/images/weatherIcons/12-s.png";
import mostlyCloudyWithShowers from "/images/weatherIcons/13-s.png";
import partlySunnyWithShowers from "/images/weatherIcons/14-s.png";
import tStorms from "/images/weatherIcons/15-s.png";
import mostlyCloudyWithTStorms from "/images/weatherIcons/16-s.png";
import partlySunnyWithTStorms from "/images/weatherIcons/17-s.png";
import rain from "/images/weatherIcons/18-s.png";
import flurries from "/images/weatherIcons/19-s.png";
import mostlyCloudyWithFlurries from "/images/weatherIcons/20-s.png";
import partlySunnyWithFlurries from "/images/weatherIcons/21-s.png";
import snow from "/images/weatherIcons/22-s.png";
import mostlyCloudyWithSnow from "/images/weatherIcons/23-s.png";
import ice from "/images/weatherIcons/24-s.png";
import sleet from "/images/weatherIcons/25-s.png";
import freezingRain from "/images/weatherIcons/26-s.png";
import rainAndSnow from "/images/weatherIcons/29-s.png";
import hot from "/images/weatherIcons/30-s.png";
import cold from "/images/weatherIcons/31-s.png";
import windy from "/images/weatherIcons/32-s.png";
import clear from "/images/weatherIcons/33-s.png";
import mostlyClear from "/images/weatherIcons/34-s.png";
import partlyCloudy from "/images/weatherIcons/35-s.png";
import intermittentCloudsNight from "/images/weatherIcons/36-s.png";
import hazyMoonlight from "/images/weatherIcons/37-s.png";
import mostlyCloudyNight from "/images/weatherIcons/38-s.png";
import partlyCloudyWithShowers from "/images/weatherIcons/39-s.png";
import mostlyCloudyWithShowersNight from "/images/weatherIcons/40-s.png";
import partlyCloudyWithTStorms from "/images/weatherIcons/41-s.png";
import mostlyCloudyWithTStormsNight from "/images/weatherIcons/42-s.png";
import mostlyCloudyWithSnowNight from "/images/weatherIcons/43-s.png";

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

  const API_KEY = "8ro3wQeVSdciHjtmZAqYyYcLORn907Hh";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        try {
          const locationKeyResponse = await fetch(
            `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`
          );

          // for (const city of mainCities) {
          //   const response = await fetch(
          //     `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`
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
            `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
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
