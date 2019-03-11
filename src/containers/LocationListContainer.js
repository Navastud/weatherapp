import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LocationList from "./../components/LocationList";
import { setSelectedCity, setWeather } from "./../actions/";
import { getWeatherCities, getCity } from "./../reducers";

class LocationListContainer extends Component {
  componentDidMount() {
    const { cities, city, setWeather, setCity } = this.props;
    setWeather(cities);
    setCity(city);
  }

  handlerSelectedLocation = city => {
    this.props.setCity(city);
  };

  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handlerSelectedLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationListContainer);
