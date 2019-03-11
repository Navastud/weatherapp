import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LocationList from "./../components/LocationList";
import * as actions from "./../actions/";
import { getWeatherCities, getCity } from "./../reducers";

class LocationListContainer extends Component {
  componentDidMount() {
    const { cities, city, setWeather, setSelectedCity } = this.props;
    setWeather(cities);
    setSelectedCity(city);
  }

  handlerSelectedLocation = city => {
    this.props.setSelectedCity(city);
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
  setSelectedCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
};

/* const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
}); */

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationListContainer);
