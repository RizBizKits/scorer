import Button from "@/components/button";
import ToggleButton from "@/components/toggleButton";

import { useState } from "react";

export default function UserBox({ title }) {
  const [accordianActive, setaccordianActive] = useState(false);

  return (
    <div className="team-wrapper flex flex-col">
      <p className="text-left mb-1">{title}</p>
      <div className="teamA-wrapper mb-2 border-solid border-2 border-black rounded-lg px-2 py-2">
        <div className="mb-4">
          <label>Name</label>
          <input
            name="teamA"
            type="text"
            className="block w-full border-slate-500 border-solid border-2 rounded-lg py-1 px-2"
            placeholder="Cavaliers & Carrington CC"
          />
        </div>
        <div className="accordian-wrapper flex flex-row place-content-between">
          <p>Tap to add players</p>
          <ToggleButton onChange={(value) => setaccordianActive(value)} />
        </div>
        {accordianActive && (
          <>
            <div className="mb-2">
              <label>Player 1</label>
              <input
                name="teamA"
                type="text"
                className="block w-full border-slate-500 border-solid border-2 rounded-lg py-1"
              />
            </div>
            <div className="mb-2">
              <label>Player 2</label>
              <input
                name="teamA"
                type="text"
                className="block w-full border-slate-500 border-solid border-2 rounded-lg py-1"
              />
            </div>
            <div className="mb-2">
              <label>Player 3</label>
              <input
                name="teamA"
                type="text"
                className="block w-full border-slate-500 border-solid border-2 rounded-lg py-1"
              />
            </div>
            <div className="mb-2">
              <label>Player 4</label>
              <input
                name="teamA"
                type="text"
                className="block w-full border-slate-500 border-solid border-2 rounded-lg py-1"
              />
            </div>
            <div className="mb-2">
              <label>Player 5</label>
              <input
                name="teamA"
                type="text"
                className="block w-full border-slate-500 border-solid border-2 rounded-lg py-1"
              />
            </div>
            <div className="mb-2">
              <label>Player 6</label>
              <input
                name="teamA"
                type="text"
                className="block w-full border-slate-500 border-solid border-2 rounded-lg py-1"
              />
            </div>
            <div className="mb-2">
              <label>Player 7</label>
              <input
                name="teamA"
                type="text"
                className="block w-full border-slate-500 border-solid border-2 rounded-lg py-1"
              />
            </div>
            <div className="mb-2">
              <label>Player 8</label>
              <input
                name="teamA"
                type="text"
                className="block w-full border-slate-500 border-solid border-2 rounded-lg py-1"
              />
            </div>
          </>
        )}
      </div>
      <Button>Confirm Team A</Button>
    </div>
  );
}
