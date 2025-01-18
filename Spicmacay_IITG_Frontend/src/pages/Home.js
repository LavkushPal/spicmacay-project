import React from "react";
import "./Home.css";
import ImageSlider from "../components/ImageSlider";
import event1 from "../assets/oddisi.jpg";
import event2 from "../assets/virasat.jpg";
import prom_video from "../assets/video_spic.mp4";


function Home() { 
  return (
    <div className="home">
      <ImageSlider />

      {/* move the upcoming events into the image slider */}

      <div className="section">
        <div className="spicmacay-desc">
          <div className="spicmacay-name-letter">
            <video className="video-cont" controls>
              <source src={prom_video} type="video/mp4" />
              Your browser does not support the video tag.    
              </video>
          </div>
          <div className="spicmacay-desc-text">
            <h1 style={{color:"#ffcc00"}}>SPIC MACAY</h1>
            <h2>
              Society for the Promotion of Indian Classical Music And Culture
              Amongst Youth
            </h2>
            <p>
              SPICMACAY is an organization dedicated to introducing the youth to
              the richness of Indian traditional arts. The IIT Guwahati Chapter
              of SPICMACAY has been a cornerstone in bringing this mission to
              life on campus, fostering a vibrant cultural atmosphere. By
              organizing a plethora of events that span workshops and
              performances across various Indian classical music and dance
              genres, the chapter has significantly contributed on nurturing an
              appreciation for India's cultural heritage among students and
              faculty.{" "}
            </p>
          </div>
        </div>

        <h2 style={{color:"#ffcc00"}}> Upcoming Events</h2>
        <div className="upcoming-event-cont">
          <div className="event">
            <div className="event-img">
              <img src={event1} alt="Event 1" />
            </div>
            <p>Odissi Workshop (19-01-2025)</p>
          </div>
          <div className="event">
            <div className="event-img">
              <img src={event2} alt="Event 2" />
            </div>
            <p>VIRASAT (23-01-2025 to 26-01-2025)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
