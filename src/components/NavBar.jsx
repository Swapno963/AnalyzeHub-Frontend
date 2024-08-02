import React from "react";

export default function NavBar() {
  return (
    <div className="fixed bg-opacity-50 backdrop-blur-md z-50 w-full">
      <nav
        className=" top-0 left-200   shadow-md bg-white z-50 mt-8"
        style={{ width: "80%" }}
      >
        <div
          className="container mx-auto flex justify-between items-center py-4  "
          style={{ width: "80%" }}
        >
          <div className="text-2xl font-bold text-indigo-600">
            <input
              className="ml-[-112px] py-4 border-none focus:outline-none"
              type="text"
              placeholder="Type To search..."
              name=""
              id=""
            />
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
