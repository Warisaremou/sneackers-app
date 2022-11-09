import React from "react";

function Layout({ openMenu, setIsOpen }) {
  return (
    <div
      className={`fixed top-0 h-full w-full bg-black opacity-40 z-20 ${
        openMenu ? "block overflow-hidden" : "hidden"
      }`}
      onClick={() => setIsOpen(false)}
    ></div>
  );
}

export default Layout;
