/*
create a new variable called randomNumber1 then set the value of
this variable to a random number between 1 and 6. 
Test it out in console to make sure it works as expected
*/

// let randomNumber1 = Math.floor(Math.random()*6 +1); //generates number from 0 and 0.99999
// // creates a random decimal number between 0 and 1. The returned value may be 0, but it will never be 1
// console.log(randomNumber1); 
//Math.floor(Math.random()*6) will give us numbers  0-6 so we need to add 1
// 0+1 = 1, 1+1= 2, 2+1= 3, etc


//place this image inside the left <img> element
// I want to randomly change the image using the randomNumber1 variable
//when user clicks on the button roll the dice 
// let changeImg1 = "images/dice" + randomNumber1 + ".png"
// function changeImg1(){ 
//     document.getElementById("img1").src=";
// }

let imageUrls = [
    'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html',
    'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html',
    'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html',
    'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html',
    'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html',
    'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html'
    
   ];

let imgToChange = document.getElementById('img1');
diceRollButton.addEventListener("click", function() {
    this.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
});



