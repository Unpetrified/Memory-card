import "./assets/styles/App.css";
import Game from "./components/game_board";
import { Header, Footer } from "./components/header_footer";
import { useState } from "react";
import HowToPlay from "./components/how_to_play";

function App() {
  const [current, setCurrent] = useState(0),
    [best, setBest] = useState(current);
  return (
    <>
      <Header c={current} b={best} />
      <HowToPlay />
      <Game c={current} b={best} setC={setCurrent} setB={setBest} />
      <Footer />
    </>
  );
}

export default App;
