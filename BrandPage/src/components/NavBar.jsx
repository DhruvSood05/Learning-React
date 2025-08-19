import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="flex justify-between max-w-[1200px] mx-auto my-0 h-[72px] items-center">
        <div className="logo">
          <img src="\Images\brand_logo.png" alt="logo" />
        </div>

        <ul className="flex gap-[24px]">
          <li href="#">Menu</li>
          <li href="#">About</li>
          <li href="#">Location</li>
          <li href="#">Contact</li>
        </ul>

        <button className="px-[16px] py-[6px] bg-(--red) h-[32px] text-white font-[500px] ">
          Login
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
