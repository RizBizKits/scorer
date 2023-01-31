export default function Score() {
  return (
    <div className="h-screen">
      <p className="text-2xl my-5 max-w-screen-xl mx-2">Score101</p>
      <div className="results-wrapper max-w-screen-xl mx-auto">
        <div className="over-wrapper">
          <p className="text-xl my-2 mx-2">Innings</p>
          <div className="ball-wrapper m-2  border-solid border-2 border-black rounded-lg px-2 py-2">
            <div className="flex flex-row place-content-between">
              <p className="ball-count">1.0</p>
              <p className="ball-count">OUT → Catch</p>
            </div>
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
        <p className="text-center text-md">Over 1 of 8</p>
        <div className="flex flex-row place-content-center gap-3">
          <p className="text-center text-md">This Over: 10</p>
          <p className="text-center text-md">This Pair: 17</p>
        </div>
        <p className="text-center text-xl">Total: 230</p>
      </div>
    </div>
  );
}
