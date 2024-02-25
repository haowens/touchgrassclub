import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import timeData from './time.csv';

const AboutUs = () => {
  const svgRef = useRef(null);

  

  useEffect(() => {
    // Fetch the data from the CSV file
    d3.csv(timeData).then(data => {

      console.log(data)
      // Specify the chart dimensions
      const width = 628;
      const height = 600;
      const marginTop = 20;
      const marginRight = 20;
      const marginBottom = 80;
      const marginLeft = 80;

      // Define colors for each activity
      const activityColors = {
        "Working": "rgb(184, 184, 255)",
        "Socializing": "#7272ff",
        "Watching TV": "#4242ff",
        "Sleeping": "#0000ff",
        "Playing Sports": "#20005a",
        "Reading": "#1500ff"
      };

      // Filter the data to include only indices 0 to 9
      const filteredData = data.slice(0, 10);

      // Create the positional scales
      const x = d3.scaleLinear()
        .domain([0, filteredData.length - 1]) // Set the domain to the length of the filtered data array
        .range([marginLeft, width - marginRight]);

      const y = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d3.max(Object.values(d).slice(1)))]).nice()
        .range([height - marginBottom, marginTop]);

      // Create the SVG container
      const svg = d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; overflow: visible; font: 10px sans-serif;");

      // Add the horizontal axis
      svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x).ticks(filteredData.length).tickFormat((_, i) => filteredData[i].Activity))
        .append("text")
          .attr("x", width - marginRight)
          .attr("y", -10)
          .attr("text-anchor", "end")
          .text("Year");

      // Add the vertical axis
      svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())
        .append("text")
          .attr("x", 10)
          .attr("y", marginTop - 10)
          .attr("text-anchor", "start")
          .text("Activity (%)");

      // Draw the lines
      const line = d3.line()
        .x((_, i) => x(i)) // Use the index i as x-coordinate
        .y(d => y(d));

      Object.keys(filteredData[0]).slice(1).forEach((key, i) => {
        svg.append("path")
          .datum(filteredData.map(d => d[key]))
          .attr("fill", "none")
          .attr("stroke", activityColors[key])
          .attr("stroke-width", 2)
          .attr("d", line)
          .on("mouseover", (event, d) => {
            const [xCoord, yCoord] = d3.pointer(event);
            svg.append("text")
              .attr("class", "tooltip")
              .attr("x", xCoord)
              .attr("y", yCoord - 10)
              .attr("text-anchor", "middle")
              .text(`${key}`);
          })
          .on("mouseout", () => {
            svg.select(".tooltip").remove();
          });
      });
    });
  }, []);

  return (
    <div style={{ marginTop: '10px',display: 'flex', justifyContent: 'center', flexDirection: 'column-reverse', alignItems: 'center' }}>
      <p style={{fontSize: 'x-large', fontFamily: 'Thunder', color: 'rgb(63, 0, 111)'}}>Data from the American Time Use Survey</p>
      <svg ref={svgRef}></svg>
      
    </div>
  );
};

export default AboutUs;
