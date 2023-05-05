"use client";

import useStorage from "@/utils/useStorage";

export default function Page() {
  const [mD, sD] = useStorage();

  return (
    <div className="h-screen">
      <p className="text-2xl my-4 max-w-screen-xl mx-2">Score101</p>

      {mD ? (
        <div className="results-wrapper max-w-screen-xl mx-auto">
          <div className="over-wrapper">
            <p className="text-xl my-2 mx-2">
              Cavaliers & Carrington CC Innings
            </p>
            <button
              onClick={() => localStorage.clear()}
              className="border-solid border-2 border-black rounded-lg px-4 py-2 my-2 mx-2"
            >
              x
            </button>
            <div className="flex flex-row place-content-between mx-2">
              <p className="ball-count">Over 1 of 8</p>
              <p className="ball-count">Total: 230</p>
            </div>
            <div className="ball-wrapper m-2  border-solid border-2 border-black rounded-lg px-2 py-2">
              <div className="flex flex-row place-content-between">
                <p className="ball-count">1.0</p>
                <p className="ball-count">OUT → Catch</p>
              </div>
              <p className="text-right">Catch by Shazia, Ball by Samiah</p>
            </div>
            <div className="ball-wrapper m-2  border-solid border-2 border-black rounded-lg px-2 py-2">
              <div className="ball-wrapper-cell grid grid-cols-3 gap-1">
                <button className="rounded-lg border-slate-500 border-solid border-2  py-2">
                  1
                </button>
                <button className="rounded-lg border-slate-500 border-solid border-2  py-2">
                  2
                </button>
                <button className="rounded-lg border-slate-500 border-solid border-2  py-2">
                  3
                </button>
                <button className="rounded-lg border-slate-500 border-solid border-2  py-2">
                  4
                </button>
                <button className="rounded-lg border-slate-500 border-solid border-2  py-2">
                  5
                </button>
                <button className="rounded-lg border-slate-500 border-solid border-2  py-2">
                  6
                </button>
                <button className="rounded-lg border-slate-500 border-solid border-2  py-2">
                  NB
                </button>
                <button className="rounded-lg border-slate-500 border-solid border-2  py-2">
                  W
                </button>
                <button className="rounded-lg border-slate-500 border-solid border-2  py-2">
                  OUT
                </button>
              </div>{" "}
              <p className="ball-count text-center">1.1 / 8</p>
            </div>
            <div className="ball-wrapper m-2  border-solid border-2 border-black rounded-lg px-2 py-2">
              <div className="flex flex-row place-content-between">
                <p className="ball-count">1.2</p>
                <p className="ball-count">______</p>
              </div>
            </div>
            <div className="ball-wrapper m-2  border-solid border-2 border-black rounded-lg px-2 py-2">
              <div className="flex flex-row place-content-between">
                <p className="ball-count">1.3</p>
                <p className="ball-count">______</p>
              </div>
            </div>
            <div className="ball-wrapper m-2  border-solid border-2 border-black rounded-lg px-2 py-2">
              <div className="flex flex-row place-content-between">
                <p className="ball-count">1.4</p>
                <p className="ball-count">______</p>
              </div>
            </div>
            <div className="ball-wrapper m-2  border-solid border-2 border-black rounded-lg px-2 py-2">
              <div className="flex flex-row place-content-between">
                <p className="ball-count">1.5</p>
                <p className="ball-count">______</p>
              </div>
            </div>
            <div className="ball-wrapper m-2  border-solid border-2 border-black rounded-lg px-2 py-2">
              <div className="flex flex-row place-content-between">
                <p className="ball-count">1.6</p>
                <p className="ball-count">______</p>
              </div>
            </div>
          </div>
          <div className="flex flew-row place-content-between items-center mx-2">
            <button className="border-solid border-2 border-black rounded-lg px-4 py-2">
              {" "}
              ←{" "}
            </button>
            <div>
              <p className="text-center text-md">Batting Pair 1 of 4</p>
              <div className="flex flex-row place-content-center gap-3">
                <p className="text-center text-md">This Over: 10</p>
                <p className="text-center text-md">This Pair: 17</p>
              </div>
            </div>
            <button className="border-solid border-2 border-black rounded-lg px-4 py-2">
              →{" "}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="my-2 mx-2">
            <p>Welcome to your Scorer app</p>
            <button
              onClick={() => sD("matchData")}
              className="border-solid border-2 border-black rounded-lg px-2 py-2 my-2"
            >
              Start match
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
