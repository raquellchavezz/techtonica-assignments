const WeatherForm = (props) =>{
const onChange = (e) => { //anytime type into text box
  //onchnage has access to event we are performing change on
  console.log(e.target.value) //event is the input elem, gives target of event which is the input elem
  props.setCity(e.target.value) //whenerver make change will set the city to user input value, this stores city variable
}

    return (
        <div className="weather">
        <h1 className="App-header">Techtonica Weather Forecast App </h1>
        <form onSubmit={props.handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter the city name"
            name="city"
            onChange= {onChange} //when there's a change made to the form when user submits
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default WeatherForm;