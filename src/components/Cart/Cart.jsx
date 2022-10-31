import React from "react";
import { useState } from "react";
// import { BsCart3 } from "react-icons/bs";
import { BsBag } from "react-icons/bs";

function Cart() {
  const [openCart, setIsOpen] = useState(false);

  const showCart = (e) => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="cart relative">
      <BsBag
        className={`cursor-pointer text-xl ${
          openCart ? "text-pure-orange" : null
        }`}
        onClick={showCart}
      />
      <div
        className={
          openCart
            ? "absolute  rounded-lg py-4 bg-white text-md top-12 -left-24 w-max"
            : "hidden"
        }
      >
        <h4 className="text-center border-b-2 pb-2">Cart</h4>
        <div className="pt-4 px-6">Your cart is empty.</div>
      </div>
    </div>
  );
}

export default Cart;
