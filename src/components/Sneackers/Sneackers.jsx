import React from "react";
import SneackersInfo from "../SneackersInfo/SneackersInfo";
import SneackersList from "../SneackersLIst/SneackersList";

function Sneackers() {
  return (
    <div className="flex gap-24 flex-col lg:flex-row justify-between items-center my-12">
      <SneackersList />
      <SneackersInfo />
    </div>
  );
}

export default Sneackers;
