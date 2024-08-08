import React, { useEffect, useState } from "react";
import ttop_img from "../images/to-banner.png";
import TopBannerLineChart from "./Line/TopBannerAvg";
export default function BasicSummary() {
  const [summaryData, setSummaryData] = useState([]);

  // loading summary data
  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "api/basic_summary/";
    console.log(url);

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setSummaryData(data))
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);

  // custom array for line chart
  let arr = [
    { sector: "Intensity", value: summaryData?.average_intensity },
    { sector: "LikeliHood", value: summaryData?.average_likeliHood },
    { sector: "Relevance", value: summaryData?.average_relevance },
  ];
  // console.log(arr);
  return (
    <div className="grid grid-cols-3 gap-14">
      {/* total data and some average data  */}
      <div className="bg-[#776cea]  rounded-md p-8 shadow-xl">
        <img
          style={{
            animation: "rotation 13s infinite linear",
            width: "200px", // Adjust width as needed
            height: "200px",
          }}
          className="flex float-end  "
          src={ttop_img}
          alt=""
        />
        <h3 className="text-white text-2xl font-bold pb-2 pt-12">
          Data Analytics
        </h3>
        <p className="text-white text-md font-semibold">
          You Have Total : {summaryData?.total} Entry
        </p>
        <div>
          <h2 className="text-white text-xl font-bold pt-[62px]">
            Average Marks Are :{" "}
          </h2>
          <div className="grid grid-cols-3 text-white font-semibold text-center ">
            <div className="pt-4">
              <p className="pb-4">Average Intensity</p>
              <span className="bg-[#958de9] py-1 px-2 rounded-md">
                {summaryData?.average_intensity}
              </span>
            </div>
            <div className="pt-4">
              <p className="pb-4">Average LikeliHood</p>
              <span className="bg-[#958de9] py-1 px-2 rounded-md">
                {summaryData?.average_likeliHood}
              </span>
            </div>
            <div className="pt-4">
              <p className="pb-4">Average Relevance</p>
              <span className="bg-[#958de9] py-1 px-2 rounded-md">
                {summaryData?.average_relevance}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* average mark shown in line chart */}
      <div className="rounded-md px-6 pt-4  border border-gray-200   shadow-xl flex justify-center items-center">
        <TopBannerLineChart data={arr} />
      </div>

      {/* data  shown in table formate */}
      <div className=" rounded-md p-8 border border-gray-200 shadow-xl">
        <h2 className="text-xl text-gray-500 font-bold pb-2">
          Some Basic Summary :{" "}
        </h2>
        <h2 className="mb-2 text-lg font-semibold text-gray-600 ">
          Hear we work with:
        </h2>
        <ul className="max-w-md pb-3 space-y-1 text-gray-500 list-disc list-inside ">
          <li>This analysis Done by {summaryData?.total} Entry</li>
          {/* <li>
            Hear we have quantitative data like: Impact, Likelihood and
            Relevance{" "}
          </li>
          <li>
            We also have : Sector, Topic, Region, Country, Pestle and Source
          </li> */}
        </ul>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-600">
            <thead className="text-xs text-white uppercase bg-[#776cea]  ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Parameter name
                </th>
                <th scope="col" className="px-6 py-3">
                  Min
                </th>
                <th scope="col" className="px-6 py-3">
                  Max
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#9087f4] text-white">
              <tr className=" border-b  ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Intensity
                </th>
                <td className="px-6 py-4">{summaryData?.min_intensity}</td>
                <td className="px-6 py-4">{summaryData?.max_intensity}</td>
              </tr>
              <tr className=" border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Likelihood
                </th>
                <td className="px-6 py-4">{summaryData?.min_likelihood}</td>
                <td className="px-6 py-4">{summaryData?.max_likelihood}</td>
              </tr>
              <tr className=" ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Relevance
                </th>
                <td className="px-6 py-4">{summaryData?.min_relevance}</td>
                <td className="px-6 py-4">{summaryData?.max_relevance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <style>{`
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
