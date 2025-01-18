import React from "react";
import "./gallary.css"; // Assuming you have a CSS file for styling

import frame1 from "../assets/gallaray/gallary_1.jpg";
import frame2 from "../assets/gallaray/gallar_3.jpg";
import frame3 from "../assets/gallaray/gallary_4.jpg";
import frame4 from "../assets/gallaray/gallary_5.jpg";
import frame5 from "../assets/img5.JPG";
import frame6 from "../assets/img6.JPG";
import frame7 from "../assets/img7.JPG";

export default function Gallary() {
  return (
    <div className="gallery">
      <div className="heading-container">
        <h1>OUR Gallery</h1>
      </div>
      
        <div className="gallery-frames">
          <img src={frame1} alt="frame 1" className="frame" />
          <img src={frame2} alt="frame 2" className="frame" />
          <img src={frame3} alt="frame 3" className="frame" />
          <img src={frame4} alt="frame 4" className="frame" />
          <img src={frame5} alt="frame 5" className="frame" />
          <img src={frame6} alt="frame 6" className="frame" />
          <img src={frame7} alt="frame 7" className="frame" />
        </div>
      
    </div>
  );
}
