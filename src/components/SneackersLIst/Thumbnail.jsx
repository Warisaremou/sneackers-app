import React from "react";
import { useState } from "react";

function Thumbnail({
  name,
  thumbnailCover,
  cover,
  isPictureActive,
  setIsPictureActive,
}) {
  const showActivePicture = () => {
    console.log(cover);
    setIsClicked(true);
    setIsPictureActive(cover);
  };

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <img
        src={thumbnailCover}
        alt={name}
        className={`rounded-lg cursor-pointer hover:opacity-30 duration-300 ${
          isClicked ? "opacity-30 border-4 border-orange" : ""
        }`}
        onClick={() => showActivePicture()}
      />
    </div>
  );
}

export default Thumbnail;
