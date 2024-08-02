import React from "react";

export default function TopSectors({ sortedData }) {
  return (
    <div className="flex justify-center">
      <div className="min-w-[500px] py-2  mx-12 border border-gray-300 rounded-md">
        <h2 className="text-gray-600 font-semibold text-2xl pl-1 pb-2">
          Top sector and their counts :
        </h2>
        {sortedData?.map((dt) => (
          <div
            className="flex justify-between hover:bg-gray-200 px-3"
            key={dt?.sector}
          >
            <h2 className="text-gray-500 font-semibold py-2 text-xl">
              {dt?.sector === "" ? "Un Known" : dt?.sector}
            </h2>
            <h2 className="text-gray-500 font-semibold py-2 text-xl">
              {dt?.total}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
