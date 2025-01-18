import React from "react";
import "./About"; // Assuming you have a CSS file for styling

import frame1 from "../assets/team_1.jpg";
import frame2 from "../assets/team_2.jpg";

export default function Gallary() {
  return (
      <div className="gallery-frames">
        <img src={frame1} alt="frame 1" className="frame" />
        <img src={frame2} alt="frame 2" className="frame" />
      </div>
    
  );
}
