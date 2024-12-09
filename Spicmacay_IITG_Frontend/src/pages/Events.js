import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="events">
      <div className="mainevents">
        <h1><span style={{ color: "#145B88", fontWeight: "bold" }}> Events</span></h1>
        <p>Here are some upcoming events hosted by SPIC MACAY.</p>
      </div>
      <div classname="virasat">
        <h2><span style={{ color: "#145B88", fontWeight: "bold" }}> VIRASAT 2023-2024</span></h2>
        <h4>Movie Screening-Gandhi ( 02-10-2023 ) </h4>
        <p>
          SPIC MACAY IIT Guwahati honored Gandhi Jayanti with a "Gandhi" movie
          screening, quiz, and refreshments, fostering community among students.
        </p>
        <h4>Fresher's Orientation ( 02-10-2023 ) </h4>
        <p></p>
      </div>
    </div>
  );
}

export default Events;
