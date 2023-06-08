import Ball from "./ball";
import { useState } from "react";

export default function Over({ count }) {
  const TOTAL_BALLS_IN_OVER = 6;
  const [activeBall, setActiveBall] = useState(-1);
  const [currentScoreInOver, setScoreInOver] = useState(0);
  const [scoreInOverHistory, setscoreInOverHistory] = useState([]);

  return (
    <div className="w-screen">
      {[...Array(TOTAL_BALLS_IN_OVER).keys()].map((key) => (
        <Ball
          over={count}
          ballInOver={key}
          key={key}
          showBallOptions={key == activeBall} // whether app is open or not
          onUpdate={(e) => {
            setActiveBall(e.ballInOver + 1);
          }}
          handleClick={(ballInOver) => {
            setActiveBall(ballInOver);
          }}
          scoreInBall={(e) => {
            setscoreInOverHistory([...scoreInOverHistory, e + ", "]);
            if (!(e === "NB" || e === "W" || e === "OUT")) {
              setScoreInOver(currentScoreInOver + parseFloat(e));
            }
            if (e === "OUT") {
              setScoreInOver(currentScoreInOver - 5);
            }
          }}
        ></Ball>
      ))}
    </div>
  );
}
