import React from "react";
import "./alert.scss";
import { useNavigate } from "react-router-dom";

const Alert = ({ setResetCheck, result }) => {
  const navigate = useNavigate();
  const resetFunc = () => {
    setResetCheck({ state: "", result: "" });
    navigate("/");
  };
  return (
    <div className="alert">
      <p className="title">Oyun Bitti</p>
      <p className="result">{result}</p>
      <button onClick={resetFunc}>Menu</button>
    </div>
  );
};

export default Alert;
