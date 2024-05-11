import React, { useState } from "react";
import "./xox.scss";
import BoxList from "./BoxList";

const Xox = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="xox">
      <div className="title">
        <p className="x">X</p>
        <p className="o">O</p>
        <p className="x">X</p>
      </div>

      {play ? <BoxList /> : null}
      {play ? null : (
        <button className="start" onClick={() => setPlay(true)}>
          Start
        </button>
      )}
    </div>
  );
};

export default Xox;
