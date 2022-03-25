import React, { useState, useEffect } from "react";
//cleanup function luôn được gọi trước khi callback được gọi(tru trương hợp component được monnted)
const Content = () => {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
};
const UseEffectWithPreviewAvatar = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Content />}
    </div>
  );
};

export default UseEffectWithPreviewAvatar;
