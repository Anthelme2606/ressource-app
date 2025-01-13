import React, { useRef } from "react";
import TrackLet from "./TrackLet"; 
import useScrollSnap from "../hooks/UseScrollSnap";

const TrackLetContainer = ({ tracklets }) => {
  const containerRef = useRef(null);

  useScrollSnap(containerRef, { threshold: 0.5 });

  return (
    <div
      className="tracklet-container"
      ref={containerRef}
      style={{
        overflowY: "scroll",
        height: "100vh", // Permet d'occuper tout l'écran
        scrollBehavior: "smooth", // Transition fluide lors du défilement
      }}
    >
      {tracklets.map((tracklet, index) => (
        <div key={index} className="tracklet-wrapper">
          <TrackLet {...tracklet} />
        </div>
      ))}
    </div>
  );
};

export default TrackLetContainer;
