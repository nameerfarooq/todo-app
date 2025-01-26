import { useState } from "react";

const CounterButton = ({externalValue}) => {
  const [counter, setcounter] = useState(0);

  return (
    <div
      onClick={() => {
        setcounter(counter + 1);
      }}
      className="rounded-md py-2 px-4 bg-amber-950 text-white w-max cursor-pointer"
    >
      <button>{counter}</button>
      <h2>{externalValue}</h2>
    </div>
  );
};

export default CounterButton;
