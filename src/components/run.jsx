import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as d3Tile from "d3-tile";

const Run = () => {
    useEffect(() => {
        const mapWidth = 500; // Define width of the map
        const mapHeight = 660; // Define height of the map
        const width = 750;
        const height = 770;

        // Define projection
        const projection = d3.geoMercator()
            .center([-79.0558, 35.9132])
            .scale(Math.pow(2, 23) / (2 * Math.PI))
            .translate([mapWidth / 2, mapHeight / 2]);

        // Define path generator
        const path = d3.geoPath(projection);

        // Define tile function
        const tile = d3Tile.tile()
            .size([mapWidth, mapHeight])
            .scale(projection.scale() * 2 * Math.PI)
            .translate(projection([0, 0]));

        // Generate tiles
        const tiles = tile();

        // Render map using SVG
        const svg = d3.select("#map")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("width", width)
            .attr("height", height);

        // Render tiles
        const map = svg.selectAll("image")
            .data(tiles)
            .enter().append("image")
            .attr("xlink:href", ([x, y, z]) => `https://tiles.stadiamaps.com/tiles/stamen_toner/${z}/${x}/${y}${devicePixelRatio > 1 ? "@2x" : ""}.png`)
            .attr("x", ([x, y, z]) => Math.round((x + tiles.translate[0]) * tiles.scale))
            .attr("y", ([x, y, z]) => Math.round((y + tiles.translate[1]) * tiles.scale))
            .attr("width", tiles.scale)
            .attr("height", tiles.scale);

        // Define routes
        const routes = [
            [[-79.049239, 35.908789], [-79.05262335964122, 35.90853838144103]] , // Bell Tower to South Road
            [[-79.05262335964122, 35.90853838144103], [-79.0541998, 35.910811]], // South Road to Sitterson Intersection
            [[-79.0541998, 35.910811], [-79.0618, 35.90799]], //Sitterson Intersection to McCauley
            [[-79.0618, 35.90799], [-79.06316, 35.91036]], //McCauley to Al's
            [[-79.06316, 35.91036], [-79.048069, 35.91628]], // Al's to Park Pl
            [[-79.048069, 35.91628], [-79.04665, 35.91379]],
        ];
        // Render routes
        routes.forEach((route, index) => {
            svg.append("path")
                .datum({ type: "LineString", coordinates: route })
                .attr("class", "route")
                .attr("d", path)
                .style("stroke", 'red')
                .style("stroke-width", 2)
                .style("fill", "none");
        });
    }, []);

    return (
        <svg id="map"></svg>
    );
};

export default Run;
