const WeatherForm = (props) =>{


    return (
        <div className="weather">
        <h1 className="App-header">Techtonica Weather Forecast App</h1>
        <form onSubmit={props.handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter the city name"
            name="city"
            value={props.city}
            readOnly
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default WeatherForm;