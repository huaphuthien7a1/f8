import React, { useState, useEffect, memo } from "react";
//memo() => higher Order Component (HOC)
const Content = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>click me</button>
    </div>
  );
};
const ReactMemo = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Content />}
    </div>
  );
};

export default memo(ReactMemo);
