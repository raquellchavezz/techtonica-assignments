

// if (typeof window !== 'undefined') {
//     console.log('You are on the browser')
//     // 👉️ can use alert()
//   } else {
//     console.log('You are on the server')
//     // 👉️ can't use alert()
//   }
// alert("this is working"); 

/*
// create a new variable called randomNumber1 then set the value of
// this variable to a random number between 1 and 6. 
// Test it out in console to make sure it works as expected
// */
//testing to see if page works 

// let randomNumber1 = Math.floor(Math.random()*6 +1); //generates number from 0 and 0.99999
// // creates a random decimal number between 0 and 1. The returned value may be 0, but it will never be 1
// console.log(randomNumber1); 
// // will give us numbers  0-6 so we need to add 1
// // 0+1 = 1, 1+1= 2, 2+1= 3, etc
// // // place this image inside the left <img> element
// // // I want to randomly change the image using the randomNumber1 variable
// // // when user clicks on the button roll the dice 
// let randomDiceImgSrc = "images/dice" + randomNumber1 + ".png";
// let image1= document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomDiceImgSrc);
function changeImage(){
    let randomNumber1 = Math.floor(Math.random()*6 +1);
    let randomDiceImgSrc = "images/dice" + randomNumber1 + ".png";
    let image1= document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImgSrc);
    
    let randomNumber2 = Math.floor(Math.random()*6 +1);
    let randomDiceImgSrc2 = "images/dice" +randomNumber2 + ".png"; 
    let image2 = document.querySelectorAll("img")[1]
    image2.setAttribute("src", randomDiceImgSrc2); 

}
changeImage(); 

function resetImage(){
    //want to reseet the image back to showing 6 sides of the dice 
    let image1= document.querySelectorAll("img")[0];
    let reset = "images/dice6.png"
    image1.setAttribute("src", reset );


}

//do the same thing for the second image 
// function changeImage2(){
//     let randomNumber2 = Math.floor(Math.random()*6 +1)
//     let randomDiceImgSrc2 = "images/dice" +randomNumber2 + ".png"; 
//     let image2 = document.querySelectorAll["img"][1]
//     image2.setAttribute("src", randomDiceImgSrc);
// }






// // // function changeImg1(){ 
// // //     document.getElementById("img1").src="";
// // // }

// // // let imageUrls = [
// // //     'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html', //just trying to test if changes
// // //     'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html',//
// // //     'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html',
// // //     'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html',
// // //     'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html',
// // //     'https://pngtree.com/freepng/vector-dice-one-icon_3773550.html'
    
// // //    ];

// // // let imgToChange = document.getElementById('img1');
// // // imgToChange.addEventListener("click", changeImg() {
// // //     imgToChange.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
// // // });

// // // let imgToChange = document.getElementById('img1');
// // // imgToChange.addEventListener("click", changeImg() {
// // //     imgToChange.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
// // // });

// // //https://stackoverflow.com/questions/29969239/how-to-make-a-picture-change-randomly-in-a-website 

// // // ______________________________________________________________________________________________

// // //testing: 









// // // let randomNumber1 = Math.floor(Math.random()*6 +1); //generates number from 0 and 0.99999
// // // // creates a random decimal number between 0 and 1. The returned value may be 0, but it will never be 1
// // // console.log(randomNumber1);
// // // function randomDice(){ 
// // //     let randomNum= Math.floor((Math.random()*6)+1); 
// // //     let imgSrc1 = "images/dice" + randomNum + ".png"
// // //     console.log(randomNum)
// // //     console.log(imgSrc1)
// // //     document.getElementById("img1").src = imgSrc1;

// // // }
// // // randomDice(); 


// // // let imgSrc1 = "images/dice" + randomNumber1 + ".png"
// // // function changeImg(){ 
// // //     let changeImg1 = document.getElementById("img1"); 
// // //     changeImg1.src = "imgSrc1"; 
// // //     console.log("hi"+ changeImg1.src)
// // // }










