import { useState } from "react";

export default function ToggleButton({ onChange, defaultValue }) {
  const [toggleActive, settoggleButton] = useState(defaultValue);

  return (
    <button
      onClick={() => {
        settoggleButton(!toggleActive);
        onChange(!toggleActive);
      }}
      className="border-solid border-2 border-slate-500 rounded-lg px-4 py-1"
    >
      {toggleActive ? "↑" : "↓"}
    </button>
  );
}
