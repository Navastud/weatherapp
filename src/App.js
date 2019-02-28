import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Grid, Row, Col } from "react-flexbox-grid";
import PropTypes from "prop-types";
import {
  faCloud,
  faSun,
  faCloudRain,
  faSnowflake,
  faCloudMeatball,
  faWind
} from "@fortawesome/free-solid-svg-icons";
import { setCity } from "./actions";
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
  constructor() {
    super();
    this.state = { city: null };
  }

  handlerSelectedLocation = city => {
    this.setState({ city });
    this.props.setCity(city);
  };

  render() {
    const { city } = this.state;
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
            <LocationList
              cities={cities}
              onSelectedLocation={this.handlerSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="detail">
                {city && <ForecastExtended city={city} />}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  setCity: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
