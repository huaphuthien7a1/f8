import React, { useState, useEffect } from "react";
// cleanup funciton luon duoc goi khi callback duoc goi
const Content = () => {
  const [countdown, setCountdown] = useState(180);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
      console.log("countdown.........");
    }, 1000);
    return () => {
      clearInterval(timerId);
      console.log("clean interval");
    };
  }, []);
  return (
    <div style={{ padding: 30 }}>
      <h1>timer function component</h1>
      <h3>{countdown}</h3>
    </div>
  );
};

const UseEffectWithTimerFunctionComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Content />}
    </div>
  );
};

export default UseEffectWithTimerFunctionComponent;
