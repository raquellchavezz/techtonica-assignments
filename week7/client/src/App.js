import './App.css'; //imports style sheet
import { useState } from "react"; //lets us change states in react
import WeatherForm from './components/weatherForm'; //connecting the weather form to the backend
import WeatherCard from './components/weatherCard'; //connecting the weather card to backend
import * as moment from 'moment'; 

 

function App() {
  const [city, setCity] = useState(""); //need to keep track of city, the city is at first set to an empty string ""
  // city is the variable we will be changing with the setCity function 
  const [result, setResult] = useState(null); //what api sends us will be result
  //result will be constantly changing based upon the city the user inputs so we need to useState to change this 
  //result is set to null because we start with no inital result since user has not requested a city yet 
  //result is the variable that will be changed using the setResult function
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("") // I think I need to create a use state for the sunrise/sunset times since they will 
  //be changing but I'm not sure because the humidity and temp changes and we dont have a usestate for those

  //A function to do the get request and set the state from the hard code data
  const loadCity = () => { //will get called later below
    fetch(`http://localhost:8082/api/weather?CityName=${city}`) //paassing in fetch a varaible named city
    // /api/weather?${city}`) now city updating everytime new req
    //not gettign back a city, look at api for weather api and wah do i have to send it so i know what city I want 
    //param is city which is the user input   --> its getting this from your backend
    //how do we get value from the form? 
    //something to manage (onChange) the data 
    //what do we do when someone submits the form 
//api for weather map is diff from the route we defined for backend server, backend calling out to weather map api
    .then((response) => response.json())
    // .then((sundata) => {moments(`0${data.sys.sunrise.hour}:${data.sys.sunrise.minute}am`,"hh:mm:a")})
    .then((result) => {
        // console.log(result.sys.sunrise);
        // setCity(result.weather[0].name);
        setResult(result); //setting the data we got back from weather map api and saving into our state varaibale called result
        setSunrise(convertUnixTime(result.sys.sunrise));
        setSunset(convertUnixTime(result.sys.sunset)) //this grabs the current sunrise
        //still empty string in state for sunrise right now
        //getting unix time converting it into correct time
        //want to try avoiding having 2 sets for same state variable close to eachother and using updated set val immed.
        // can create functions (helper fun) takes in raw val do any processing you want, return prcocess val, return set state just once
        // not waiting for set to update so can accecss it again here

      });
  }
  //whenever call setters from use state like setValue 
  //this set func is async - the state value wont be updated right away 
  // since not updated right away, the state itself was not updated in time before actually trying to use it 
  const convertUnixTime = (unixTime) =>{ 
    return moment(unixTime*1000).format('h:mm a'); // will give back the correct time
    // console.log(sunrise);
    // console.log(correctSunrise);
    // return correctSunrise;
    //{moment(dateToBeFormate).format('DD/MM/YYYY')
  }

  

 const handleSubmit = (e) =>{ //handlesumbit is a prop & func being passed to weather comp
  e.preventDefault();
  loadCity(); //calling load ciity, in load city call whatever path in load city
 }


  return (
    <div className="App">
      {/* now we need to connect to the weather form */}
      <WeatherForm setCity={setCity} handleSubmit={handleSubmit}/>

      {!result ? <p>Please click the button to see Data</p> : <WeatherCard data={result} sunrise={sunrise} sunset={sunset}/> } 
      {/* sunrise is our prop and we are passing the sunrise state to the sunrise prop */}
    </div>
  );
}

export default App;
//front end making req to backend 
//backend has diff api than the weather app
//react going to our backend 
