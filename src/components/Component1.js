import { useContext } from "react";
import { CountContext } from "../App";
import Component2 from "./Component2";

export default function Component1() {
  const { count } = useContext(CountContext);

  return (
    <div className="child-box-1">
      <Component2 />
      <h1 className="box-header">{count}</h1>
    </div>
  );
}
