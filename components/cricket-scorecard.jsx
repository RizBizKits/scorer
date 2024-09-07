"'use client'"

import { Star, Triangle } from "lucide-react"

export function CricketScorecard() {
  return (
    (<div
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 space-y-6">
        {/* Teams */}
        <div
          className="space-y-3 border border-neutral-200 border-gray-200 rounded-lg p-4 dark:border-neutral-800">
          <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
              <span className="font-semibold text-lg">Cavaliers and Carrington</span>
            </div>
            <Star className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
              <span className="font-semibold text-lg">Wollaton FC</span>
            </div>
            <Triangle className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Current Over */}
        <div
          className="flex justify-between items-center py-4 px-4 border border-neutral-200 border-gray-200 rounded-lg dark:border-neutral-800">
          <div className="flex items-center space-x-3">
            <span className="text-base text-gray-500">1 of 4</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <span className="font-semibold text-lg">Sree</span>
            </div>
          </div>
          <div className="text-2xl font-bold">3.2 / 16</div>
          <div className="flex items-center space-x-3">
            <span className="text-base text-gray-500">Bowler A</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <span className="font-semibold text-lg">Alvena</span>
            </div>
          </div>
        </div>

        {/* Ball Types */}
        <div
          className="grid grid-cols-4 gap-4 text-base border border-neutral-200 border-gray-200 rounded-lg p-4 dark:border-neutral-800">
          <div className="text-center p-2 bg-gray-50 rounded-lg">0</div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">1</div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">2</div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">3</div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">4</div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">5</div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">6</div>
          <div className="text-center p-2 bg-gray-50 rounded-lg"></div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">BYES</div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">LEG BYES</div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">WIDE</div>
        </div>

        {/* Dismissal Types */}
        <div
          className="grid grid-cols-3 gap-4 text-base border border-neutral-200 border-gray-200 rounded-lg p-4 dark:border-neutral-800">
          <div className="text-center p-2 bg-gray-100 rounded-lg">BOWLED</div>
          <div className="text-center p-2 bg-gray-100 rounded-lg">STUMPED</div>
          <div className="text-center p-2 bg-gray-100 rounded-lg">HIT WICKET</div>
          <div className="col-start-1 col-end-3 text-center p-2 bg-gray-100 rounded-lg">CAUGHT</div>
          <div className="col-start-3 col-end-4 text-center p-2 bg-gray-100 rounded-lg">RUN OUT</div>
        </div>

        {/* Match Stats */}
        <div
          className="flex justify-between text-base py-4 px-4 border border-neutral-200 border-gray-200 rounded-lg dark:border-neutral-800">
          <div className="text-center">
            <div className="font-bold text-2xl">8</div>
            <div className="text-gray-500">Pair</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-2xl">240</div>
            <div className="text-gray-500">Total</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-2xl">3</div>
            <div className="text-gray-500">Batter</div>
          </div>
        </div>

        {/* Additional Stats */}
        <div
          className="flex justify-between text-base bg-gray-50 p-4 rounded-lg border border-neutral-200 border-gray-200 dark:border-neutral-800">
          <div>W</div>
          <div>0</div>
          <div>4(LB)</div>
          <div>1</div>
          <div>6</div>
          <div>0</div>
        </div>
      </div>
    </div>)
  );
}