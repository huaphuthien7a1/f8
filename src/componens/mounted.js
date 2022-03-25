import React, { useState } from "react";
//mounted vs unmounted
const Content = () => {
  return (
    <div>
      <h1>Content component</h1>
    </div>
  );
};
const Mounted = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: "32px" }}>
      <h1>mounted/unmounted</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
};

export default Mounted;
