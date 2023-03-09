import { useState } from "react";
const QuestionCard = (props) => {
  const [answered, setAnswered] = useState("false"); 
  const [score, setScore] = useState(0); 
  
  const updateScore = () => {

     setScore(prevCount => prevCount +1 )
    
         }  

  const checkAnswer = (event) => {
    //lets us know what the user is clicking on true or false
    const button = event.target.value; //gets button value
    console.log(button);
    if (button === props.question.correct_answer) {
      console.log(
        `Your answer, ${button}, is correct!`,
        "answer = ",
        props.question.correct_answer
      );
      return setScore(+1);
    } else {
      console.log(
        `Your answer, ${button}, is incorrect!`,
        "answer = ",
        props.question.correct_answer
      );
      return setScore();
      // props.setAnswer(false)
    }
  }; //pass result of func back up to parent and store that result as state in parent then pass as props to other the sibling that need to display
  // call the function automatically gets the return

  return (
    <div className={"question-section"}>
      <div className="question-text">{props.question.question}</div>
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
