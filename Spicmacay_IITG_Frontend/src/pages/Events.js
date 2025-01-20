import React from "react";
import "./Events.css";

import frame1 from "../assets/img1.JPG";
import frame2 from "../assets/img2.JPG";
import frame3 from "../assets/img3.JPG";
import frame4 from "../assets/img4.JPG";
import frame5 from "../assets/img5.JPG";
import frame6 from "../assets/img6.JPG";
import frame7 from "../assets/img7.JPG";

function Events() {
  return (
    <div className="events">
      <div className="mainevents">
        {/* <h1>
          <span style={{ color: "#145B88", fontWeight: "bold" }}> Events</span>
        </h1> */}
        <p>Here are events of VIRASAT(2025) hosted by SPIC MACAY.</p>
      </div>

      <div classname="virasat">
        <h2>
          <span style={{ color: "#145B88", fontWeight: "bold" }}>
            VIRASAT 2025
          </span>
        </h2>
      </div>

      <div className="event-images">
        <div className="event-cont-1">
          <div className="event-cont">
            <img src={frame7} className="frame7" alt="frame1" />
            <h3 >Odissi - Madhulita Mohapatra ( 23-01-2025 ) </h3>
            <p>
              Madhulita Mohapatra, founder of Nrityantar Academy in Bengaluru,
              is a celebrated Odissi dancer known for her innovative
              choreographies. Her production Siya Ram: The Eternal Saga presents
              the Ramayana from Sita’s perspective, blending tradition with
              contemporary storytelling. She has performed at prestigious events
              like the Naman festival, showcasing the timeless beauty of Odissi
              dance./
            </p>
          </div>
          <div className=" event-cont">
            <img src={frame5} className="frame5" alt="frame2" />
            <h3>
              Rajasthani Folk Music - Bhungar Khan Manganiyar ( 23-01-2025 ){" "}
            </h3>
            <p>
              Bhungar Khan Manganiyar, a renowned Rajasthani folk musician, is
              celebrated for his soulful vocals and mastery of traditional
              instruments like the khartal. Leading his ensemble, he brings the
              rich cultural heritage of Rajasthan to life through powerful
              renditions of folk songs, captivating audiences at prestigious
              events. His performances beautifully showcase the essence of
              Rajasthan's vibrant musical traditions.
            </p>
          </div>
          <div className="event-cont">
            <img src={frame2} className="frame2" />
            <h3>Flute - Sikkil Mala Chaandrasekar ( 24-01-2025 ) </h3>
            <p>
              Sikkil Mala Chandrasekar, a distinguished Carnatic flautist, is
              celebrated for her virtuosic performances that blend technical
              precision with deep emotional expression. Trained by her mother
              and aunt, the renowned Sikkil Sisters, she has graced numerous
              prestigious platforms, including the 2023 Ziro Festival,
              captivating audiences with the rich tonal quality of her flute
              renditions.
            </p>
          </div>
          
        </div>

        <div className="event-cont-2">
        <div className=" event-cont">
            <img src={frame1} className="frame1" />
            <h3>Chhau - Tamal Kanti Rajak ( 24-01-2025 ) </h3>
            <p>
              Tamal Kanti Rajak is a distinguished performer of Purulia Chhau, a
              traditional martial art dance from West Bengal known for its
              vibrant costumes and dynamic storytelling. Leading his ensemble,
              he has captivated audiences at various cultural events, including
              a performance at Mewar University in April 2023, where his team
              depicted narratives like Mahishasur Mardini through intricate
              dance movements and expressive masks
            </p>
          </div>
          <div className=" event-cont">
            <img src={frame3} className="frame3" />
            <h3>Hindusthani - Jayateerth Mevundi ( 25-01-2025) </h3>
            <p>
              Pandit Jayateerth Mevundi, a renowned Hindustani classical
              vocalist of the Kirana gharana, is celebrated for his soulful
              renditions and mastery over ragas. Known for his powerful voice
              and spiritual depth, his performances often include bhajans and
              abhangs, reflecting a deep sense of devotion. He has graced
              prestigious platforms, captivating audiences with his emotive and
              evocative singing.
            </p>
          </div>
          <div className=" event-cont">
            <img src={frame6} className="frame6" />
            <h3>Sattriya - Anwesha Mahanta ( 25-01-2025 ) </h3>
            <p>
              Dr. Anwesa Mahanta is a distinguished Sattriya dancer and scholar
              from Assam, India, celebrated for her dynamic performances and
              in-depth research into this classical dance form. A disciple of
              Bayanacharya Ghanakanta Bora, Padmashri, she has graced numerous
              prestigious platforms worldwide, captivating audiences with her
              expressive storytelling and dedication to preserving the Sattriya
              tradition.
            </p>
          </div>

        </div>
        <div className="event-cont-3">
        <div className=" event-cont">
            <img src={frame4} className="frame4" />
            <h3>Qawwali - Azam Nizami Sultan Ji Brothers ( 26-01-2025 ) </h3>
            <p>
              The Nizami Sultan Ji Brothers are renowned Qawwali artists,
              celebrated for their soulful and powerful renditions of Sufi
              music. They have performed at prestigious events worldwide,
              captivating audiences with their emotional depth and mastery over
              the art of Qawwali. Their performances evoke a deep sense of
              devotion and spirituality, making them prominent figures in the
              Sufi music scene.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Events;
