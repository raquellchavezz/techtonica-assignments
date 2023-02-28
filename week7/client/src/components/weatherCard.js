const WeatherCard = (props) => {


    return (
        <div className="weather-card">
            <div className="result">
                <p>City: <span className="data">
                    {props.data.weather[0].name}, {props.data.weather[0].sys.country}
                </span>
                </p>
                <p>Description: <span className="data">
                {props.data.weather[0].description}
              </span>
            </p>
            <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`} alt={"Icon from Open Weather Api"}/>
            <p>
              Temperature: <span className="data">
                {props.data.weather[0].main.temp} <sup>o</sup>F
              </span>
            </p>
            <p>
              Feels Like: <span className="data">
                {props.data.weather[0].main.feels_like} <sup>o</sup>F
              </span>
            </p>

            </div>

        </div>
    )
}

export default WeatherCard;