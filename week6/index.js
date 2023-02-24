const express = require("express");
const cors = require("cors");
const books = require("./books.js"); //how reference js file 

const app = express();
app.use(express.json()); //added
app.use(express.urlencoded({ extended: true })); //added
//routing file
//midleware functions
app.use(cors());
//slash is saying we don't need additonal words after so it will go to http://localhost:5000
app.get("/", (req, res) => {
  //slash means it is the main route w/o adding any keywords after the /
  res.json("Hello, this is my server! "); //can add slash at end if want in broswer but its implicit
});

//next route:

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookID", cors(), async (req, res) => {
  //param name is bookID
  //Is the request
  let requestedBook = req.params.bookID; // :bookID is like a varaible/placeholder for what is being requested
  console.log(requestedBook); //2 is the requested book which is being placed in URL in spot of book id but it doesn't exist which is why it is not found 404 error
  //Is the response
  for (let book of books) {
    //for every book n the array of object called books --> books.js
    console.log(book);
    if (book.isbn === requestedBook) {
      return res.json(book);
    }
  } //response for match below:
  res.sendStatus(404); //want to return 404 when user inputs a bad request/invalid request, Not found-client error
  // res.status(404).send()
}); //can only do a get request on browsers

//next route with POST
app.post("/api/books", cors(), async (req, res) => {
  // call this func passing in here
  // let requestedAuthor = req.params.bookAuthor; //turning json into string
  // console.log("this is the req.body: " + JSON.stringify(req.body)); //data sent in (curl) request
  // console.log("this is the req.body: " + req.body); //data sent in curl request
  // console.log(req.body.title); //people we meet on vaction, from curl req made in terminal
  //if var name is plural its an array, eaach indiv element of the array is a book
  //body is for more detailed information
  books.push(req.body);
  //post keyword goes in request header but we can't do this in the broswer by just typing it in the url
  //next: new book obj based on attributes sent to req.body then adding to books arraay & return new books array with new book obj in it to add new resource to that array
  // res.sendStatus(404); //want to return 404 when user inputs a bad request/invalid request, Not found-client error
  res.sendStatus(200);
});
// //using two diff http methods so this would not interfere with the previous get request


const PORT = 5000; //port server will be listening on, typically 4 digit num and possibly range

app.listen(PORT, () => console.log(` This server is running on port ${PORT}`));
//registering port with tht server
//npm start knows using port 5000 for these requests
// call and response
