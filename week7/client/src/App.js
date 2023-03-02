import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard';

function App() {
  const [city, setCity] = useState(""); //need to keep track of city
  const [result, setResult] = useState(null); //what api sends us will be result

  //A function to do the get request and set the state from the hard code data
  const loadCity = () => { //will get called later below
    fetch(`http://localhost:8082/api/weather/${city}`) //not gettign back a city, look at api for weather api and wah do i have to send it so i know what city I want 
    //param is city which is the user input   --> its getting this from your backend
    //how do we get value from the form? 
    //something to manage (onChange) the data 
    //what do we do when someone submits the form 
    .then((response) => response.json())
      .then((result) => {
        console.log(result)
        // setCity(result.weather[0].name);
        // setResult(result);
      });
  }

 const handleSubmit = (e) =>{
  e.preventDefault();
  loadCity(); //calling load ciity, in load city call whatever path in load city
 }


  return (
    <div className="App">
      {/* now we need to connect to the weather form */}
      <WeatherForm setCity={setCity} handleSubmit={handleSubmit}/>
      {!result ? <p>Please click the botton to see Data</p> : <WeatherCard data={result} /> }
    </div>
  );
}

export default App;
