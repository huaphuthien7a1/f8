import React, { useState, useEffect, useRef } from "react";

const Content = () => {
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const preCount = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    preCount.current = count;
  }, [count]);
  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect();
    console.log(rect);
  });
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  console.log(count, preCount.current);
  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

const UseRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Content />}
    </div>
  );
};

export default UseRef;
