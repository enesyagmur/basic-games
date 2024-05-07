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
  const [thisValue, setThisValue] = useState();
  const newArray = game;

  const changeValue = () => {
    setResetCheck("");
    if (value === "") {
      setThisValue("x");
      newArray[id].value = "x";
      setValue("o");
    } else if (value === "x") {
      setThisValue("x");
      newArray[id].value = "x";
      setValue("o");
    } else if (value === "o") {
      setThisValue("o");
      newArray[id].value = "o";
      setValue("x");
    }
    setGame(newArray);
  };

  useEffect(() => {
    if (resetCheck === "reset") {
      setThisValue("");
      setValue("");
    }
  }, [resetCheck]);

  if (thisValue) {
    return (
      <div className="box">
        {thisValue === "x" ? <img src={x} alt="" /> : <img src={o} alt="" />}
        {<p>{id}</p>}
      </div>
    );
  } else {
    return <div className="box" onClick={changeValue}></div>;
  }
};

export default Box;
