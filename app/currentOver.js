"use client";

import { useState } from "react";

export default function CurrentOver() {
  const [activeBatter, setActiveBatter] = useState("Sree");

  const toggleBatter = () => {
    setActiveBatter(activeBatter === "Sree" ? "Maham" : "Sree");
  };

  return (
    <div className="flex justify-between items-center py-3 px-3 sm:py-4 sm:px-4 lg:py-6 lg:px-6 border border-gray-800 rounded-lg bg-gray-900">
      <div className="flex flex-row items-center justify-between grow">
        <div>
          <span className="pairs-counter text-xs sm:text-base lg:text-lg text-gray-400 mb-1 lg:mb-2">
            Pair 1 of 4
          </span>

          <div className="batter-selector flex items-center space-x-2 lg:space-x-3">
            <div className="relative w-12 h-6 sm:w-16 sm:h-8 lg:w-20 lg:h-10">
              <div
                onClick={toggleBatter}
                className={`absolute left-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full cursor-pointer transition-all duration-300 ${
                  activeBatter === "Sree"
                    ? "bg-gray-700 hover:bg-gray-600 z-10 transform translate-x-0"
                    : "bg-yellow-500 border-4 border-yellow-300 z-20 transform translate-x-full"
                }`}
              ></div>
              <div
                onClick={toggleBatter}
                className={`absolute right-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full cursor-pointer transition-all duration-300 ${
                  activeBatter === "Sree"
                    ? "bg-yellow-500 border-4 border-yellow-300 z-20 transform translate-x-0"
                    : "bg-gray-700 hover:bg-gray-600 z-10 transform -translate-x-full"
                }`}
              ></div>
            </div>

            <span className="font-regular text-sm sm:text-lg lg:text-xl text-gray-100 w-12 sm:w-16 lg:w-20 text-left">
              {activeBatter}
            </span>
          </div>
        </div>

        {/* <div className="overs-counter text-xl sm:text-2xl lg:text-4xl font-bold text-yellow-500">
          3.2 / 16
        </div> */}

        <div className="bowler-selector flex flex-col items-center">
          <span className="text-xs sm:text-base lg:text-lg text-gray-400 mb-1 lg:mb-2">
            Bowler A
          </span>
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-yellow-500 rounded-full"></div>
            <span className="font-regular text-sm sm:text-lg lg:text-xl text-gray-100">
              Alvena
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
