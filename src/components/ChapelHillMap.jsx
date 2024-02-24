import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as d3Tile from "d3-tile";

const ChapelHillMap = () => {
  <div>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
  </div>

const div = d3.selectAll("div");
<svg id="map"></svg>

const mapWidth = 650; // Define width of the map
const mapHeight = 760; // Define height of the map

const width = 750;
const height = 770;

// Define projection
const projection = d3.geoMercator()
.center([-79.0558, 35.9132])
.scale(Math.pow(2, 21) / (2 * Math.PI))
.translate([mapWidth / 2, mapHeight / 2]);

// Define path generator
const path = d3.geoPath(projection);

// Define tile function
const tile = d3.tile()
.size([mapWidth, mapHeight])
.scale(projection.scale() * 2 * Math.PI)
.translate(projection([0, 0]));

// // Generate tiles
const tiles = tile();

// Render map using SVG
const svg = d3.select("#map")
.attr("viewBox", `0 0 ${width} ${height}`)
.attr("width", width)
.attr("height", height);


const map = svg.selectAll("image")
.data(tiles)
.enter().append("image")
.attr("xlink:href", ([x, y, z]) => `https://tiles.stadiamaps.com/tiles/stamen_toner/${z}/${x}/${y}${devicePixelRatio > 1 ? "@2x" : ""}.png`)
.attr("x", ([x, y, z]) => Math.round((x + tiles.translate[0]) * tiles.scale))
.attr("y", ([x, y, z]) => Math.round((y + tiles.translate[1]) * tiles.scale))
.attr("width", tiles.scale)
.attr("height", tiles.scale);


  // useEffect(() => {
  //   const script1 = document.createElement('script');
  //   script1.src = 'https://d3js.org/d3.v7.min.js';
  //   script1.async = true;
  //   document.body.appendChild(script1);

  //   const script2 = document.createElement('script');
  //   script2.src = 'https://cdn.jsdelivr.net/npm/d3-tile@1';
  //   script2.async = true;
  //   document.body.appendChild(script2);

  //   script2.onload = () => {
  //     const mapWidth = 650;
  //     const mapHeight = 760;
  //     const width = 750;
  //     const height = 770;

  //     const projection = d3.geoMercator()
  //       .center([-79.0558, 35.9132])
  //       .scale(Math.pow(2, 21) / (2 * Math.PI))
  //       .translate([mapWidth / 2, mapHeight / 2]);

  //     const tile = d3.tile()
  //       .size([mapWidth, mapHeight])
  //       .scale(projection.scale() * 2 * Math.PI)
  //       .translate(projection([0, 0]));

  //     const tiles = tile();

  //     const svg = d3.select("#map")
  //       .attr("viewBox", `0 0 ${width} ${height}`)
  //       .attr("width", width)
  //       .attr("height", height);

  //     const map = svg.selectAll("image")
  //       .data(tiles)
  //       .enter().append("image")
  //       .attr("xlink:href", ([x, y, z]) => `https://tiles.stadiamaps.com/tiles/stamen_toner/${z}/${x}/${y}${devicePixelRatio > 1 ? "@2x" : ""}.png`)
  //       .attr("x", ([x, y, z]) => Math.round((x + tiles.translate[0]) * tiles.scale))
  //       .attr("y", ([x, y, z]) => Math.round((y + tiles.translate[1]) * tiles.scale))
  //       .attr("width", tiles.scale)
  //       .attr("height", tiles.scale);

  //     const lonLatPoint = [-87.6371345, 41.9311325];
  //     const projectedPoint = projection(lonLatPoint);

  //     svg.append('circle')
  //       .attr('cx', projectedPoint[0])
  //       .attr('cy', projectedPoint[1])
  //       .attr('r', 10)
  //       .attr('fill', 'lightblue')
  //       .attr('stroke', 'none');

  //     svg.append('text')
  //       .attr('x', projectedPoint[0] + 6)
  //       .attr('y', projectedPoint[1])
  //       .attr('dy', 2)
  //       .attr('font-size', '9')
  //       .attr('fill', 'lightblue')
  //       .text(lonLatPoint);
  //   };
  // }, []);

  return (
    <svg id="map"></svg>
  );
};

export default ChapelHillMap;
