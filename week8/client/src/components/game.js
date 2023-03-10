import { useState, useEffect } from "react";
import QuestionCard from "./questioncard"; //game.js is parent of this
import Score from "./scoreBoard";
//want to keep score in game 

//function game (props){ 

//}
const Game = (props) => {

    const [questions, setQuestions] = useState([]); //state for the questions 
    const [score, setScore] = useState(0); //moved state here because this is where we are handling the state
    
    // const passScore = (score) => { //using a callback function 
    //     setScore(score); //calling the function 
    //     console.log(score)

    // }

    const loadData = () => {
        fetch('http://localhost:5000/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
            })
    }
    

    useEffect( //function takes 2 params 1) thing load data which will render each time data change 2) empty array bc second param should be param of your state
        () => { //runs whenever array changes, like side effect
        loadData(); //21 -23 first param, this func figures out what our questions are 
    }
    , []) // second param 

    return ( //can return scoreboard here
        <div className="Container">
            <div> 
        
               <Score score={score}/>      {/* passing the prop into score */}
            </div>
            <div className='question-count'>
                <span>Question 1</span>/{questions.length}
            </div>
            {questions.map((question, index) => { //mapping all anwers and passing it one at a time 
                return <QuestionCard key={index} question={question} score={score} setScore={setScore}  /> //question card is per question
            })} 
            {/*checkAnswer = {checkAnswer}*/}
            {/* giving child access to state thats in out parent, prop that holds my callback func setScore */}
        </div>
    )
    // return <QuestionCard key={index} question={question} score={score} setScore={setScore} /> //question card is per question

}

export default Game;
