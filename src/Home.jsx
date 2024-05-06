import React from "react";
import "./home.scss";

import xoxLogo from "./assets/xox.png";
import chessLogo from "./assets/chess.png";
import baloonLogo from "./assets/baloon.png";

const Home = () => {
  return (
    <div className="home">
      <header>
        <p>MINI GAMES</p>
      </header>
      <main>
        <div className="chess">
          <img src={chessLogo} alt="" />
        </div>
        <div className="xox">
          <img src={xoxLogo} alt="" />
        </div>
        <div className="baloon">
          <img src={baloonLogo} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Home;
