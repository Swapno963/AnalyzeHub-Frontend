import React, { useEffect, useState } from "react";
import SectorImpact from "./Line/SectorImpact";
import SectorIntensityPieChart from "./Pis/SectorIntensity";

export default function CoRelation() {
  const [coRelationData, setcoRelationData] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "/api/co_relaton/";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setcoRelationData(data));
  }, []);
  console.log("checking", coRelationData);
  return (
    <div className="flex justify-evenly py-12 my-12">
      <div>
        <h2 className="text-gray-700 font-semibold text-2xl pb-4">
          Most Intense Sector :
        </h2>
        {coRelationData?.sector_intensity && (
          <SectorIntensityPieChart
            data={coRelationData?.sector_intensity?.slice(1, 13)}
          />
        )}
      </div>
      <div>
        <h2 className="text-gray-700 font-semibold text-2xl pb-4">
          Line Chart : Most Intense Sector :
        </h2>
        {coRelationData?.sector_impact && (
          <SectorImpact data={coRelationData?.sector_impact?.slice(1, 13)} />
        )}
      </div>
    </div>
  );
}
