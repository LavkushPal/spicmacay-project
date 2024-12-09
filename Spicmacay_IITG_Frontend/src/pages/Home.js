import React from "react";
import "./Home.css";
import ImageSlider from "../components/ImageSlider";

function Home() {
  return (
    <div className="home">
      <ImageSlider />

      {/* move the upcoming events into the image slider */}
      
      <div className="section">
        <h2>Upcoming Events</h2>
        <div className="event">
          <img src="https://spicmacay.org/event-image1.jpg" alt="Event 1" />
          <p>Event Name 1 - Date</p>
        </div>
        <div className="event">
          <img src="https://spicmacay.org/event-image2.jpg" alt="Event 2" />
          <p>Event Name 2 - Date</p>
        </div>  
      </div>

      {/* here some popular dances will be showing up */}
      {/* <div className="popular-dances">
        <div className="dances" id="dance-1">
          <img> image-1</img>
          <p>description for that</p>
        </div>
        <div className="dances" id="dance-2">
          <img> image-2</img>
          <p>description for that</p>
        </div>
        <div className="dances" id="dance-3">
          <img> image-3</img>
          <p>description for that</p>
        </div>
      </div> */}

      {/* here what spicmacay does will be showing up */}
      {/* <div className="what-does-spm">
        <h1> What does SPICMACAY do ?</h1>
        <ul>
          <li> point-1</li>
          <li> point-2</li>
          <li> point-3</li>
          <li> point-4</li>
        </ul>
      </div> */}

      {/* here some dance screenshot will be showing up with the description*/}
      {/* <div className="pfmc-snap-container">
        <image></image>
        <p>description , what and when and who performed</p>
      </div>
      <div className="pfmc-snap-container">
        <image></image>
        <p>description , what and when and who performed</p>
      </div>
      <div className="pfmc-snap-container">
        <image></image>
        <p>description , what and when and who performed</p>
      </div>
      <div className="pfmc-snap-container">
        <image></image>
        <p>description , what and when and who performed</p>
      </div> */}

      {/* here about magazine will be showing up */}

    </div>
  );
}

export default Home;
