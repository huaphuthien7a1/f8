import React, { useState, useEffect } from "react";
const lessions = [
  {
    id: 1,
    name: "ReactJS la gi? tai sao nen hoc reactjs",
  },
  {
    id: 2,
    name: "SPA/MPA la gi?",
  },
  {
    id: 3,
    name: "Arrow Function",
  },
];
const Content = () => {
  const [lessionId, setLessionId] = useState(1);
  const handleCommnet = (e) => {
    console.log(e);
  };
  useEffect(() => {
    window.addEventListener(`lession-${lessionId}`, handleCommnet);
    return () => {
      window.removeEventListener(`lession-${lessionId}`, handleCommnet);
    };
  }, [lessionId]);

  return (
    <div>
      <ul>
        {lessions.map((lession) => (
          <li
            onClick={() => setLessionId(lession.id)}
            key={lession.id}
            style={{ color: lessionId === lession.id ? "red" : "#333" }}
          >
            {lession.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
const FakeChatApp = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 32 }}>
      <h1>fake chat app</h1>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Content />}
    </div>
  );
};

export default FakeChatApp;
