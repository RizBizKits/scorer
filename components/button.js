export default function Button({ children }) {
  return (
    <button className="border-solid border-2 border-black rounded-lg px-4 py-2 flex flex-row self-end">
      {children}
    </button>
  );
}
