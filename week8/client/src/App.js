import Header from "./components/header.js";
import UserForm from "./components/user.js";
import Game from "./components/game.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  //function handleUser(text){
  //   setUser(text)
  // }
  

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
