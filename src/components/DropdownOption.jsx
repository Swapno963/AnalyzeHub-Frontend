// src/Dropdown.js
import React, { useState } from "react";

const DropDownOption = ({ data, setOpption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (sector) => {
    setOpption(sector);
    setIsOpen(!isOpen);
  };

  //   console.log("Dropdown", data);
  return (
    <div className="relative inline-block text-left ml-12">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Options
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {data?.map((dt) => (
              <p
                onClick={() => toggleDropdown(dt?.sector)}
                key={dt?.id}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {dt?.sector}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownOption;
