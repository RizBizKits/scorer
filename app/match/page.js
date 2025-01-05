"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DM_Sans } from "next/font/google";
import TeamsBanner from "../teamsBanner";
import CurrentOver from "../currentOver";
const STARTSCORE = 200;
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function CricketScorecard() {
  const [activeBatter, setActiveBatter] = useState("Sree");

  const toggleBatter = () => {
    setActiveBatter(activeBatter === "Sree" ? "Maham" : "Sree");
  };

  const buttonHandler = (e) => {
    let event = e.target.innerText;
  };

  return (
    <div className={`min-h-screen bg-gray-950 ${dmSans.className}`}>
      <div className="w-full container mx-auto sm:px-6 lg:px-8 py-8">
        {/* Logo */}
        <div className="flex mb-8">
          <svg
            width="50"
            height="38"
            viewBox="0 0 149 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.7504 0.431865C31.9375 -0.143954 32.7521 -0.143955 32.9392 0.431864L40.1463 22.613C40.2299 22.8705 40.4699 23.0449 40.7407 23.0449H58.2221C58.6728 23.0138 59.1278 22.998 59.5864 22.998C65.3755 22.998 70.5759 25.5185 74.15 29.5221C77.7241 25.5185 82.9245 22.998 88.7136 22.998C89.1722 22.998 89.6272 23.0138 90.0779 23.0449H107.559C107.83 23.0449 108.07 22.8706 108.154 22.613L115.361 0.431864C115.548 -0.143956 116.363 -0.143954 116.55 0.431865L123.757 22.613C123.84 22.8705 124.08 23.0449 124.351 23.0449L147.674 23.0449C148.279 23.0449 148.531 23.8197 148.041 24.1755L129.173 37.8843C128.954 38.0434 128.862 38.3255 128.946 38.583L136.153 60.7642C136.34 61.34 135.681 61.8188 135.191 61.463L116.312 47.7467C116.098 47.5912 115.81 47.5873 115.591 47.7368L100.288 58.2298C97.0496 60.6187 93.0465 62.0307 88.7136 62.0307C82.9245 62.0307 77.7241 59.5101 74.15 55.5066C70.5759 59.5101 65.3755 62.0307 59.5864 62.0307C55.2533 62.0307 51.2501 60.6186 48.0117 58.2295L32.7086 47.7368C32.4905 47.5873 32.2018 47.5912 31.9878 47.7467L13.109 61.463C12.6192 61.8188 11.9601 61.34 12.1472 60.7642L19.3543 38.583C19.438 38.3255 19.3463 38.0434 19.1273 37.8843L0.258832 24.1755C-0.23099 23.8197 0.0207492 23.0449 0.626195 23.0449L23.9488 23.0449C24.2196 23.0449 24.4596 22.8705 24.5433 22.613L31.7504 0.431865ZM50.6415 41.701C50.6415 46.6412 54.6463 50.646 59.5865 50.646C64.5267 50.646 68.5315 46.6412 68.5315 41.701C68.5315 36.7609 64.5267 32.756 59.5865 32.756C54.6463 32.756 50.6415 36.7609 50.6415 41.701ZM88.7135 50.646C93.6537 50.646 97.6585 46.6412 97.6585 41.701C97.6585 36.7609 93.6537 32.756 88.7135 32.756C83.7733 32.756 79.7685 36.7609 79.7685 41.701C79.7685 46.6412 83.7733 50.646 88.7135 50.646ZM15.5005 65.9993C14.8102 65.9993 14.2505 66.559 14.2505 67.2493V86.3831C14.2505 87.0735 14.8102 87.6331 15.5005 87.6331H93.0355L15.3868 94.7269C14.7432 94.7857 14.2505 95.3254 14.2505 95.9717V111.174C14.2505 111.865 14.8102 112.424 15.5005 112.424H132.746C133.437 112.424 133.996 111.865 133.996 111.174V86.3831V85.2605V67.2493C133.996 66.559 133.437 65.9993 132.746 65.9993H15.5005Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="w-full bg-gray-950 rounded-lg overflow-hidden">
          <div className=" space-y-4 sm:space-y-6">
            <TeamsBanner />
            <CurrentOver />

            {/* Ball Types */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 border border-gray-800 rounded-lg p-3 sm:p-4 lg:p-6 bg-gray-900">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                <Button
                  onClick={buttonHandler}
                  variant="outline"
                  size="sm"
                  className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  3
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  4
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  5
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  6
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  0
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  Byes
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  Leg Byes
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  Wide
                </Button>
              </div>
            </div>

            {/* Dismissal Types */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 border border-gray-800 rounded-lg p-3 sm:p-4 lg:p-6 bg-gray-900">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
              >
                Bowled
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
              >
                Stumped
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
              >
                Hit Wicket
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full col-span-2 text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
              >
                Caught
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-sm sm:text-base lg:text-lg xl:text-xl py-3 sm:py-4 lg:py-5 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
              >
                Run Out
              </Button>
            </div>

            {/* Match Stats */}
            <div className="flex justify-between text-xs sm:text-base lg:text-lg py-3 px-3 sm:py-4 sm:px-4 lg:py-6 lg:px-6 border border-gray-800 rounded-lg bg-gray-900">
              <div className="text-center">
                <div className="font-bold text-lg sm:text-2xl lg:text-4xl text-yellow-500">
                  8
                </div>
                <div className="text-gray-400">Pair</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg sm:text-2xl lg:text-4xl text-yellow-500">
                  {STARTSCORE}
                </div>
                <div className="text-gray-400">Total</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg sm:text-2xl lg:text-4xl text-yellow-500">
                  3
                </div>
                <div className="text-gray-400">Batter</div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="flex justify-between text-xs sm:text-base lg:text-lg bg-gray-900 p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-800 text-gray-100">
              <div>W</div>
              <div>0</div>
              <div>4(LB)</div>
              <div>1</div>
              <div>6</div>
              <div>0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
