import React, { useState } from "react";
import QuestionCard from "./questioncard";
const Score = (props) => {
    const [score, setScore] = useState(0); 
    
    const updateScore = () => {
        setCount(prevCount => prevCount +1 )

    }


    return (
      <div>
        <h3> Count is:   </h3>
        <button onClick={updateScore}></button>
      </div>
    )
  }
  
  export default Score;