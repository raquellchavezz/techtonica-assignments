const express = require("express");
const cors = require("cors");
const books = require('./books.js')

const app = express();
//routing file 
//midleware functions 
app.use(cors());
//slash is saying we don't need additonal words after so it will go to http://localhost:5000
app.get('/', (req, res) => { //slash means it is the main route w/o adding any keywords after the /
    res.json("Hello, this is my server! "); //can add slash at end if want in broswer but its implicit 
})
