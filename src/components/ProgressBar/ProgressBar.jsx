import { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Progress Bar</h2>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#3b82f6",
            height: "25px",
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>
      <button onClick={increaseProgress} style={{ margin: "5px" }}>
        Increase
      </button>
      <button onClick={decreaseProgress} style={{ margin: "5px" }}>
        Decrease
      </button>
      <p>{progress}%</p>
    </div>
  );
}

export default ProgressBar;
