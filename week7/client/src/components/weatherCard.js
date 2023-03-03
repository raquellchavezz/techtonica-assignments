


const WeatherCard = (props) => {
  const moment = require('moment');

    return (
        <div className="weather-card">
            <div className="result">
                <p>City: <span className="data">
                    {props.data.name}, {props.data.sys.country}
                </span>
                </p>
                <p>Description: <span className="data">
                {props.data.weather[0].description}
              </span>
            </p>
            <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`} alt={"Icon from Open Weather Api"}/> 
            {/* have to access the index */}
            <p>
              Temperature: <span className="data">
                {props.data.main.temp} <sup>o</sup>F
              </span>
            </p>
            <p>
              Feels Like: <span className="data">
                {props.data.main.feels_like} <sup>o</sup>F
              </span>
            </p>
            <p>
              Sunrise: <span className="data">
                {props.sunrise}
              </span>
            </p>
            <p>
              Sunset: <span className="data">
              {props.sunset}
                {/* {props.moment(sunsetTime).format()} */}
              {/* thinking something like this: */}
            {/* {props.moment.tz(weather.data.sunset *1000, timezone).format('HH:mm')} */}
              
              </span>
            </p>

            <p>
              Humidity: <span className="data">
                {props.data.main.humidity}
              </span>
            </p>

            </div>

        </div>
    )
}

export default WeatherCard;