import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const SectorBarChart = ({ data }) => {
  // console.log(data);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const margin = { top: 20, right: 30, bottom: 120, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear any existing content
    svg.selectAll("*").remove();

    const xScale = d3
      .scaleBand()
      .domain(data?.map((d) => d.sector))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.total)])
      .nice()
      .range([innerHeight, 0]);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
      .call(d3.axisLeft(yScale))
      .append("text")
      .attr("fill", "#000")
      .attr("x", -margin.left)
      .attr("y", -10)
      .attr("text-anchor", "start")
      .text("Total");

    // X-axis
    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .attr("text-anchor", "end")
      .attr("x", -10)
      .attr("dy", "0.35em")
      .style("font-size", "12px"); // Adjust font size if needed

    // Bars
    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.sector))
      .attr("y", (d) => yScale(d.total))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => innerHeight - yScale(d.total))
      .attr("fill", "steelblue");
  }, [data]);

  return <svg ref={svgRef} width="1200" height="400"></svg>;
};

export default SectorBarChart;
