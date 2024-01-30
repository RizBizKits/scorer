import { useState } from "react";

export default function Ball({
  over,
  ballInOver,
  showBallOptions,
  showOutOptions,
  onUpdate,
  onOutUpdate,
  handleClick,
  handleOutClick,
  scoreInBall,
}) {
  const [value, setValue] = useState();
  const [outValue, setOutValue] = useState();

  const OVERS = 16;

  const buttonHandler = (e) => {
    console.log(ballInOver);

    let val = e.target.innerText;
    setValue(val); // to pass the value contained inside the evenHandler (for e.g. "OUT") to setValue. This would result in "value" = OUT
    scoreInBall(val);

    if (val !== "OUT") {
      onUpdate({
        buttonValue: e.target.innerText,
        ballInOver: ballInOver,
      });
    }
  };

  const outButtonHandler = (e) => {
    // let val = e.target.innerText;
    // setValue(val);
    // scoreInBall(val);
    handleOutClick({
      buttonValue: e.target.innerText,
      ballInOver: ballInOver,
    });
  };

  const outOptionsHandler = (e) => {
    let val = e.target.innerText;
    setValue(val);
    scoreInBall(val);
    let outVal = e.target.innerText;
    setOutValue(outVal);
    onOutUpdate({ ballInOver: ballInOver });
    onUpdate({
      buttonValue: e.target.innerText,
      ballInOver: ballInOver,
    });
  };

  if (showBallOptions) {
    return (
      <>
        <div className="ball-wrapper m-2 border-solid border-2 border-emerald-700 bg-emerald-900 text-white  rounded-xl px-2 py-4 flex flex-col ">
          <div className="ball-wrapper-cell flex flex-row gap-3 flex-1">
            <div className="w-full">
              <div className="type-tab border-emerald-50 border-2 border-solid p-2 rounded-xl">
                <div className="grid grid-cols-2 grid-rows-3 grid-flow-row gap-2">
                  <button
                    onClick={buttonHandler}
                    className={` border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2 ${
                      value ? "border-dashed" : ""
                    } `}
                  >
                    1
                  </button>
                  <button
                    onClick={buttonHandler}
                    className={` border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2 ${
                      value ? "border-dashed" : ""
                    } `}
                  >
                    2
                  </button>
                  <button
                    onClick={buttonHandler}
                    className={` border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2 ${
                      value ? "border-dashed" : ""
                    } `}
                  >
                    3
                  </button>
                  <button
                    onClick={buttonHandler}
                    className={` border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2 ${
                      value ? "border-dashed" : ""
                    } `}
                  >
                    4
                  </button>
                  <button
                    onClick={buttonHandler}
                    className={` border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2 ${
                      value ? "border-dashed" : ""
                    } `}
                  >
                    5
                  </button>
                  <button
                    onClick={buttonHandler}
                    className={` border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2 ${
                      value ? "border-dashed" : ""
                    } `}
                  >
                    6
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 grid-rows-3 grid-flow-row-dense gap-2">
                {/* <button
                  onClick={buttonHandler}
                  className={` border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2 ${
                    value ? "border-dashed" : ""
                  } `}
                >
                  NB
                </button> */}
                <button
                  onClick={buttonHandler}
                  className={` border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2 col-span-full ${
                    value ? "border-dashed" : ""
                  } `}
                >
                  W
                </button>
                {/* <button
                  onClick={buttonHandler}
                  className={` border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2 ${
                    value ? "border-dashed" : ""
                  } `}
                >
                  B
                </button>
                <button
                  onClick={buttonHandler}
                  className={` border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2 ${
                    value ? "border-dashed" : ""
                  } `}
                >
                  LB
                </button> */}
                <button
                  onClick={outButtonHandler}
                  className={`border-emerald-300 col-span-full min-w-max rounded-lg border-dashed py-2 border-2 ${
                    value ? "border-dashed" : ""
                  } `}
                >
                  OUT
                </button>
              </div>
            </div>
          </div>
          {showOutOptions ? (
            <>
              <button
                onClick={outOptionsHandler}
                className={`mt-2 border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2`}
              >
                BOWLED
              </button>
              <button
                onClick={outOptionsHandler}
                className={`mt-2 border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2`}
              >
                CAUGHT
              </button>
              <button
                onClick={outOptionsHandler}
                className={`mt-2 border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2`}
              >
                RUN OUT
              </button>
              <button
                onClick={outOptionsHandler}
                className={`mt-2 border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2`}
              >
                STUMPED
              </button>
              <button
                onClick={outOptionsHandler}
                className={`mt-2 border-emerald-300 min-w-max rounded-lg border-dashed py-2 border-2`}
              >
                HIT WICKET
              </button>
            </>
          ) : (
            ""
          )}
          <p className="ball-count text-center pt-2">
            {`${over}.${ballInOver + 1}`} / {OVERS}
          </p>
        </div>
      </>
    );
  }
  return (
    <div
      onClick={() => handleClick(ballInOver)} // ballInOver is the index
      className={`ball-wrapper my-3 mx-2 border-solid border-4 border-emerald-100 rounded-xl px-4 py-2 ${
        value ? "bg-emerald-100 border-none " : ""
      }`}
    >
      <div className="flex flex-row place-content-between">
        <p className="ball-count">{`${over}.${ballInOver + 1}`}</p>
        {value ? (
          <p className="ball-count">
            {outValue ? `OUT → ${outValue}` : `${value}`}
          </p>
        ) : (
          <p className="ball-count">?</p>
        )}
      </div>
    </div>
  );
}
