import { useContext } from "react";
import { CountContext } from "../App";

export default function Component5() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="child-box-5">
      <h1 className="box-header">{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
