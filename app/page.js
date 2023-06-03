"use client";

import useStorage from "@/utils/useStorage";
import { useState } from "react";
import Button from "@/components/button";
import ToggleButton from "@/components/toggleButton";
import UserBox from "@/components/userBox";
import Ball from "@/components/ball";
import Over from "@/components/over";

export default function Page() {
  const OVERS = 16;
  const [mD, sD] = useStorage();
  const [accordianActive1, setaccordianActive1] = useState(false);
  const [accordianActive2, setaccordianActive2] = useState(false);
  // sD({teamA})

  // {accordianActive ? "↑" : "↓"}
  return (
    <div className="h-screen">
      <p className="text-4xl my-4 max-w-screen-xl mx-2">Score101</p>
      {mD ? (
        <>
          <div className="max-w-screen-xl mx-auto">
            <div className="mx-2">
              <div className="mb-4">
                <p className="text-xl">Who's playing?</p>
                <p>
                  Start by entering details about the teams playing this match.
                  Then, pick who's won the toss.
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
          </div>
          <div className="results-wrapper max-w-screen-xl mx-auto">
            <div className="over-wrapper">
              <p className="text-xl my-2 mx-2">
                Cavaliers & Carrington CC Innings
              </p>
              <button
                onClick={() => {
                  localStorage.clear();
                  window.dispatchEvent(new Event("storage"));
                }}
                className="border-solid border-2 border-black rounded-lg px-4 py-2 my-2 mx-2"
              >
                x
              </button>
              <div className="flex flex-row place-content-between mx-2">
                <p className="ball-count">Over 1 of 8</p>
                <p className="ball-count">Total: 230</p>
              </div>
              {/* <div className="ball-wrapper m-2  border-solid border-2 border-black rounded-lg px-2 py-2">
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
              </div> */}
              {[...Array(OVERS).keys()].map((key) => (
                <Over count={key}></Over>
              ))}
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
