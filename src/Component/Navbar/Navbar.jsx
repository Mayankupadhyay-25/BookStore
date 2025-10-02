import React from "react";
import Logo from "../../assets/website/logo.png";
import { FaSortDown } from "react-icons/fa";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="container py-3 sm:y-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
              Books
            </a>
          </div>
          <div>
            <ul className=" items-center gap-4 hidden sm:flex">
              {Menu.map((menu) => (
                <li>
                  <a href={menu.link} className="inline-block py-4 px-4 hover:text-primary duration-200 ">
                    {menu.name}</a>
                </li>
              ))}
              {/* dropdown section */}
              <li className="group relative cursor-pointer">
                <a href="/#" className="flex h-[72px] items-center gap-[2px]">Quick links</a>
                <span>
                  <FaSortDown 
                  className="transiction duration-300 group-hover:rotate-180"/>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
