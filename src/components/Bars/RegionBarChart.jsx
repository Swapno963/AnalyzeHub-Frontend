import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const BarRegionChart = ({ data }) => {
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
      .domain(data?.map((d) => d.region))
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
      .attr("y", -7)
      .attr("text-anchor", "start")
      .attr("font-size", "18px")
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
      .style("font-size", "18px"); // Adjust font size if needed

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

    // Bars
    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.region))
      .attr("y", (d) => yScale(d.total))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => innerHeight - yScale(d.total))
      .attr("fill", "#776cea")
      .on("mouseover", (event, d) => {
        tooltip
          .html(`Date: ${d.region}<br>Value: ${d.total}`)
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

  return <svg ref={svgRef} width="650" height="400"></svg>;
};

export default BarRegionChart;
