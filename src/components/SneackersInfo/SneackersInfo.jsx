import React from "react";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
// import { AllSneackersList } from "../../data/AllSneackersList";

function SneackersInfo({ sneackerDetails, setSneackerDetails, isPictureActive, setIsPictureActive }) {
  const [sneackerNumber, setNumber] = useState(0);

  function addToCart() {
    setNumber((current) => current + 1);
  }

  return (
    <div className="py-4">
      <h3 className="text-pure-orange font-bold text-md md:text-lg">
        SNEACKER COMPANY
      </h3>
      <h4 className="text-xl md:text-4xl font-bold my-4">
        Fall Limited Edition Sneackers
      </h4>
      <p className="text-gray-400 text-md my-4">
        These low-profile sneackers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-content">
        <div className="flex items-center mb-0 md:mb-4">
          <h3 className="text-2xl">
            {/* {sneackerDetails.map((sneacker) => sneacker.price)} */}$125.00
          </h3>
          <p>
            <span className="text-pure-orange bg-orange text-base mx-4 bg-orange-300 p-2 rounded-xl">
              50%
            </span>
          </p>
        </div>
        <h4 className="text-xl text-pure-gray line-through">$250.00</h4>
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="font-bold flex justify-center items-center bg-gray-100 md:mr-4 py-4 px-6 rounded-xl">
          <IoIosRemove
            className={`text-pure-orange text-3xl cursor-pointer ${
              sneackerNumber === 0 ? "text-orange" : ""
            }`}
            onClick={() =>
              setNumber(
                sneackerNumber === 0 ? (sneackerNumber = 0) : sneackerNumber - 1
              )
            }
          />
          <span className="px-12">{sneackerNumber}</span>
          <IoIosAdd
            className="incrementation-btn"
            onClick={() => setNumber(sneackerNumber + 1)}
          />
        </div>
        {/* Affichage du nombre de commande */}
        {/* <p>{sneackerNumber}</p> */}

        <button className="add-btn">
          <BsBag className="mr-4 text-2xl" onClick={() => addToCart()} /> Add to
          cart
        </button>
      </div>
    </div>
  );
}

export default SneackersInfo;
