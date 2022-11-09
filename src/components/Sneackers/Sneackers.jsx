import React from "react";
import SneackersInfo from "../SneackersInfo/SneackersInfo";
import SneackersList from "../SneackersLIst/SneackersList";
import { useState } from "react";

function Sneackers({ sneackerDetails, setSneackerDetails }) {
  const [isPictureActive, setIsPictureActive] = useState("");

  const [cart, updateCart] = useState([]);

  return (
    <div className="flex gap-24 flex-col lg:flex-row justify-between items-center my-12">
      <SneackersList
        isPictureActive={isPictureActive}
        setIsPictureActive={setIsPictureActive}
        sneackerDetails={sneackerDetails}
        setSneackerDetails={setSneackerDetails}
      />
      <SneackersInfo
        sisPictureActive={isPictureActive}
        setIsPictureActive={setIsPictureActive}
        sneackerDetails={sneackerDetails}
        setSneackerDetails={setSneackerDetails}
      />
    </div>
  );
}

export default Sneackers;
