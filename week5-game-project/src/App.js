// You are going to write a React component named `
// Hi`, pass two properties into this component `firstName`
// and `lastName`. When you run your program your HTML
//  should say `"Hi yourFirstName yourLastName"`
import React from "react";
import "./styles.css";
import Dice from "./components/Dice.js"; //in dice.js making the component but wont be used until imported and initialized
import { useState } from 'react'
//method1: 
export default function App() {
  const player = "Player 1 ";
  const image = "../images/dice1.png";
  return (
    <>
    <div className="App">
        <center>
            <h1>TITLE</h1>
        </center>
      <Dice player={player} image={image} />  {/* initializing- putting the component on the page*/}
      <Dice player={"player 2"} image={image} />
      <button className="diceRollButton"> Roll the dice </button>
{/* onClick ={changeImage} */}
    </div>
    
    </>
    
  );
}


//canput both imgs in dice component- may be confusing want to keep components simple
//could seperate so the button is just in app.js so controlled thru there & have new component thats just these images 
//dice component that just shows img- tell what img to show and shows it 
// app will have button + func to roll 
// we imported the component
// we are doing this step so its imported into your diff files so it can
// hi.js is where we are making reusable code
//app.js is where you are calling that code to be used


//method 2: 
//code out all of the code for dice 1 and dice 2, wont be instances of each the dice component 

// export default function App(){ 
//     const player = "Player 1"; 
//     const  image= "../images/dice1.png"; 
//     return(
//         <div className = "dice">
//             <center> 
//                 <h1>DICE ROLL GAME</h1>
//                 <div className="container">
                
//                 </div>

//         </center>

//         </div>
//          ); 
//     } 