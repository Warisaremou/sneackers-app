import React from "react";
import sneacker1 from "../../pictures/image-product-1.jpg";
import Thumbnail from "./Thumbnail";
// import { AllSneackersList } from "../../data/AllSneackersList";
// import { useState } from "react";

function SneackersList({ isPictureActive, setIsPictureActive, sneackerDetails, setSneackerDetails }) {
  return (
    <div>
      <img
        src={isPictureActive ? isPictureActive : sneacker1}
        alt=""
        className="w-fit rounded-xl"
      />
      <div className="grid grid-cols-4 gap-4 lg:gap-6 mt-6">
        {sneackerDetails.map((sneacker) => (
          <Thumbnail
            key={sneacker.id}
            name={sneacker.name}
            thumbnailCover={sneacker.thumbnail}
            cover={sneacker.cover}
            isPictureActive={isPictureActive}
            setIsPictureActive={setIsPictureActive}
          />
        ))}
      </div>
    </div>
  );
}

export default SneackersList;
