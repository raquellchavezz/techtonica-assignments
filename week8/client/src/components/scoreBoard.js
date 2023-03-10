const Score = (props) => {

    return (
      <div className="scoreBoard">
    
        <h3> 🏆 Your score is: {props.score}  </h3> 
        {/* this will render the props that we pass score */}
      </div>
    )
  }
  
  export default Score;