import React, { useEffect, useState } from "react";
import x from "../../assets/cross.png";
import o from "../../assets/circle.png";
import "./box.scss";

const Box = ({
  value,
  setValue,
  resetCheck,
  setResetCheck,
  id,
  game,
  setGame,
}) => {
  const [thisValue, setThisValue] = useState({ id: -1, value: "" });
  const [newArray, setNewArray] = useState(game);

  const gameFinishCheckFunc = () => {
    if (game[1].value !== "") {
      if (game[1].value === game[4].value && game[4].value === game[7].value) {
        setResetCheck({
          state: "Oyun Bitti",
          result: `${game[1].value} oyuncusu kazandı`,
        });
      }
    }

    if (game[3].value !== "") {
      if (game[3].value === game[4].value && game[4].value === game[5].value) {
        setResetCheck({
          state: "Oyun Bitti",
          result: `${game[3].value} oyuncusu kazandı`,
        });
      }
    }
    if (game[6].value !== "") {
      if (game[6].value === game[7].value && game[7].value === game[8].value) {
        setResetCheck({
          state: "Oyun Bitti",
          result: `${game[6].value} oyuncusu kazandı`,
        });
      }
    }

    if (game[0].value !== "") {
      if (game[0].value === game[1].value && game[1].value === game[2].value) {
        setResetCheck({
          state: "Oyun Bitti",
          result: `${game[0].value} oyuncusu kazandı`,
        });
      }

      if (game[0].value !== "") {
        if (
          game[0].value === game[3].value &&
          game[3].value === game[6].value
        ) {
          setResetCheck({
            state: "Oyun Bitti",
            result: `${game[0].value} oyuncusu kazandı`,
          });
        }
      }
      if (game[0].value !== "") {
        if (
          game[0].value === game[4].value &&
          game[4].value === game[8].value
        ) {
          setResetCheck({
            state: "Oyun Bitti",
            result: `${game[0].value} oyuncusu kazandı`,
          });
        }
      }
    }

    if (game[2].value !== "") {
      if (game[2].value === game[4].value && game[4].value === game[6].value) {
        setResetCheck({
          state: "Oyun Bitti",
          result: `${game[2].value} oyuncusu kazandı`,
        });
      }
      if (game[2].value !== "") {
        if (
          game[2].value === game[5].value &&
          game[5].value === game[8].value
        ) {
          setResetCheck({
            state: "Oyun Bitti",
            result: `${game[2].value} oyuncusu kazandı`,
          });
        }
      }
    }
  };

  const changeValue = () => {
    if (value === "") {
      newArray[id].value = "x";
      setThisValue({ id: newArray[id].id, value: newArray[id].value });
      setValue("o");
    } else if (value === "x") {
      newArray[id].value = "x";
      setThisValue({ id: newArray[id].id, value: newArray[id].value });
      setValue("o");
    } else if (value === "o") {
      newArray[id].value = "o";
      setThisValue({ id: newArray[id].id, value: newArray[id].value });
      setValue("x");
    }
    setGame(newArray);
    gameFinishCheckFunc();
  };

  useEffect(() => {
    if (resetCheck.state === "restart") {
      setThisValue({ value: "" });
      setValue("");
    }
  }, [resetCheck]);

  if (thisValue.value !== "") {
    return (
      <div className="box">
        {thisValue.value === "x" ? (
          <img src={x} alt="" />
        ) : (
          <img src={o} alt="" />
        )}
      </div>
    );
  } else {
    return <div className="box" onClick={changeValue}></div>;
  }
};

export default Box;
