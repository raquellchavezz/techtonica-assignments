import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

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

    useEffect(
        () => { //runs whenever array changes, like side effect
        loadData(); //21 -23 first param, this func figures out what our questions are 
    }
    , []) // second param 

    return (
        <div className="Container">
            <div className='question-count'>
                <span>Question 1</span>/{questions.length}
            </div>
            {questions.map((question, index) => { //mapping all anwers and passing it one at a time 
                return <QuestionCard key={index} question={question} />
            })}
        </div>
    )

}

export default Game;
