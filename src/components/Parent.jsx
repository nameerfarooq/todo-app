import React, { useEffect } from "react";
import Child from "./Child";
import { useState } from "react";

const Parent = () => {
  //   const [parentName, setparentName] = useState("Abdullah");
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const [count3, setcount3] = useState(0);
  //   const koibhifunction = (childValue) => {
  //     console.log("I got this value from my child : ", childValue);
  //   };

  useEffect(() => {
    console.log(" I AM USE EFFECT ");
    alert("HELLO ");
  }, [count2, count3]);

  return (
    <div className="bg-green-300 text-black p-5 m-5 flex justify-between items-center">
      <div>
        <h1>Count1 is {count1}</h1>
        <button
          className="bg-white cursor-pointer text-black rounde-md p-3"
          onClick={() => {
            setcount1(count1 + 1);
          }}
        >
          button
        </button>
      </div>
      <div>
        <h1>Count2 is {count2}</h1>
        <button
          className="bg-white cursor-pointer text-black rounde-md p-3"
          onClick={() => {
            setcount2(count2 + 1);
          }}
        >
          button
        </button>
      </div>
      <div>
        <h1>Count3 is {count3}</h1>
        <button
          className="bg-white cursor-pointer text-black rounde-md p-3"
          onClick={() => {
            setcount3(count3 + 1);
          }}
        >
          button
        </button>
      </div>
    </div>
  );
};

export default Parent;

{
  /* <Child parentName={parentName} koibhifunction={koibhifunction} /> */
}
