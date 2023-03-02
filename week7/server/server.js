const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dataWeather = require("./data")

const app = express();

const PORT = 8082;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My template ExpressJS' });
  });
//app.get calling get function & we are passing string /api/weather which is the route/url
//the thing that happens (req,res) is itself a function which is a callback 
// req & res are kind of returned from the 
//app.get takes a path in a callback function 
//callback lets us use req and res variables to do stuff
// creates an endpoint for the route /api/weather
app.get('/api/weather', (req, res) => { // req = request, res = response --> its basically a callback listen for request matches specifc routes
  const city = req.query.CityName;  // for city we are setting the variable to the requested query which the user will input (they will choose a city)
  const apiKey = process.env.API_KEY; //environment variable set in .env file
  const params = new URLSearchParams({ //creating the params variable and setting it to whatevr URLSearchParams which is a built in express thing     q: req.query.City.Name, // the query that we will be searching for
   //a way to create a diff kind of query string without having to re-type everything
    appid: process.env.API_KEY, //my api key to make requests to the database
    units: "imperial", //converting to fahrenheit
    city: city //set to city --> req.query.CityName
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;  //in backend making req
  console.log(url)
  fetch(url)
  .then((response) => response.json()) //response sends back saying ok weather api give me weather for x city, response will be weather for x city need as json so browser can understand 
  .then((result) => {
    console.log("Success:", result);
    res.send(result); //result variable needs to be inside scope bc variable won't exist outside of scope
  }) 
  .catch((error) => {
    console.error("Error:", error);
  }); //if have error console this error
  //result = response in json format
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });