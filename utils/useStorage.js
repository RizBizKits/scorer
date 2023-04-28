import { useSyncExternalStore } from "react";

export default function useStorage() {
  const matchData = useSyncExternalStore(subscribe, getServerSnapshot);

  return [
    matchData,
    function setMatchData(data) {
      //getting it from UI to put into localStorage
      // for setting the val, you want to update localStorage directly
      // do json stringy to get string ver of data then u wanna do localS.setItem
      // to make sure evrything is remmebere, u want to trigger the sotrage event manually so then that's gonna update match data
      const x = JSON.stringify(data);
      if (x) {
        console.log(x);
        return localStorage.setItem("storage", x);
      }
    },
  ];
}

function subscribe(callback) {
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("storage", callback);
  };
}

function getServerSnapshot() {
  const entry = localStorage.getItem("storage");
  if (entry) {
    return JSON.parse(entry);
  }
  return null;
}
