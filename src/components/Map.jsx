import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [12, -3.40],
        scale: 9700
      }}
      style={{width:"100%", height: "100%"}}
    >
      <Geographies
        geography="./features.json"
        fill="#045159"
        stroke="#031a1d"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[26.9644, 48.2646]}
        dx={-80}
        dy={-30}
        connectorProps={{
          stroke: "#77d0a2",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#031a1d">
          {"Briceni"}
        </text>
      </Annotation> 
      <Annotation
        subject={[28.822, 47.0348]}
        dx={100}
        dy={-30}
        connectorProps={{
          stroke: "#77d0a2",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="50" textAnchor="end" alignmentBaseline="middle" fill="#031a1d">
          {"Chişinău"}
        </text>
      </Annotation> 
      <Annotation
        subject={[27.9072, 47.2556]}
        dx={-80}
        dy={-30}
        connectorProps={{
          stroke: "#77d0a2",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#031a1d">
          {"Ungheni"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
