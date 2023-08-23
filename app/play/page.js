"use client";

import useStorage from "@/utils/useStorage";
import { useState } from "react";
import Button from "@/components/button";
import ToggleButton from "@/components/toggleButton";
import UserBox from "@/components/userBox";
import Ball from "@/components/ball";
import Over from "@/components/over";
import Ticker from "@/components/ticker";
import Link from "next/link";

export default function Page() {
  const OVERS = 16;
  let TOTAL = 0;
  const [mD, sD] = useStorage();
  const [accordianActive1, setaccordianActive1] = useState(false);
  const [accordianActive2, setaccordianActive2] = useState(false);
  const [data, setData] = useState([0]);

  const updateScoreInOver = (index, scoreData) => {
    // We clone the current state
    const tempData = [...data];
    // We update the right index
    tempData[index] = scoreData;
    // This is now the new state
    setData(tempData);
  };

  // sD({teamA})

  // {accordianActive ? "↑" : "↓"}
  return (
    <div>
      <div className="header flex flex-col my-4 items-center">
        <Link href="/">
          <img src="/logo-sm.svg" className="block logo w-16 " />
        </Link>
      </div>
      {/* <p className="text-4xl my-4 max-w-screen-xl mx-2">SCORCERER</p> */}
      {mD ? (
        <>
          {/* <div className="max-w-screen-xl mx-auto">
            <div className="mx-2">
              <div className="mb-4">
                <button
                  onClick={() => {
                    localStorage.clear();
                    window.dispatchEvent(new Event("storage"));
                  }}
                  className="border-solid border-2 border-black rounded-lg px-4 py-2 my-2 mx-2"
                >
                  x
                </button>
                <p className="text-xl">Who is playing?</p>
                <p>
                  Start by entering details about the teams playing this match.
                  Then, pick who has won the toss.
                </p>
              </div>
              <UserBox title={"Team A"}></UserBox>

              <div className="flex justify-center my-1">
                <p className="text-md">vs.</p>
              </div>

              <UserBox title={"Team B"}></UserBox>

              <div className="flex flex-col justify-center my-8 text-lg">
                <div className="flex flex-row justify-center mb-1">
                  <select
                    id="teams"
                    name="teams"
                    className="mr-2 border-solid border-2 border-black rounded-lg pr-4 py-1"
                  >
                    <option value="SelectTeamA">Team A</option>
                    <option value="SelectTeamB">Team B</option>
                  </select>
                  <p className="self-center">won the toss</p>
                </div>
                <div className="flex flex-row justify-center">
                  <p className="self-center">and have elected to</p>
                  <select
                    id="tossPick"
                    name="tossPick"
                    className="mx-2 border-solid border-2 border-black rounded-lg pr-4 py-1"
                  >
                    <option value="tossBat">Bat</option>
                    <option value="tossBall">Ball</option>
                  </select>{" "}
                  <p className="self-center">first</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="results-wrapper max-w-screen-xl mx-auto h-[calc(100vh-80px)]">
            <div className="over-wrapper h-full flex flex-col">
              <p className="text-xl my-2 mx-2">
                Cavaliers & Carrington CC Innings
              </p>
              <div className="flex flex-row snap-x snap-mandatory w-full overflow-x-auto relative grow">
                {[...Array(OVERS).keys()].map((i) => (
                  <div className="snap-center flex flex-col" key={i}>
                    <div className="flex flex-row place-content-between mx-2">
                      <p className="ball-count">
                        Over {i + 1} of {OVERS}
                      </p>
                      <p className="ball-count">
                        Pair {Math.ceil(((i + 1) * 4) / OVERS)} of 4
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <Over
                        count={i}
                        key={i}
                        overScore={(e) => {
                          updateScoreInOver(i, e);
                        }}
                      ></Over>
                    </div>
                    <div className="flex flew-row justify-center items-center mx-2">
                      <div>
                        <div className="flex flex-row place-content-center gap-3">
                          <p className="text-center text-md">
                            This Over: {data[i] ?? 0}
                          </p>
                          <p className="text-center text-md">
                            This Pair:{" "}
                            {data
                              .slice(
                                (Math.ceil(((i + 1) * 4) / OVERS) - 1) * 4,
                                i + 1
                              )
                              .reduce((total, item) => total + item, 0)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>{" "}
              <div className="py-2">
                <p className="text-center text-lg">
                  Total: {data.reduce((total, item) => total + item)}
                </p>
              </div>
              {/* <div className="flex">
                <div className="py-2 items-end">
                  <p className="text-center text-lg">
                    Total: {data.reduce((total, item) => total + item)}
                  </p>
                </div>
              </div> */}
            </div>

            {/* <div className="flex flew-row place-content-between items-center mx-2">
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
            </div> */}
          </div>
        </>
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
