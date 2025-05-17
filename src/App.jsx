import "./assets/styles/App.css";
import Game from "./components/game_board";
import { Header, Footer } from "./components/header_footer";
import { useState } from "react";
import HowToPlay from "./components/how_to_play";

function App() {
  const [score, setScore] = useState({ current: 0, best: 0 });
  return (
    <>
      <Header c={score.current} b={score.best} />
      <HowToPlay />
      <Game s={score} sScore={setScore} />
      <Footer />
    </>
  );
}

export default App;
