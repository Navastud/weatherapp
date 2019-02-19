import convert from "convert-units";
import { SUN } from "./../constants/weathers";

const getWeatherState = weather => {
  return SUN;
};

const getTemp = kelvin => {
  return Number(
    convert(kelvin)
      .from("K")
      .to("C")
      .toFixed(2)
  );
};

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState();
  const temperature = getTemp(temp);
  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`
  };

  console.log("transformWeather:", data);

  return data;
};

export default transformWeather;
