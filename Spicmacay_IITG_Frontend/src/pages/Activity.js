import React from "react";
import "./Activity.css";

import workshop from "../assets/WorkshopImages.jpg";
import festival from "../assets/festival.jpg";
import movie from "../assets/movie-screening.jpg";

function Activity() {
  return (
    <div className="activity-images">
      <div className="mainactivities">
        <h1>ACTIVITIES</h1>
        <p>
          The activities conducted by the Chapter not only highlighted the
          diversity of Indian arts but also created interactive platforms for
          the campus community to engage directly with the art forms. Events
          like the Virasat festival were particularly notable for showcasing the
          talent of artists from across the nation, emphasizing the Chapter's
          role in enriching the campus's cultural fabric.
        </p>
      </div>
      <div className="activity-cont-1">
        <div className="workshop-cont">
          <img src={workshop} className="frame1" alt="frame1" />
          <h1>Indian Arts and Culture Workshop</h1>
          <p>
            In our club, we conduct workshops to promote Indian classical music
            and dance, providing an immersive learning experience for
            participants. These workshops offer an opportunity to explore the
            nuances of various classical art forms, fostering a deeper
            understanding and appreciation of India’s rich cultural heritage.
          </p>
        </div>
        <div className="festival-cont">
          <img src={festival} className="frame2" alt="frame2" />
          <h1>Celebrating Indian Festival</h1>
          <p>
            In our club, we celebrate Indian festivals to encourage institute
            members to actively participate and experience the vibrant
            traditions and customs of India. These celebrations provide a
            festive atmosphere, fostering unity and cultural awareness among the
            members.
          </p>
        </div>
        <div className="movie-screening-cont">
          <img src={movie} className="frame3" />
          <h1>Screening Movies</h1>
          <p>
            In our club, we organize movie screenings for institution members to
            promote Indian arts and culture, offering a platform to explore the
            rich heritage of India's cinematic and artistic traditions. These
            screenings encourage cultural awareness and inspire a deeper
            connection with the diverse art forms of the country.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
