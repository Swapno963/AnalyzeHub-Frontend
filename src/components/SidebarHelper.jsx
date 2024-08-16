import { useState } from "react";

export default function SidebarHelper({ link }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        key={link?.id}
        className="  cursor-pointer rounded-md text-gray-500 hover:text-gray-500 first:bg-indigo-500 first:text-white "
      >
        <div
          className={`pl-2 text-2xl hover:bg-gray-200 py-2 rounded-md ${
            show && "bg-indigo-400"
          }`}
        >
          <div className="flex justify-between ">
            <a href={`/${link?.url}`}>{link?.title}</a>
            {link?.chield && (
              <span
                onClick={() => setShow(!show)}
                className={`font-bold text-gray-700 pr-auto text-2xl transition-transform duration-500 hover:text-green-500${
                  show && "rotate-90"
                }`}
              >
                >
              </span>
            )}
          </div>
        </div>
        {
          // show &&

          link?.chield?.map((ch) => (
            <p
              key={ch?.id}
              className={`hover:bg-gray-200 pl-6 text-2xl  rounded-md transition-all duration-500 ease-in-out ${
                show ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
              } overflow-hidden`}
              style={{
                transitionProperty: "max-height, opacity",
              }}
            >
              <a href={`/${link?.url}`}>{ch?.title}</a>
            </p>
          ))
        }
      </div>
    </>
  );
}
