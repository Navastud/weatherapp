import React, { Component } from "react";
import LocationList from "./components/LocationList";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloud,
  faSun,
  faCloudRain,
  faSnowflake,
  faCloudMeatball,
  faWind
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faCloud, faSun, faCloudRain, faSnowflake, faCloudMeatball, faWind);

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList />
      </div>
    );
  }
}

export default App;
