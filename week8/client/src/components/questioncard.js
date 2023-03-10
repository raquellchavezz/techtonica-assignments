import { useState } from "react";
import Score from "./scoreBoard";
import { decode } from "html-entities"; 

const QuestionCard = (props) => {
  const [answered, setAnswered] = useState("false");
  // const [score, setScore] = useState(0);

  // const updateScore = () => {

  //    setScore(prevCount => prevCount +1 )

  //        }

  const checkAnswer = (event) => {
    //lets us know what the user is clicking on true or false
    const userAnswer = event.target.value; //gets button value
    const correctAnswer = props.question.correct_answer;
    console.log(userAnswer);
    if (userAnswer === correctAnswer) {
      console.log(
        `Your answer, ${userAnswer}, is correct!`,
        "answer = ",
        correctAnswer
      );
      props.setScore(props.score +1)
      //props being passed back up to parent
      //only way for react to keep track of updated score is thru function setScore 
      //game card has state called score and we are passing it as a prop here 
      // props.passingScore(score);
      //pass down score and passScore

  //"props. send it up to the pops" -Ruthie
    } else {
      //not doing anything with the score in the else, score won't be affected here
      console.log(
        `Your answer, ${userAnswer}, is incorrect!`,
        "answer = ",
        correctAnswer
      );
    }
  }; //pass result of func back up to parent and store that result as state in parent then pass as props to other the sibling that need to display
  // call the function automatically gets the return

  return (
    <div className={"question-section"}>
      <div className="question-text">{decode(props.question.question)}</div>
      {/* passing data for the question in as props*/}
      <div className="answer-section">
        <button value="True" onClick={checkAnswer}>
          True
        </button>
        {/*pass as prop */}
        {/* can have an onclick then pass in a function that will check if answer is correct */}
        <button value="False" onClick={checkAnswer}>
          {" "}
          {/*calling func checkAnswer*/}
          False
        </button>
        {/*onClick events take in a function, dont need to call */}
      </div>
      {/* <button onClick={() => setScore()}>Reset</button> */}
    </div>
  );
};

export default QuestionCard;
//dont want to define state with same name thinking its the same data 
//each state should be its own unique data 