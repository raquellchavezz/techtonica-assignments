export default function Dice(props) {
    // 1 file per function
    //before retun statement inside dice component, think of thsi like a class 

    return (
      <>
      <div className="dice">
        <p id="player"> {props.player}</p>
        <img src={`/images/dice${props.face}.png`} alt="dice" />   {/* we dont need () or have the function as a string*/}
        {/* anytime ref variable or func we will need {} in jsx return*/}
           {/*props.face same thing as concatenating like before*/}

      </div>
      </>
    );
  }
  