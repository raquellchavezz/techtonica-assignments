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


//next route:

app.get('/api/books', (req, res) => {   
    res.json(books);
})

app.get('/api/books/:bookID', cors(), async (req, res) =>{ //param name is bookID
//Is the request
let requestedBook = req.params.bookID; // :bookID is like a varaible/placeholder for what is being requested
console.log(requestedBook); //2 is the requested book which is being placed in URL in spot of book id but it doesn't exist which is why it is not found 404 error
//Is the response
for(let book of books){
    console.log(book);
    if(book.isbn === requestedBook){
        res.json(book);
    }
}//response for match below:
res.sendStatus(404); //want to return 404 when user inputs a bad request/invalid request, Not found-client error
})

const PORT = 5000; //port server will be listening on, typically 4 digit num and possibly range 

app.listen(PORT, () => console.log(` This server is running on port ${PORT}`));
//registering port with tht server 
//npm start knows using port 5000 for these requests 
// call and response 