import { useState } from "react";

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/200/300/?blur",
  ];

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Image Gallery</h2>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            style={{
              width: "150px",
              height: "150px",
              margin: "10px",
              cursor: "pointer",
              borderRadius: "8px",
            }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Image</h3>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "500px", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
