import React, { useState, useEffect } from "react";

const ResizeComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h1>resize component</h1>
      {width}
    </div>
  );
};

export default ResizeComponent;
