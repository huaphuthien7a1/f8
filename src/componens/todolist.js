import React, { useState } from "react";

const ToDoList = () => {
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });
  const [job, setJob] = useState("");
  const handleAdd = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      //save to localstogare
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  return (
    <div style={{ padding: "32px" }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={() => handleAdd()}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
