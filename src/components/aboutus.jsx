import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const AboutUs = () => {
    
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const fetchDataAndDrawChart = async () => {
//       try {
//         const response = await fetch('time.csv');
//         const text = await response.text();
//         const data = d3.csvParse(text, d3.autoType);
//         drawChart(data);
//       } catch (error) {
//         console.error('Error fetching or parsing data:', error);
//       }
//     };

//     fetchDataAndDrawChart();
//   }, []);

//   const drawChart = (time) => {
//     const width = 928;
//     const height = 600;
//     const marginTop = 20;
//     const marginRight = 20;
//     const marginBottom = 80;
//     const marginLeft = 80;

//     const activityColors = {
//       "Working": "#1f77b4",
//       "Socializing": "#ff7f0e",
//       "Watching TV": "#2ca02c",
//       "Sleeping": "#d62728",
//       "Playing Sports": "#9467bd",
//       "Reading": "#d62728"
//     };

//     const x = d3.scaleLinear()
//       .domain([0, time.length - 1])
//       .range([marginLeft, width - marginRight]);

//     const y = d3.scaleLinear()
//       .domain([0, d3.max(time, d => d3.max(Object.values(d).slice(1)))]).nice()
//       .range([height - marginBottom, marginTop]);

//     const svg = d3.select(chartRef.current)
//       .append("svg")
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", `0 0 ${width} ${height}`)
//       .attr("style", "max-width: 100%; height: auto; overflow: visible; font: 10px sans-serif;");

//     svg.append("g")
//       .attr("transform", `translate(0,${height - marginBottom})`)
//       .call(d3.axisBottom(x).ticks(time.length).tickFormat((d, i) => time[i].Activity))
//       .append("text")
//       .attr("x", width - marginRight)
//       .attr("y", -10)
//       .attr("text-anchor", "end")
//       .text("Year");

//     svg.append("g")
//       .attr("transform", `translate(${marginLeft},0)`)
//       .call(d3.axisLeft(y))
//       .call(g => g.select(".domain").remove())
//       .append("text")
//       .attr("x", 10)
//       .attr("y", marginTop - 10)
//       .attr("text-anchor", "start")
//       .text("Activity (%)");

//     const line = d3.line()
//       .x((d, i) => x(i))
//       .y(d => y(d));

//     Object.keys(time[0]).slice(1).forEach((key, i) => {
//       svg.append("path")
//         .datum(time.map(d => d[key]))
//         .attr("fill", "none")
//         .attr("stroke", activityColors[key])
//         .attr("stroke-width", 2)
//         .attr("d", line)
//         .on("mouseover", (event, d) => {
//           const [xCoord, yCoord] = d3.pointer(event);
//           svg.append("text")
//             .attr("class", "tooltip")
//             .attr("x", xCoord)
//             .attr("y", yCoord - 10)
//             .attr("text-anchor", "middle")
//             .text(`${key}`);
//         })
//         .on("mouseout", () => {
//           svg.select(".tooltip").remove();
//         });
//     });
//   };

  return <div></div>;
};

export default AboutUs;
