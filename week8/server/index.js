import express, { response } from 'express'; //runs your express
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

// For testing my API I saving one response in a .js file 
import fakedata  from './fakedata.js';

const app = express();
const PORT = 5000;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 


  // //hardcode the game response for testing reasons to don't saturate my API call. 
app.get('/api/game', (req, res) =>{ //local host 3000 will always show your react
  const url = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean'; // in the back end maiking the reques- 
  fetch(url) //this will fetch the url to the game that we want to render to the user from the game API TRIVIA
  .then((response) => response.json())
  .then((result) => { 
    console.log("Sucess: ", result); 
    res.send(result);
  })
.catch((error) => { 
  console.log("Error: ", error); 
}); 
}); 
//change path in my request from the backend 


app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));