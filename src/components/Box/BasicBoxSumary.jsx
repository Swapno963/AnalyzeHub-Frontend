// src/BasicBoxSumary.js
import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const BasicBoxSumary = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Clear previous content
    svg.selectAll("*").remove();

    const g = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Set up scales
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.group))
      .padding(0.4);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d3.max(d.values)) + 10])
      .nice()
      .range([height, 0]);

    // Draw box plots
    data.forEach((d) => {
      const groupData = d.values.sort(d3.ascending);
      const q1 = d3.quantile(groupData, 0.25);
      const median = d3.quantile(groupData, 0.5);
      const q3 = d3.quantile(groupData, 0.75);
      const min = d3.min(groupData);
      const max = d3.max(groupData);

      const xPos = x(d.group) + x.bandwidth() / 2;

      // Draw box
      g.append("line")
        .attr("x1", xPos)
        .attr("x2", xPos)
        .attr("y1", y(min))
        .attr("y2", y(max))

        .attr("stroke", "black");

      g.append("rect")
        .attr("x", xPos - 20)
        .attr("y", y(q3))
        .attr("height", y(q1) - y(q3))
        .attr("width", 40)
        .attr("fill", "#1f77b4")
        .attr("stroke", "#000")

        .attr("stroke-width", 1.5);

      g.append("line")
        .attr("x1", xPos - 20)
        .attr("x2", xPos + 20)
        .attr("y1", y(median))
        .attr("y2", y(median))
        .attr("stroke", "#d62728")

        .attr("stroke-width", 2);

      // Draw whiskers
      g.append("line")
        .attr("x1", xPos - 20)
        .attr("x2", xPos + 20)
        .attr("y1", y(min))
        .attr("y2", y(min))

        .attr("stroke", "black");

      g.append("line")
        .attr("x1", xPos - 20)
        .attr("x2", xPos + 20)
        .attr("y1", y(max))
        .attr("y2", y(max))

        .attr("stroke", "black");

      // text labels for Q1, Median, Q3
      g.append("text")
        .attr("x", xPos + 75)
        .attr("y", y(q1) + 15)
        .attr("dy", 4)
        .attr("font-size", "15px")
        .text(`Q1: ${q1?.toFixed(2)}`);

      g.append("text")
        .attr("x", xPos + 75)
        .attr("y", y(median))
        .attr("dy", 4)
        .attr("font-size", "15px")
        .text(`Median: ${median?.toFixed(2)}`);

      g.append("text")
        .attr("x", xPos + 75)
        .attr("y", y(q3) - 20)
        .attr("dy", 4)
        .attr("font-size", "15px")
        .text(`Q3: ${q3?.toFixed(2)}`);
    });

    // Add axes
    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", `translate(0,${height})`)
      .style("font-size", "19px")
      .call(d3.axisBottom(x));

    g.append("g").attr("class", "axis axis--y").call(d3.axisLeft(y));
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default BasicBoxSumary;
