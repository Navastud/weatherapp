import React, { Component } from "react";
import WeatherData from "./WeatherData";
import Location from "./Location";
import transformWeather from "./../../services/transformWeather";
import "./styles.css";
import CircularProgress from "@material-ui/core/CircularProgress";
const location = "Buenos Aires,ar";
const api_key = "d849795d81f8be2ac7109436ff202f0b";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Buenos Aires",
      data: null
    };
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then(data => {
        return data.json();
      })
      .then(weather_data => {
        const data = transformWeather(weather_data);
        this.setState({ data });
      });
  };

  componentWillMount() {
    this.handleUpdateClick();
  }

  render = () => {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? (
          <WeatherData data={data} />
        ) : (
          <CircularProgress variant="indeterminate" />
        )}
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  };
}

export default WeatherLocation;
