import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const SectorIntensityPieChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!Array.isArray(data)) {
      console.error("Data must be an array");
      return;
    }

    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Clear any existing content
    svg.selectAll("*").remove();

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const pie = d3
      .pie()
      .value((d) => d.average_intensity)
      .sort(null);

    const path = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const label = d3
      .arc()
      .outerRadius(radius - 60)
      .innerRadius(radius - 40);

    const arc = g
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arc
      .append("path")
      .attr("d", path)
      .attr("fill", (d) => color(d.data.sector));
    // tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "#fff")
      .style("border", "1px solid #ccc")
      .style("padding", "5px")
      .style("border-radius", "4px")
      .style("pointer-events", "none");

    arc
      .append("text")
      .attr("transform", (d) => `translate(${label.centroid(d)})`)
      .attr("dy", "0.35em")
      .attr("font-size", "17px")
      .text((d) => d.data.sector)
      .on("mouseover", (event, d) => {
        tooltip
          .html(`Date: ${d.data.sector}<br>Value: ${d.data.average_intensity}`)
          .style("visibility", "visible");
      })
      .on("mousemove", (event) => {
        tooltip
          .style("top", `${event.pageY - 10}px`)
          .style("left", `${event.pageX + 10}px`);
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });
  }, [data]);

  return <svg ref={svgRef} width="400" height="400"></svg>;
};

export default SectorIntensityPieChart;
