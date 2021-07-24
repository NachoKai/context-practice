import { useState, createContext } from "react";
import "./App.css";
import Component1 from "./components/Component1";

export const CountContext = createContext(0);

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div className="App">
        <Component1 />
        <div className="buttons">
          <button className="button" onClick={() => setCount(count - 1)}>
            -
          </button>
          <button className="button" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </CountContext.Provider>
  );
}
