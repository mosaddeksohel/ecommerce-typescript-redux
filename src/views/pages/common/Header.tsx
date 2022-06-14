import React from "react";
import logo from "../../../assest/images/logo.png";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <input className="p-2 w-full border-gray-200" type="text" />
          <button>search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
