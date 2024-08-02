import React, { useEffect, useState } from "react";
import { GetDataForSummary } from "../../utility";
import BasicBoxSumary from "../Box/BasicBoxSumary";
import Dropdown from "../Dropdown";

export default function BoxPlotSummary({ sector_id }) {
  const [selectedSector, setSelectedSector] = useState("Manufacturing");
  const [boxData, setBoxData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/get_data/?sector=${selectedSector}`)
      .then((response) => response.json())
      .then((data) => {
        setBoxData(GetDataForSummary(data?.results));
      });
  }, [selectedSector]);
  console.log(selectedSector);
  return (
    <div>
      {/* selectin sector */}
      <div className="flex">
        <h1 className="pl-4 font-semibold text-2xl text-gray-800">
          This is box plot of{" "}
          <span className="font-bold text-blue-400 underline">
            {typeof selectedSector == "string" ? `${selectedSector}` : ""}
          </span>
        </h1>
        <Dropdown
          data={sector_id}
          selectedSector={selectedSector}
          setSelectedSector={setSelectedSector}
        />
      </div>

      {boxData && <BasicBoxSumary data={boxData} />}
    </div>
  );
}
