import { useState } from "react";

export default function SidebarHelper({ link }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        key={link?.id}
        className="  cursor-pointer rounded-md text-gray-500 hover:text-gray-500 first:bg-indigo-500 first:text-white "
      >
        <p
          onClick={() => setShow(!show)}
          className={`pl-2 text-2xl hover:bg-gray-200 py-2 rounded-md ${
            show && "bg-indigo-400"
          }`}
        >
          <div className="flex justify-between ">
            <span>{link?.title}</span>
            {link?.chield && (
              <span
                className={`font-bold text-gray-700 pr-auto text-2xl transition-transform duration-500 ${
                  show && "rotate-90"
                }`}
              >
                >{/* {show ? "v" : ">"}{" "} */}
              </span>
            )}
          </div>
        </p>
        {
          // show &&

          link?.chield?.map((ch) => (
            <p
              key={ch?.id}
              className={`pl-6 text-2xl  rounded-md transition-all duration-500 ease-in-out ${
                show ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
              } overflow-hidden`}
              style={{
                transitionProperty: "max-height, opacity",
              }}
            >
              {ch?.title}
            </p>
          ))
        }
      </div>
    </>
  );
}
