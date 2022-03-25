import React, { useState } from "react";
const courses = [
  { id: 1, name: "HTML,CSS" },
  { id: 2, name: "UX/UI" },
  { id: 3, name: "ReacJS" },
];
const Checkbox = () => {
  const [checked, setChecked] = useState([]);
  const handleSubmit = () => {
    console.log({ ids: checked });
  };
  const handleCheck = (id) => {
    setChecked((pre) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        //uncheck
        return checked.filter((item) => item !== id);
      } else {
        return [...pre, id];
      }
    });
    console.log(checked);
  };
  return (
    <div style={{ padding: "32px" }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={() => handleSubmit()}>Register</button>
    </div>
  );
};

export default Checkbox;
