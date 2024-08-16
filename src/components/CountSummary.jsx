import React, { useEffect, useState } from "react";
import BarRegionChart from "./Bars/RegionBarChart";
import BarTopicChart from "./Bars/topicBarChart";
import BoxPlotSummary from "./BoxPlotSummary.jsx/BoxPlotSummary";
import TopSectors from "./TopSectors";

export default function CountSummary() {
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "/api/count_summary/";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setSummaryData(data));
  }, []);

  // const country =
  //   summaryData?.country_id && summaryData?.country_id.slice(0, 10);

  const sortedData =
    summaryData?.country_id &&
    [...summaryData?.sector_id]?.sort((a, b) => b.total - a.total);

  // console.log("summaryData?.sector_id : ", sortedData);
  return (
    <div>
      <div id="count" className="grid grid-cols-2 mt-12">
        <div>
          {summaryData?.sector_id && (
            <BoxPlotSummary sector_id={summaryData?.sector_id} />
          )}
        </div>
        <div className="">
          <TopSectors sortedData={sortedData?.slice(0, 9)} />
        </div>
      </div>

      {/* {summaryData?.sector_id && (
        <SectorBarChart data={summaryData?.sector_id} />
      )} */}
      {/* {summaryData?.country_id && (
        <CountryBarChart data={summaryData?.country_id.slice(1, 20)} />
      )} */}
      <div id="mostAppear" className="flex justify-around my-12 py-12 ">
        <div>
          <h2 className="text-gray-700 font-semibold text-2xl pb-4">
            Most Appear Country :
          </h2>
          {summaryData?.region_id && (
            <BarRegionChart data={summaryData?.region_id.slice(1, 15)} />
          )}
        </div>
        <div>
          <h2 className="text-gray-700 font-semibold text-2xl pb-4">
            Most Appear Topic :
          </h2>
          {summaryData?.topic_id && (
            <BarTopicChart data={summaryData?.topic_id.slice(1, 10)} />
          )}
        </div>
      </div>
    </div>
  );
}
