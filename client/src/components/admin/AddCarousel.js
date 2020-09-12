import React, { useState } from "react";
import { connect } from "react-redux";
import { addCarousel } from "../../actions/carousel";

const AddCarousel = ({ addCarousel }) => {
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");
  const [img3, setimg3] = useState("");
  const [img4, setimg4] = useState("");
  const [img5, setimg5] = useState("");

  const handleString = (string) => {
    var imageUrl = "https://drive.google.com/uc?export=view&id=";
    var splittedString = string.split("/d/")[1];
    if (splittedString == null) {
      imageUrl = string;
      return imageUrl;
    } else {
      const imageId = splittedString.split("/")[0];
      imageUrl += imageId;
      return imageUrl;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addCarousel({
      carousel: [
        { imageUrl: img1 },
        { imageUrl: img2 },
        { imageUrl: img3 },
        { imageUrl: img4 },
        { imageUrl: img5 },
      ],
    });
  };
  return (
    <div className="add-category container-fluid">
      <form>
        <input
          onChange={(e) => setimg1(handleString(e.target.value))}
          type="text"
          placeholder="Img1"
        />
        <input
          onChange={(e) => setimg2(handleString(e.target.value))}
          type="text"
          placeholder="Img2"
        />
        <input
          onChange={(e) => setimg3(handleString(e.target.value))}
          type="text"
          placeholder="Img3"
        />
        <input
          onChange={(e) => setimg4(handleString(e.target.value))}
          type="text"
          placeholder="Img4"
        />
        <input
          onChange={(e) => setimg5(handleString(e.target.value))}
          type="text"
          placeholder="Img5"
        />

        <button onClick={handleSubmit} type="submit">
          {" "}
          AddCarousel
          <span class="plus"> +</span>{" "}
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addCarousel })(AddCarousel);
