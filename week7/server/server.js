const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = 8082;
app.use(cors()); //adds middlewear --> cross origin resource sharing (security thing)
app.use(express.json()); //adds middlewear --> calling a func defined in express package maybe does smthn that allows for routes to take json as data type

// creates an endpoint for the route /api --> http://localhost:8082/
app.get('/', (req, res) => { //defining a route on our app which is a get method and url/endpoint for that is / --> top lvl of our app so we dont need to add anything after /
    res.json({ message: 'Hello from My template ExpressJS' });
  }); //sending req from front end(browser) requestsing /route from bakcend server and sends a json response back to the front end which is the message 

  //app.get calling get function & we are passing string /api/weather which is the route/url
//the thing that happens (req,res) is itself a function which is a callback 
// req & res are kind of returned from the 
//app.get takes a path in a callback function 
//callback lets us use req and res variables to do stuff
// creates an endpoint for the route /api/weather
//app.get is an api, we are allowing other ppl to interact wtih our code 
app.get('/api/weather', (req, res) => { // req = request, res = response --> its basically a callback listen for request matches specifc routes
  const city = req.query.CityName;  // for city we are setting the variable to the requested query which the user will input (they will choose a city)
  //connects city from app.js
  //we only want subset of data from openweather map then want to maniplate so its in the format the frontend needs
  //definfing brand new route for our server to interpret 
  //defines another get method orute on express app so string pass to it is whatever want to be
  //this is what you use for the query param in app.js --> http://localhost:8082/api/weather?CityName=${city}
  //when making req to backend server thats when we can control paramas and what data is being sent
  const apiKey = process.env.API_KEY; //environment variable set in .env file
  const params = new URLSearchParams({ //creating the params variable and setting it to whatevr URLSearchParams which is a built in express thing     q: req.query.City.Name, // the query that we will be searching for
   //a way to create a diff kind of query string without having to re-type everything
   //URLSearchParams  
   appid: process.env.API_KEY, //my api key to make requests to the database
    units: "imperial", //converting to fahrenheit
    q:city //set to city --> req.query.CityName
    //the q is from documentation 
    //q is needed we can change the query param after but the q is required 
  }); 
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;  //in backend making req
  console.log(url)
  //chaining diff func calls, callback bs all have own func calls inside
  fetch(url) //fetch func will return a response based on whatevr data u sent it (url get req)
  //calling .then on the promise
  .then((response) => response.json()) //response sends back saying ok weather api give me weather for x city, response will be weather for x city need as json so browser can understand 
  .then((result) => { //can also name result data
    console.log("Success:", result);
    res.send(result); //result variable needs to be inside scope bc variable won't exist outside of scope
  }) //res.send is coming from callback (req,res) which will go back to server and server will go back to frontend
  .catch((error) => {
    console.error("Error:", error); //can change to status code 500 server error
  }); //if have error console this error
  //result = response in json format
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });