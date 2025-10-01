import React from "react";
import Logo from "../../assets/website/logo.png"


const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <a href="#">
              <img src={Logo} alt="" />
            </a>
            Book</div>
          <div>
            <ul>
              <li>Home</li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
