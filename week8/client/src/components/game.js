import { useState, useEffect } from "react";
import QuestionCard from "./questioncard"; //game.js is parent of this
//want to keep score in game 

//function game (props){ 

//}
const Game = (props) => {

    const [questions, setQuestions] = useState([]); //state for the questions 
    


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
            <div className='question-count'>
                <span>Question 1</span>/{questions.length}
            </div>
            {questions.map((question, index) => { //mapping all anwers and passing it one at a time 
                return <QuestionCard key={index} question={question} /> //question card is per question
            })} 
            {/*checkAnswer = {checkAnswer}*/}
            <div> 
               {/* <Score/> */}
               
            </div>
        </div>
    )

}

export default Game;
