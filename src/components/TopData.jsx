import React, { useEffect, useState } from "react";
import TopIntensity from "./Top/TopIntensity";

export default function TopData() {
  const [topData, setTopData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/top_data/")
      .then((response) => response.json())
      .then((data) => setTopData(data));
  }, []);
  // console.log(topData);
  return (
    <div className="grid grid-cols-2 gap-10">
      {topData?.top_impact && (
        <TopIntensity data={topData?.top_impact} besedOn={"Impact"} />
      )}
      {topData?.top_intensity && (
        <TopIntensity data={topData?.top_intensity} besedOn={"Intensity"} />
      )}
      {/* {topData?.top_likelihood && (
        <TopIntensity data={topData?.top_likelihood} />
      )} */}
    </div>
  );
}
