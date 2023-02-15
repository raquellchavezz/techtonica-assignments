// You are going to write a React component named `
// Hi`, pass two properties into this component `firstName`
// and `lastName`. When you run your program your HTML
//  should say `"Hi yourFirstName yourLastName"`

import "./styles.css";
import Dice from "./components/Dice.js";
export default function App() {
  const player = "Player 1 ";
  const image = "../images/dice1.png";
  return (
    <div className="App">
      <Dice player={player} image={image} />
      <Dice player={"player 2"} image={image} />
    </div>
  );
}

// we imported the component
// we are doing this step so its imported into your diff files so it can
// hi.js is where we are making reusable code
//app.js is where you are calling that code to be used
