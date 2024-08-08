import React from "react";
import SidebarHelper from "./SidebarHelper";

export default function SideBar() {
  // const sideLinks = [
  //   {
  //     id: 1,
  //     title: "Dashbord",
  //     chield: [
  //       { id: 14, title: "Analytics", url: "", icon: "" },
  //       { id: 16, title: "Bar Chart", url: "", icon: "" },
  //       { id: 15, title: "Min Max Table", url: "", icon: "" },
  //     ],
  //     url: "",
  //     icon: "",
  //   },
  //   {
  //     id: 14,
  //     title: "Counts",
  //     chield: [
  //       { id: 16, title: "Box Plot", url: "", icon: "" },
  //       { id: 17, title: "Top Sectors", url: "", icon: "" },
  //     ],
  //     url: "",
  //     icon: "",
  //   },
  //   {
  //     id: 19,
  //     title: "Most Appear",
  //     chield: [
  //       { id: 16, title: "Country", url: "", icon: "" },
  //       { id: 17, title: "Topic", url: "", icon: "" },
  //     ],
  //     url: "",
  //     icon: "",
  //   },
  //   {
  //     id: 20,
  //     title: "Most Intense",
  //     chield: [
  //       { id: 16, title: "Sector-Pi ", url: "", icon: "" },
  //       { id: 17, title: "Sector-Line", url: "", icon: "" },
  //     ],
  //     url: "",
  //     icon: "",
  //   },
  //   {
  //     id: 22,
  //     title: "Top 5",
  //     chield: [
  //       { id: 16, title: "Impact", url: "", icon: "" },
  //       { id: 17, title: "Intensity", url: "", icon: "" },
  //     ],
  //     url: "",
  //     icon: "",
  //   },

  //   { id: 62, title: "Ecommerce", url: "", icon: "" },
  //   { id: 73, title: "Academ", url: "", icon: "" },
  //   { id: 74, title: "Logistics", url: "", icon: "" },
  //   { id: 65, title: "Front Pages", url: "", icon: "" },
  //   { id: 66, title: "Front Pages", url: "", icon: "" },
  //   { id: 67, title: "Email", url: "", icon: "" },
  //   { id: 68, title: "Chat", url: "", icon: "" },
  //   { id: 610, title: "User", url: "", icon: "" },
  //   { id: 611, title: "Authentication", url: "", icon: "" },
  //   { id: 612, title: "Dialog Examples", url: "", icon: "" },
  //   { id: 613, title: "Charts Examples", url: "", icon: "" },
  // ];
  const sideLinks = [
    {
      id: 1,
      title: "Dashboard",
      chield: [
        { id: 101, title: "Analytics", url: "", icon: "" },
        { id: 102, title: "Bar Chart", url: "", icon: "" },
        { id: 103, title: "Min Max Table", url: "", icon: "" },
      ],
      url: "",
      icon: "",
    },
    {
      id: 2,
      title: "Counts",
      chield: [
        { id: 201, title: "Box Plot", url: "", icon: "" },
        { id: 202, title: "Top Sectors", url: "", icon: "" },
      ],
      url: "",
      icon: "",
    },
    {
      id: 3,
      title: "Most Appear",
      chield: [
        { id: 301, title: "Country", url: "", icon: "" },
        { id: 302, title: "Topic", url: "", icon: "" },
      ],
      url: "",
      icon: "",
    },
    {
      id: 4,
      title: "Most Intense",
      chield: [
        { id: 401, title: "Sector-Pie", url: "", icon: "" },
        { id: 402, title: "Sector-Line", url: "", icon: "" },
      ],
      url: "",
      icon: "",
    },
    {
      id: 5,
      title: "Top 5",
      chield: [
        { id: 501, title: "Impact", url: "", icon: "" },
        { id: 502, title: "Intensity", url: "", icon: "" },
      ],
      url: "",
      icon: "",
    },
    { id: 6, title: "Ecommerce", url: "", icon: "" },
    { id: 7, title: "Academ", url: "", icon: "" },
    { id: 8, title: "Logistics", url: "", icon: "" },
    { id: 9, title: "Front Pages", url: "", icon: "" },
    { id: 10, title: "Email", url: "", icon: "" },
    { id: 11, title: "Chat", url: "", icon: "" },
    { id: 12, title: "User", url: "", icon: "" },
    { id: 13, title: "Authentication", url: "", icon: "" },
    { id: 14, title: "Dialog Examples", url: "", icon: "" },
    { id: 15, title: "Charts Examples", url: "", icon: "" },
  ];

  return (
    <div className=" text-start pl-6 pt-6 fixed top-0 ">
      <div className="">
        <div className="">
          <p>
            <span className="w-12 h-12 inline-flex items-center justify-center text-white font-bold text-xl bg-indigo-500 rounded-full">
              S
            </span>
            <span className="font-bold text-2xl pl-2 ">Swapno</span>
          </p>{" "}
          <br />
          <hr />
        </div>
        {sideLinks?.map((link) => (
          <SidebarHelper link={link} />
        ))}
      </div>
    </div>
  );
}
