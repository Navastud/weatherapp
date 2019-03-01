import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
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
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar color="primary" position="sticky">
              <Toolbar>
                <IconButton color="inherit" aria-label="Menu" />
                <Typography variant="h6" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="detail">
                <ForecastExtendedContainer />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
