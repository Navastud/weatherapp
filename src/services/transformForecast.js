import moment from "moment";
import "moment/locale/es";
import transformWeather from "./transformWeather";

const transformForecast = data =>
  data.list
    .filter(item => {
      const hour = moment
        .unix(item.dt)
        .utc()
        .hour();
      return hour === 6 || hour === 12 || hour === 18;
    })
    .map(item => {
      const date = moment.unix(item.dt).utc();
      return {
        weekday: date.format("ddd"),
        hour: date.hour(),
        data: transformWeather(item)
      };
    });

export default transformForecast;
