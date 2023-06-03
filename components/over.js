import Ball from "./ball";
import BallOptions from "./ballOptions";
import { useState } from "react";

export default function Over({ count }) {
  const TOTAL_BALLS_IN_OVER = 6;
  const [activeBall, setActiveBall] = useState(-1);

  return [...Array(TOTAL_BALLS_IN_OVER).keys()].map((key) => (
    <Ball
      over={count}
      ballInOver={key}
      key={key}
      showBallOptions={key == activeBall} // whether app is open or not
      onUpdate={(e) => {
        console.log(e);
        setActiveBall(e.ballInOver + 1);
      }}
      handleClick={(ballInOver) => {
        setActiveBall(ballInOver);
      }}
    ></Ball>
  ));
}
