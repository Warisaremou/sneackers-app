import React from "react";
import { useState } from "react";
// import { BsCart3 } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";
import cover from "../../pictures/image-product-1-thumbnail.jpg";

function Cart() {
  const [openCart, setIsOpen] = useState(false);

  const showCart = (e) => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="cart relative">
      <BsBag
        className={`cursor-pointer text-2xl ${
          openCart ? "text-pure-orange" : null
        }`}
        onClick={showCart}
      />
      <div
        className={
          openCart
            ? "absolute rounded-lg py-4 bg-white text-md top-12 -right-20 w-80 h-56 max-[320px]:w-72 transition-all duration-1000"
            : "hidden"
        }
      >
        <h4 className="text-center border-b-2 pb-2 text-gray-600">Cart</h4>
        <div className="text-center pt-4 pb-2 text-sm px-6 text-gray-600">
          <div className="flex items-center">
            <img src={cover} alt="product-img" className="w-14 rounded-lg" />
            <div className="text-start pl-5">
              <h4 className="text-sm">Fall Limited Edition Sneackers</h4>
              <p className="text-sm">
                $125.00 x 3 <span className="font-bold">$375</span>
              </p>
            </div>
            <HiOutlineTrash className="text-2xl text-gray-400" />
            {/* Your cart is empty */}
          </div>
          <button className="checkout-btn">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
