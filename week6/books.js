//we want to hard code our data 
/*
Hardcoded data refers to data that is directly embedded into the source code
of a program, rather than being loaded from an external source or generated 
dynamically at runtime. Hardcoded data can include things like default
configuration settings, fixed values for variables or constants, or even 
complete sets of data that are used as input for a program.
source: https://docs.google.com/document/d/12MFPDYC0LPKpzrYHZVmfs2NeCUfquNpEKCLKtDkcK4E/edit#heading=h.w9okd5g2nzam
- hard coding data in express = appropriate solution when your information is short so your data could be easy to read

*/
const BOOKS = [{
    "isbn": "9780593334836",
    "title": "Book Lovers",
    "author": "Emily Henry",
    "format": "Paperback"
},
{
    "isbn": "9798742783022",
    "title": "From the Embers",
    "author": "Aly Martinez",
    "format": "Paperback"
},
{
    "isbn": "9781878424310",
    "title": "The Four Agreements",
    "author": "Miguel Ruiz",
    "format": "Paperback"
},
{
    "isbn": "9780735211292",
    "title": "Atomic Habits",
    "author": "James Clear",
    "format": "Hardcover"
},
{
    "isbn": "9781623360276",
    "title": "The Startch Solution",
    "author": "John A McDougall",
    "format": "Paperback"
},
{
    "isbn": "9780316120913",
    "title": "Eat To Live",
    "author": "Joel Fuhrman, M.D",
    "format": "Paperback"
},
{
    "isbn": "9781932100662",
    "title": "The China Study",
    "author": "T Colin Campbell, PhD and Thomas M. Campbell II",
    "format": "Paperback"
},
{
    "isbn": "9780593237465",
    "title": "The Light We Carry",
    "author": "Michelle Obama",
    "format": "Hardcover"
},
{
    "isbn": "9780762447695",
    "title": "You Are a Badass",
    "author": "Jen Sincero",
    "format": "Paperback"
},
{
    "isbn": "9780735223707",
    "title": "Know My Name",
    "author": "Chanel Miller",
    "format": "Hardcover"
},
{
    "isbn": "9780735219106",
    "title": "Where the Crawdads Sing",
    "author": "Delia Owens",
    "format": "Paperback"
}
]
module.exports = BOOKS;