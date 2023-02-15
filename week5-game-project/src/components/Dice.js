export default function Dice(props) {
    // 1 file per function
    return (
      <>
      <div className="dice">
        <p id="player"> {props.player}</p>
        <button className="diceRollButton "> Roll the dice </button>
        <img src="/images/dice1.png" alt="dice" />
      </div>
  {/* 
  
      <div class="buttons"> 
          <button id= "diceRollButton" type="button" onclick=changeImage() >Roll the Dice</button>
          <button id="resetButtton" type="button" onclick =  resetImage()>Reset</button>
  
      </div> */}
      </>
    );
  }
  