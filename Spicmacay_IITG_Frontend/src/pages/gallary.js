import React from "react";
import "./gallary.css"; // Assuming you have a CSS file for styling

import frame1 from "../assets/gallary_1.jpg";
import frame2 from "../assets/gallar_3.jpg";
import frame3 from "../assets/gallary_4.jpg";
import frame4 from "../assets/gallary_5.jpg";
import frame6 from "../assets/img16.jpg";
import frame7 from "../assets/img17.jpg";
import frame8 from "../assets/img8.jpg";
import frame9 from "../assets/img9.jpg";
import frame10 from "../assets/img10.jpg";
import frame11 from "../assets/img11.jpg";
import frame12 from "../assets/img12.jpg";
import frame13 from "../assets/img13.jpg";
import frame14 from "../assets/img14.jpg";
import frame15 from "../assets/img15.jpg";
import frame16 from "../assets/img16.jpg";
import frame17 from "../assets/img17.jpg";
import frame18 from "../assets/img18.jpg";
import frame19 from "../assets/img19.jpg";
import frame20 from "../assets/img20.jpg";


export default function Gallary() {
  return (
    <div className="gallery">
      <div className="heading-container">
        <h1>OUR Gallery</h1>
      </div>
      
        <div className="gallery-frames">
          <img src={frame3} alt="frame 1" className="frame" />
          <img src={frame12} alt="frame 2" className="frame" />
          <img src={frame1} alt="frame 3" className="frame" />
          <img src={frame4} alt="frame 4" className="frame" />
          <img src={frame6} alt="frame 5" className="frame" />
          <img src={frame7} alt="frame 6" className="frame" />
          <img src={frame8} alt="frame 7" className="frame" />
          <img src={frame9} alt="frame 1" className="frame" />
          <img src={frame10} alt="frame 2" className="frame" />
          <img src={frame11} alt="frame 3" className="frame" />
          <img src={frame2} alt="frame 4" className="frame" />
          <img src={frame13} alt="frame 5" className="frame" />
          <img src={frame14} alt="frame 6" className="frame" />
          <img src={frame15} alt="frame 7" className="frame" />
          <img src={frame16} alt="frame 1" className="frame" />
          <img src={frame17} alt="frame 2" className="frame" />
          <img src={frame18} alt="frame 3" className="frame" />
          <img src={frame19} alt="frame 4" className="frame" />
          <img src={frame20} alt="frame 5" className="frame" />
        </div>
      
    </div>
  );
}
