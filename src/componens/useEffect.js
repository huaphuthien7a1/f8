import React, { useEffect, useState } from "react";
const tabs = ["posts", "comments", "albums"];
const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  //useEffect(callback)
  //-goi callback moi khi component re-render
  //-goi callback sau khi component them element vao DOM (update DOM)
  //useEffect(callback,[])
  //- chi goi callback 1 lan khi component Mounted
  //useEffect(callback,[deps])
  //-callabck dduojc goi alij moi khi deps thay doi
  //1. callback luon duoc goi sau khi component mounted
  useEffect(() => {
    console.log("Mounted");
    document.title = title;
  });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((pos) => {
        console.log(pos);
        setPosts(pos);
      });
  }, [type]);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
        >
          {tab}
        </button>
      ))}
      <br />
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
};
const UseEffect = () => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: "32px" }}>
      <h1>Use Effect</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
};
export default UseEffect;
