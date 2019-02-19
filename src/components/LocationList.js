import React from "react";
import WeatherLocation from './WeatherLocation'

const LocationList = () => (
  <div>
    <WeatherLocation city="Santiago,cl" />
    <WeatherLocation city="Buenos Aires,ar" />
    <WeatherLocation city="Bogotá,col" />
  </div>
);

export default LocationList;
