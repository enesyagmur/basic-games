import React, { useState } from "react";
import "./boxList.scss";
import Box from "./Box";
import gamePlan from "./gameTable.json";
import Alert from "./Alert";

const BoxList = () => {
  const [value, setValue] = useState("");
  const [resetCheck, setResetCheck] = useState({ state: "", result: "" });
  const [game, setGame] = useState(gamePlan);
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="box-list">
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
      <button
        className="restart"
        onClick={() => setResetCheck({ state: "restart" })}
      >
        Restart
      </button>
      {resetCheck.result !== "" ? (
        <Alert setResetCheck={setResetCheck} result={resetCheck.result} />
      ) : null}
    </div>
  );
};

export default BoxList;
