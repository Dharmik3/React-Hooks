import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const inputElement = useRef("");
  const prevNum = useRef("");
  console.log(inputElement);
  console.log(prevNum);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleReset = () => {
    setName("");
    inputElement.current.focus();
  };
  useEffect(() => {
    prevNum.current = number;
  }, [number]);

  return (
    <>
      <h1>Example of useref usage</h1>
      <input
        type="text"
        ref={inputElement}
        autoComplete="flase"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleReset}>Reset</button>
      <h2>Name: {name}</h2>

      <h2>Random num:{number}</h2>
      <button onClick={(e) => setNumber(Math.floor(Math.random() * 100))}>
        Generate Num
      </button>
      <h3>Previous number: {prevNum.current}</h3>
    </>
  );
};

export default UseRef;
