import Header from "./components/header.js";
import UserForm from "./components/user.js";
import Game from "./components/game.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(""); //state to set the user
  // const [score, setScore] = useState(0); //state to set the score
  //state that would hold result of child
  const [result, setResult] = useState(""); //state to set the result
  //function handleUser(text){
  //   setUser(text)
  // }
  //event = all info about form being pressed
  //how much diff is this than a counter?
  //
  // const checkAnswer = (event) => {
  //   //lets us know what the user is clicking on true or false
  //   const button = event.target.value; //gets button value
  //   console.log(button);
  //   if (button === props.question.correct_answer) {
  //     console.log(
  //       `Your answer, ${button}, is correct!`,
  //       "answer = ",
  //       props.question.correct_answer
  //     );
  //     return setScore(+1);
  //   } else {
  //     console.log(
  //       `Your answer, ${button}, is incorrect!`,
  //       "answer = ",
  //       props.question.correct_answer
  //     );
  //     return setScore();
  //     // props.setAnswer(false)
  //   }
  // }; //pass result of func back up to parent and store that result as state in parent then pass as props to other the sibling that need to display
  // // call the function automatically gets the return
  
  
  // const handlerIncrement = () => {
  //   setScore((prevCount) => prevCount + 1);
  // };

  //make a function score

  const handleUser = (text) => {
    setUser(text);
  };

  return (
    <div className="App">
      <Header user={user} />
      <UserForm grabUser={handleUser} />
      {user ? <Game /> : null}
      {/*checkAnswer={checkAnswer}  */}
      {/* if user then we will show game other wise if user empty we do nothing*/}

    </div>
  );
}

export default App;
