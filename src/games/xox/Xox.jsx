import React, { useEffect, useState } from "react";
import "./xox.scss";
import Box from "./Box";
import gamePlan from "./gameTable.json";

const Xox = () => {
  const [value, setValue] = useState("");
  const [resetCheck, setResetCheck] = useState("");
  const [game, setGame] = useState(gamePlan);
  // şu an oyunun bitimini kontrol etmeye çalışıyorum
  useEffect(() => {
    const result = game.filter(
      (item) => item.value === "x" || item.value === "o"
    );
  }, [game]);
  console.log(game);
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="xox">
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
