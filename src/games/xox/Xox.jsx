import React, { useEffect, useState } from "react";
import "./xox.scss";
import Box from "./Box";
import gamePlan from "./gameTable.json";

const Xox = () => {
  const [value, setValue] = useState("");
  const [resetCheck, setResetCheck] = useState("");
  const [game, setGame] = useState(gamePlan);
  const [winingId, setWiningId] = useState([]);

  useEffect(() => {}, [game]);

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="xox">
      <div className="title">
        <p className="x">X</p>
        <p className="o">O</p>
        <p className="x">X</p>
      </div>

      <main>
        {array.map((i) => (
          <Box
            value={value}
            setValue={setValue}
            resetCheck={resetCheck}
            setResetCheck={setResetCheck}
            game={game}
            setGame={setGame}
            key={i}
            id={i}
          />
        ))}
      </main>
      <button className="reset" onClick={() => setResetCheck("reset")}>
        RESTART
      </button>
    </div>
  );
};

export default Xox;
