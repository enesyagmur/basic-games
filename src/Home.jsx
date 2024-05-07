import React from "react";
import "./home.scss";

import xoxLogo from "./assets/xox.png";
import chessLogo from "./assets/chess.png";
import baloonLogo from "./assets/baloon.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header>
        <p>MINI GAMES</p>
      </header>
      <main>
        <div className="chess" onClick={() => navigate("/")}>
          <img src={chessLogo} alt="" />
        </div>
        <div className="xox" onClick={() => navigate("/xox")}>
          <img src={xoxLogo} alt="" />
        </div>
        <div className="baloon" onClick={() => navigate("/")}>
          <img src={baloonLogo} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Home;
