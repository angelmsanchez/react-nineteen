import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCountStore } from "./zustand/counter";
import { Counter } from "./components/counter/Counter";

export default function App() {
  const [countLocal, setCount] = useState(0);
  const { increase, reset } = useCountStore();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {countLocal}
        </button>
        <button onClick={increase}>increase</button>
        <button onClick={reset}>reset</button>
        <Counter />
      </div>
    </>
  );
}
