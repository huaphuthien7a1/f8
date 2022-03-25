import React, { useState, useEffect } from "react";
//scrolling
//resize
//clean up funciton luon dc goi truoc khi component unmounted
const tabs = ["posts", "comments", "albums"];
const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        //show
        setShowGoToTop(true);
      } else {
        //hide
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    //cleanup Function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
          <li key={post.id}>{post.body || post.title}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Go To Top
        </button>
      )}
    </div>
  );
};
const ListenDomEvent = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "32px" }}>
      <h1>Use Effect</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
};
export default ListenDomEvent;
