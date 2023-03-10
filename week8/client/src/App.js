import Header from "./components/header.js";
import UserForm from "./components/user.js";
import Game from "./components/game.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(""); //state to set the user
  // const [score, setScore] = useState(0); //state to set the score
  //state that would hold result of child

  //event = all info about form being pressed
  
  // }; //pass result of func back up to parent and store that result as state in parent then pass as props to other the sibling that need to display
  // // call the function automatically gets the return


  const handleUser = (text) => {
    setUser(text);
  };

  return (
    <div className="App">
      <Header user={user} />
      <UserForm grabUser={handleUser} />
      {user ? <Game /> : null}

      {/* if user then we will show game other wise if user empty we do nothing*/}

    </div>
  );
}

export default App;
