import { useState } from "react";

export default function Ball({
  over,
  ballInOver,
  showBallOptions,
  onUpdate,
  handleClick,
  scoreInBall,
}) {
  const [value, setValue] = useState();
  const OVERS = 16;

  const buttonHandler = (e) => {
    const val = e.target.innerText;
    setValue(val); // to pass the value contained inside the evenHandler (for e.g. "OUT") to setValue. This would result in "value" = OUT
    // console.log(val);
    // if (val != "NB" || val != "W" || val != "OUT") {
    //   overScore.push(val);
    // }
    onUpdate({
      buttonValue: e.target.innerText,
      ballInOver: ballInOver,
    });
    scoreInBall(val);
  };

  if (showBallOptions) {
    return (
      <>
        <div className="ball-wrapper m-2 border-solid border-2 border-black rounded-lg px-2 py-2">
          <div className="ball-wrapper-cell grid grid-cols-3 gap-1 place-items-center">
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              1
            </button>
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              2
            </button>
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              3
            </button>
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              4
            </button>
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              5
            </button>
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              6
            </button>
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              NB
            </button>
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              W
            </button>
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              OUT
            </button>
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              B
            </button>
            <button
              onClick={buttonHandler}
              className={`w-11 rounded-full border-slate-500 border-solid border-2 py-2 ${
                value ? "bg-gray-500 text-white" : ""
              } `}
            >
              LB
            </button>
          </div>
          <p className="ball-count text-center">
            {`${over}.${ballInOver + 1}`} / {OVERS}
          </p>
        </div>
      </>
    );
  }
  return (
    <div
      onClick={() => handleClick(ballInOver)} // ballInOver is the index
      className="ball-wrapper my-3 mx-2 border-solid border-2 border-black rounded-lg px-4 py-4"
    >
      <div className="flex flex-row place-content-between">
        <p className="ball-count">{`${over}.${ballInOver + 1}`}</p>
        {value ? (
          <p className="ball-count">{value}</p>
        ) : (
          <p className="ball-count">______</p>
        )}
      </div>
    </div>
  );
}
