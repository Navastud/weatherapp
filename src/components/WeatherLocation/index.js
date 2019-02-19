import React, { Component } from "react";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import Location from "./Location";
import transformWeather from "./../../services/transformWeather";
import "./styles.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const api_key = "d849795d81f8be2ac7109436ff202f0b";
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component {
  constructor({ city }) {
    super();
    this.state = {
      city,
      data: null
    };
  }

  handleUpdateClick = () => {
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&APPID=${api_key}`;
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
      </div>
    );
  };
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired
};

export default WeatherLocation;
