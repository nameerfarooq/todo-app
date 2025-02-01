import React from "react";

const Child = ({ parentName, koibhifunction }) => {
  const buttonClickhogaya = () => {
    const myObj = {
      name: "Abdullah",
      age: 25,
      city: "karachi",
    };
    koibhifunction(myObj);
  };

  return (
    <div className="bg-amber-300 m-5 p-5">
      <h1>I am child component</h1>
      <h1>my parent is {parentName}</h1>
      <button
        className="bg-white cursor-pointer text-black rounde-md p-3"
        onClick={buttonClickhogaya}
      >
        button
      </button>
    </div>
  );
};

export default Child;
