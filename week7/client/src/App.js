import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  //A function to do the get request and set the state from the hard code data
  const loadCity = () => {
    fetch("http://localhost:8080/api/weather")
      .then((response) => response.json())
      .then((result) => {
        //console.log(result)
        setCity(result.weather[0].name);
        setResult(result);
      });
  }

 const handleSubmit = (e) =>{
  e.preventDefault();
  loadCity();
 }


  return (
    <div className="App">
      <WeatherForm city={city} handleSubmit={handleSubmit}/>
      {!result ? <p>Please click the botton to see Data</p> : <WeatherCard data={result} /> }
    </div>
  );
}

export default App;
