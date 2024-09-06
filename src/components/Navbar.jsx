import React from "react";
import Logo from "../assets/food-logo.png";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <a
                href="#"
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
              >
                <img src={Logo} alt="Foodie Zone" className="w-10" />
                Foodie
              </a>
            </div>
          </div>

          <div>
            <ul className=" hidden sm:flex gap-4">
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-md ">
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
