import transformForecast from "./../services/transformForecast";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const SET_WEATHER = "SET_WEATHER";

export const setCity = payload => ({ type: SET_CITY, payload });
export const setForecastData = payload => ({
  type: SET_FORECAST_DATA,
  payload
});

const api_key = "d849795d81f8be2ac7109436ff202f0b";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
  return dispatch => {
    const url_forecast = `${url}?q=${payload}&APPID=${api_key}`;

    // activar en el estado un indicador de busqueda de datos

    dispatch(setCity(payload));

    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);

        // modificar el estado con el resultado de la promise (fetch)
        dispatch(setForecastData({ city: payload, forecastData }));
      });
    return;
  };
};

export const setWeather = payload => {
  /*  const api_key = "d849795d81f8be2ac7109436ff202f0b";
  const url = "http://api.openweathermap.org/data/2.5/weather";
  
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
  } */
};
