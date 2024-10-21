import React, { useState } from "react";

const Car = () => {
  const [car, setCar] = useState("ferrari");

  const changeMessage = () => {
    setCar("Jaguar");
  };

  return (
    <div>
      <h1>{car}</h1>
      <button onClick={changeMessage}>Change</button>
    </div>
  );
};

export default Car;
