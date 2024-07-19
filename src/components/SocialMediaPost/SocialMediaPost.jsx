import { useState } from "react";

function SocialMediaPost() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
        border: "1px solid #ccc",
        padding: "20px",
      }}
    >
      <h2>Social Media Post</h2>
      <p>
        GM kompaniyasi jentrani o'rniga lasetti ishlab chiqarishni boshlamoqchi
      </p>
      <div>
        <button onClick={handleLike} style={{ margin: "5px" }}>
          Like ({likes})
        </button>
        <button onClick={handleDislike} style={{ margin: "5px" }}>
          Dislike ({dislikes})
        </button>
      </div>
    </div>
  );
}

export default SocialMediaPost;
