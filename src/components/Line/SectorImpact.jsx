import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const SectorImpact = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!Array.isArray(data)) {
      console.error("Data must be an array");
      return;
    }

    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const margin = { top: 20, right: 30, bottom: 150, left: 120 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear any existing content
    svg.selectAll("*").remove();

    const xScale = d3
      .scalePoint()
      .domain(data.map((d) => d.sector))
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.average_intensity)])
      .nice()
      .range([innerHeight, 0]);

    const line = d3
      .line()
      .x((d) => xScale(d.sector))
      .y((d) => yScale(d.average_intensity));

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Axes
    g.append("g")
      .call(d3.axisLeft(yScale))
      .append("text")
      .attr("fill", "#000")
      .attr("x", -margin.left + 50)
      .attr("y", -10)
      .attr("text-anchor", "start")
      .attr("font-size", "17px")
      .text("Value");

    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("font-size", "16px")

      .attr("transform", "rotate(-45)")
      .attr("text-anchor", "end");

    // Line
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Tooltip
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

    // Dots and tooltip interaction
    g.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => xScale(d.sector))
      .attr("cy", (d) => yScale(d.average_intensity))
      .attr("r", 5)
      .attr("fill", "#776cea")
      .on("mouseover", (event, d) => {
        tooltip
          .html(`Date: ${d.sector}<br>Value: ${d.average_intensity}`)
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

  return <svg ref={svgRef} width="700" height="380"></svg>;
};

export default SectorImpact;
