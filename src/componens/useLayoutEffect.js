import React, { useState, useEffect, useLayoutEffect } from "react"; 
// -- useEffect
//1. cập nhật lại state
//2. cập nhật DOM (mutated)
//3. render lại UI
//4. gọi cleanup nếu deps thay đổi
//5. gọi useEffect callback
// --- useLayoutEffect
//1. cập lại state
//2. cập nhật lại DOM
//3. gọi cleanup nếu deps thay đổi (sync)
//4. gọi useLayoutEffect callback (sync)
//5. render lại UI
const Content = () => {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count > 3) setCount(0);
  }, [count]);
  const handleRun = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <br />
      <button onClick={handleRun}>Run</button>
    </div>
  );
};

const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Content />}
    </div>
  );
};
export default UseLayoutEffect;
