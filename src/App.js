import React, { Component } from "react";
import LocationList from "./components/LocationList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Grid, Row, Col } from "react-flexbox-grid";
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

const cities = [
  "Buenos Aires, ar",
  "Santiago, cl",
  "Bogotá, col",
  "Washington DC., us",
  "Ciudad de México, mx",
  "Madrid, es"
];

class App extends Component {
  handlerSelectedLocation = city => {
    console.log("handlerSelectionLocation");
  };

  render() {
    return (
      <Grid>
        <Row>Titulo</Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handlerSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="detail">Detail</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
