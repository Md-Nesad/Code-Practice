import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreament, increament } from "./CounterSlice";

export function Counter() {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increament())}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decreament())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
