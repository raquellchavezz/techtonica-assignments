export default function Dice(props) {
    // 1 file per function
    //before retun statement inside dice component, think of thsi like a class 
    function changeImage(){
        let randomNumber1 = Math.floor(Math.random()*6 +1);
        let randomDiceImgSrc = "images/dice" + randomNumber1 + ".png";
        let image1= document.getElementById("img1");
        image1.setAttribute("src", randomDiceImgSrc);
        
        let randomNumber2 = Math.floor(Math.random()*6 +1);
        let randomDiceImgSrc2 = "images/dice" +randomNumber2 + ".png"; 
        // let image2 = document.querySelectorAll("img")[1]
        let image2 = document.getElementById("img2");
    
        image2.setAttribute("src", randomDiceImgSrc2); 
    
    
        const title = document.querySelector("h1");
            if (randomNumber1>randomNumber2){
                title.innerHTML = "Player 1 wins!🏆";
            }else if (randomNumber2>randomNumber1) {
                title.innerHTML = "Player 2 wins!🏆";
            } else{
                title.innerHTML= "It's a tie!🤝🏽"
        
            }
    }



    return (
      <>
      <div className="dice">
        <p id="player"> {props.player}</p>
        <button className="diceRollButton" onClick ={changeImage}> Roll the dice </button>
        <img src="/images/dice1.png" alt="dice" />   {/* we dont need () or have the function as a string*/}
        {/* anytime ref variable or func we will need {} in jsx return*/}
      </div>
  {/* 
  
      <div class="buttons"> 
          <button id= "diceRollButton" type="button" onclick=changeImage() >Roll the Dice</button>
          <button id="resetButtton" type="button" onclick =  resetImage()>Reset</button>
  
      </div> */}



      </>
    );
  }
  