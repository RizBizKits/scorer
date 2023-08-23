import { useState } from "react";

export default function BallOptions({ over, ballInOver }) {
  const [setBall, setBallEvent] = useState(false);
  const OVERS = 16;

  const buttonHandler = () => {
    setBallEvent(true);
  };

  return (
    <div className="ball-wrapper m-2  border-solid border-2 border-black rounded-lg px-2 py-2">
      {setBall ? (
        <p className="text-center">You have already recorded this delivery.</p>
      ) : (
        <div className="ball-wrapper-cell grid grid-cols-3 gap-1">
          <button
            onClick={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2 py-2"
            disabled={setBall}
          >
            1
          </button>
          <button
            onClick={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2  py-2"
            disabled={setBall}
          >
            2
          </button>
          <button
            onClick={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2  py-2"
            disabled={setBall}
          >
            3
          </button>
          <button
            onClick={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2  py-2"
            disabled={setBall}
          >
            4
          </button>
          <button
            onClick={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2  py-2"
            disabled={setBall}
          >
            5
          </button>
          <button
            onClick={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2  py-2"
            disabled={setBall}
          >
            6
          </button>
          <button
            onClick={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2  py-2"
            disabled={setBall}
          >
            NB
          </button>
          <button
            onClick={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2  py-2"
            disabled={setBall}
          >
            W
          </button>
          <button
            onChange={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2  py-2"
            disabled={setBall}
          >
            OUT
          </button>
          <button
            onChange={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2  py-2"
            disabled={setBall}
          >
            BYE
          </button>
          <button
            onChange={buttonHandler}
            className="rounded-lg border-slate-500 border-solid border-2  py-2"
            disabled={setBall}
          >
            LEG BYE
          </button>
        </div>
      )}

      <p className="ball-count text-center">
        {`${over}.${ballInOver + 1}`} / {OVERS}
      </p>
    </div>
  );
}
