import React from "react";

const Navbar = () => {
  return (
    // Navbar container
    <div className="w-full h-16  items-center justify-center flex border-black">
      {/* Left side of the navbar */}
      <div className="left flex justify-start px-4 items-center w-[40%] h-full">
        <h1 className="logo font-bold text-2xl uppercase text-blue-500">
          FlexWheels
        </h1>
      </div>

      {/* Right side of the navbar */}
      <div className="left flex justify-end px-4 items-center w-[40%] h-full ">
        <button className=" px-3 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
