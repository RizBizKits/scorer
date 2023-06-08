export default function Ticker(over, totalOvers) {
  return (
    <div className="flex flex-row place-content-between mx-2">
      <p className="ball-count">
        Over {over} of {totalOvers}
      </p>
      <p className="ball-count">Total: 230</p>
    </div>
  );
}
