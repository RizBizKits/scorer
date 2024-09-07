import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DM_Sans } from "next/font/google";

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

  return (
    <div className={`min-h-screen bg-gray-950 ${dmSans.className}`}>
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
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
          <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            {/* Teams */}
            <div className="space-y-3 border border-gray-800 rounded-lg p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between bg-gray-900 p-2 sm:p-3 lg:p-4 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-yellow-500 rounded"></div>
                  <span className="font-semibold text-sm sm:text-lg lg:text-xl text-gray-100">
                    Cavaliers and Carrington
                  </span>
                </div>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-500"
                  viewBox="0 0 463.1 463.1"
                  fill="currentColor"
                >
                  <path d="M460.7,27.044L460.7,27.044l-26.1-24.9c-3-2.8-7.6-2.8-10.5,0.1l-133,133.4c-4.8,4.9-11.7,7.8-18.3,7.8h-36 c-2,0-3.9,0.8-5.3,2.2L8,369.744c-5.1,4.4-8,10.7-8,17.4s2.9,13,8,17.4l52,52.1c4.1,4.1,9.9,6.4,16.3,6.4s12.7-2.4,16.7-6.4 c81.1-78.9,223.6-223,225-224.5c1.4-1.4,2.2-3.3,2.2-5.3v-37.3c0-5.4,1.1-13,6.5-18.4l134.2-133.4c1.4-1.4,2.2-3.4,2.2-5.4 C463,30.344,462.1,28.444,460.7,27.044z M75.1,447.944c-1.4-0.1-3.2-0.6-4.6-2l-52.1-52.3l0,0c-0.2-0.2-0.3-0.3-0.5-0.5 c-1.4-1.1-2.3-2.6-2.7-4.2h59.9V447.944z M24.9,374.044l215-215.6H263l-63.1,94.9l-120.3,120.7H24.9z M305.1,223.844 c-17.7,17.9-138.6,140-214.9,214.5v-53.8l120.3-120.6l94.6-63.3V223.844z M316,160.544c-5.6,5.6-9.1,13.1-10.4,21.7l-72.9,48.7 l48.8-73.4c7.6-1.7,14.6-5.7,20.2-11.3l127.8-128.2l15.2,14.5L316,160.544z" />
                </svg>
              </div>
              <div className="flex items-center justify-between bg-gray-900 p-2 sm:p-3 lg:p-4 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-yellow-500 rounded"></div>
                  <span className="font-semibold text-sm sm:text-lg lg:text-xl text-gray-100">
                    Wollaton FC
                  </span>
                </div>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-500"
                  viewBox="0 0 122.88 122.88"
                  fill="currentColor"
                >
                  <path d="M44.35,9.63c-0.05,0.25-0.13,0.49-0.24,0.73l-1.43,3.15c-0.78,1.73-2.82,2.5-4.55,1.72c-0.96-0.43-1.62-1.24-1.89-2.18 c-4.95,2.58-9.46,5.91-13.37,9.82C13,32.74,6.89,46.38,6.89,61.44c0,15.06,6.1,28.7,15.98,38.57c0.42,0.42,0.85,0.84,1.28,1.24 c0.25-0.14,0.53-0.24,0.82-0.31c1.84-0.45,3.71,0.67,4.16,2.52c0.12,0.48,0.28,0.97,0.46,1.47c0.14,0.38,0.3,0.76,0.47,1.14 c1.83,1.29,3.73,2.46,5.71,3.52c-5.99-15.14-7.76-35.83-4.73-55.59c2.66-17.37,9.02-34.14,19.44-46 C48.39,8.42,46.35,8.97,44.35,9.63L44.35,9.63z M17.53,83.67c0-1.9,1.54-3.45,3.45-3.45s3.45,1.54,3.45,3.45 c0,0.9,0.08,1.97,0.21,2.98c0.13,1.03,0.33,2.07,0.55,2.93c0.48,1.84-0.61,3.72-2.45,4.2c-1.84,0.48-3.72-0.61-4.2-2.45 c-0.29-1.1-0.54-2.44-0.72-3.79C17.64,86.12,17.53,84.74,17.53,83.67L17.53,83.67z M16.32,63.05c0.17-1.89,1.84-3.28,3.73-3.11 c1.89,0.17,3.28,1.84,3.11,3.73c-0.04,0.43,0,1.48,0.07,2.7c0.09,1.43,0.24,3,0.38,4.06c0.26,1.88-1.05,3.62-2.93,3.88 c-1.88,0.26-3.62-1.05-3.88-2.93c-0.17-1.24-0.34-3.01-0.44-4.6C16.27,65.3,16.24,63.89,16.32,63.05L16.32,63.05z M19.83,41.33 c0.52-1.83,2.43-2.89,4.25-2.37c1.83,0.52,2.89,2.43,2.37,4.26c-0.14,0.5-0.35,1.49-0.56,2.58l-0.02,0.11 c-0.25,1.32-0.51,2.84-0.66,3.89c-0.27,1.88-2.02,3.18-3.9,2.91c-1.88-0.27-3.18-2.02-2.91-3.9c0.15-1.02,0.43-2.64,0.72-4.18 l0.02-0.12C19.39,43.19,19.64,41.99,19.83,41.33L19.83,41.33z M27.58,22.03c0.78-1.73,2.82-2.5,4.55-1.72s2.5,2.82,1.72,4.55 l-2.62,5.77c-0.78,1.73-2.82,2.5-4.55,1.72c-1.73-0.78-2.5-2.82-1.72-4.55L27.58,22.03L27.58,22.03z M53.33,115.39 c0.26-1.41,1.39-2.56,2.89-2.78c1.88-0.27,3.63,1.03,3.9,2.91c0.02,0.15,0.05,0.3,0.08,0.45c0.41,0.01,0.83,0.01,1.24,0.01 c15.06,0,28.7-6.1,38.57-15.98c9.87-9.87,15.98-23.51,15.98-38.57c0-15.06-6.11-28.7-15.98-38.57c-7-7-15.9-12.11-25.86-14.49 l-0.49,0.85c-0.94,1.64-3.04,2.21-4.69,1.27c-1.2-0.69-1.83-2-1.71-3.3C65.37,7,63.45,6.9,61.5,6.89 C48.51,17.38,40.81,35.73,37.86,55.02c-3.34,21.81-0.61,44.59,7.39,58.53C47.86,114.35,50.56,114.97,53.33,115.39L53.33,115.39z M44.68,98.45c-0.27-1.88,1.03-3.63,2.91-3.9c1.88-0.27,3.63,1.03,3.9,2.91c0.11,0.77,0.32,1.58,0.57,2.38 c0.29,0.92,0.68,1.89,1.09,2.8c0.79,1.72,0.04,3.77-1.68,4.56c-1.72,0.79-3.77,0.04-4.56-1.68c-0.5-1.08-0.98-2.32-1.39-3.61 C45.13,100.71,44.83,99.52,44.68,98.45L44.68,98.45z M41.87,76.65c0.18-1.89,1.86-3.27,3.74-3.1c1.89,0.18,3.27,1.86,3.1,3.74 c-0.08,0.84-0.1,1.92-0.07,3.01c0.03,1.05,0.13,2.1,0.27,2.96c0.3,1.87-0.97,3.64-2.84,3.94c-1.87,0.3-3.64-0.97-3.94-2.84 c-0.19-1.13-0.31-2.49-0.35-3.84C41.73,79.16,41.76,77.78,41.87,76.65L41.87,76.65z M42.63,55.99c0.36-1.87,2.16-3.09,4.02-2.73 c1.87,0.36,3.09,2.16,2.73,4.02c-0.09,0.47-0.16,1.49-0.2,2.66c-0.05,1.44-0.05,3.03-0.01,4.12c0.07,1.9-1.4,3.49-3.3,3.57 s-3.49-1.4-3.57-3.3c-0.05-1.23-0.04-3.01,0.01-4.6C42.38,58.2,42.48,56.78,42.63,55.99L42.63,55.99z M48.24,34.73 c0.69-1.77,2.69-2.64,4.46-1.95c1.77,0.69,2.64,2.69,1.95,4.46c-0.19,0.49-0.5,1.45-0.81,2.52c-0.4,1.37-0.82,2.9-1.07,3.91 c-0.45,1.84-2.32,2.97-4.16,2.52c-1.84-0.45-2.97-2.32-2.52-4.16c0.27-1.07,0.72-2.72,1.15-4.21 C47.62,36.54,47.99,35.37,48.24,34.73L48.24,34.73z M57.82,16.27c0.94-1.64,3.04-2.21,4.69-1.27s2.21,3.04,1.27,4.69l-3.17,5.49 c-0.94,1.64-3.04,2.21-4.69,1.27s-2.21-3.04-1.27-4.69L57.82,16.27L57.82,16.27z M42.21,119.81c-0.2-0.05-0.4-0.11-0.6-0.2 c-8.99-3.06-17.04-8.15-23.61-14.72C6.88,93.77,0,78.41,0,61.44C0,44.48,6.88,29.11,18,18C29.11,6.88,44.48,0,61.44,0 c16.96,0,32.33,6.88,43.44,18c11.12,11.12,18,26.48,18,43.44s-6.88,32.33-18,43.44c-11.12,11.12-26.48,18-43.44,18 C54.72,122.88,48.26,121.8,42.21,119.81L42.21,119.81z" />
                </svg>
              </div>
            </div>

            {/* Current Over */}
            <div className="flex justify-between items-center py-3 px-3 sm:py-4 sm:px-4 lg:py-6 lg:px-6 border border-gray-800 rounded-lg bg-gray-900">
              <div className="flex flex-col items-center">
                <span className="text-xs sm:text-base lg:text-lg text-gray-400 mb-1 lg:mb-2">
                  1 of 4
                </span>
                <div className="flex items-center space-x-2 lg:space-x-3">
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
                  <span className="font-semibold text-sm sm:text-lg lg:text-xl text-gray-100 w-12 sm:w-16 lg:w-20 text-left">
                    {activeBatter}
                  </span>
                </div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-yellow-500">
                3.2 / 16
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs sm:text-base lg:text-lg text-gray-400 mb-1 lg:mb-2">
                  Bowler A
                </span>
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-yellow-500 rounded-full"></div>
                  <span className="font-semibold text-sm sm:text-lg lg:text-xl text-gray-100">
                    Alvena
                  </span>
                </div>
              </div>
            </div>

            {/* Ball Types */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 border border-gray-800 rounded-lg p-3 sm:p-4 lg:p-6 bg-gray-900">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  3
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  4
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  5
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  6
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  0
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  BYES
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  LEG BYES
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
                >
                  WIDE
                </Button>
              </div>
            </div>

            {/* Dismissal Types */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 border border-gray-800 rounded-lg p-3 sm:p-4 lg:p-6 bg-gray-900">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
              >
                BOWLED
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
              >
                STUMPED
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
              >
                HIT WICKET
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full col-span-2 text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
              >
                CAUGHT
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs sm:text-sm lg:text-base lg:py-6 bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-yellow-500"
              >
                RUN OUT
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
                  240
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
