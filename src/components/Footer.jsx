import React from "react";

export default function Footer() {
  return (
    <div className="mt-12 py-12">
      <div className="flex justify-between  ">
        <p className="text-gray-500 font-semibold text-xl">
          © 2024 Made By
          <a
            href="https://www.linkedin.com/in/swapno-mondol/"
            className="font-bold text-blue-700 underline"
          >
            {" "}
            Swapno Mondol
          </a>
        </p>
        <div className="flex">
          <p className="font-semibold px-2 text-[#675DD8] text-[21px] cursor-pointer">
            License
          </p>
          <p className="font-semibold px-2 text-[#675DD8] text-[21px] cursor-pointer">
            Documentation
          </p>
          <p className="font-semibold px-2 text-[#675DD8] text-[21px] cursor-pointer">
            Support
          </p>
          <p className="font-semibold px-2 text-[#675DD8] text-[21px] cursor-pointer">
            More Themes
          </p>
        </div>
      </div>
    </div>
  );
}
