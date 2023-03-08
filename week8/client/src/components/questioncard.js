const QuestionCard = (props) => {


  const checkAnswer = (event) =>{  //lets us know what the user is clicking on true or false
    const button= event.target.value //gets button value
    console.log(button); 
    if (button === props.question.correct_answer){
      console.log(`Your answer, ${button}, is correct!`, "answer = ",props.question.correct_answer)
       props.setScore();
    }else{ 
      console.log(`Your answer, ${button}, is incorrect!`, "answer = ",props.question.correct_answer)
      props.setAnswer(false)
    }

  } //pass result of func back up to parent and store that result as state in parent then pass as props to other the sibling that need to display 
 
    return (
      <div className={"question-section"}>
        <div className='question-text'>{props.question.question}</div> 
        {/* data for the question */}
        <div className='answer-section'>
		<button value = "True" onClick = {checkAnswer}>True</button>
    {/* can have an onclick then pass in a function that will check if answer is correct */}
		<button value = "False" onClick = {checkAnswer} >False</button>  
    {/*onClick events take in a function, dont need to call */}
        </div>
      </div>
    );
  };

export default QuestionCard;