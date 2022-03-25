import { useCallback, useState } from "react";
const Content = ({ onIncrease }) => {
  console.log("re-render");
  return (
    <>
      <button onClick={onIncrease}>Click me</button>
    </>
  );
};
const UseCallback = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div style={{ padding: "32px" }}>
      <h1>{count}</h1>
      <Content onIncrease={handleIncrease} />
    </div>
  );
};
export default UseCallback;
