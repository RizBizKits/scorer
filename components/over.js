import Ball from "./ball";
import { useState } from "react";

export default function Over({ count, overScore }) {
  const TOTAL_BALLS_IN_OVER = 6;
  const [activeBall, setActiveBall] = useState(-1);
  const [currentRunningScore, setRunningScore] = useState(0);
  const [scoreInOverHistory, setscoreInOverHistory] = useState([]);
  let runningScore = 0;

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
            if (e === "NB" || e === "W") {
              runningScore = currentRunningScore + 2;
              setRunningScore(runningScore);
              overScore(runningScore);
            }
            if (!(e === "NB" || e === "W" || e === "OUT")) {
              runningScore = currentRunningScore + parseFloat(e);
              setRunningScore(runningScore);
              overScore(runningScore);
            }
            if (e === "OUT") {
              runningScore = currentRunningScore - 5;
              setRunningScore(runningScore);
              overScore(runningScore);
            }
          }}
        ></Ball>
      ))}
    </div>
  );
}
