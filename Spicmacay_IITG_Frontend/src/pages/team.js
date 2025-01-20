import React from "react";
import "./team.css";
// import "./About"; // Assuming you have a CSS file for styling

import abhishek_convenor from "../assets/gallaray/abhishek_convenor.jpg";
import atul_core from "../assets/gallaray/atul_branding_core.jpg";
import jiwanshu_core from "../assets/gallaray/himanshu_workshop_core.jpg";
import kislay_core from "../assets/gallaray/kislay_event_head.jpg";
import krishna_core from "../assets/gallaray/krishna_event_core.jpg";
import kundavai_head from "../assets/gallaray/kundavai_marketing_head.jpg";
import rahul_core from "../assets/gallaray/rahul_core.jpg";
import sandeep_head from "../assets/gallaray/sandip_marketing_head.jpg";
import lavkush_core from "../assets/gallaray/lavkush_core.jpg";
import amisha_head from "../assets/gallaray/amisha_head.jpg";
import anand_core from "../assets/gallaray/anand_core.jpg";
import ashutosh_core from "../assets/gallaray/ashutosh_core.jpg";
import shaswat_core from "../assets/gallaray/shaswat_core.jpg";
import shivram_head from "../assets/gallaray/shivram_head.jpg";
import sidhrath_event_core from "../assets/gallaray/sidhrath_event_core.jpg";
import umesh_core from "../assets/gallaray/umesh_core.jpg";
import anuka_organiser from "../assets/gallaray/anuka_organiser.jpg";
import rishu_oc from "../assets/gallaray/rishu_oc.jpg";
import Rishav_Head from "../assets/gallaray/Rishav_Head.jpg";
import Adarsh_Head from "../assets/gallaray/Adarsh_Head.jpg";
import ashu_head from "../assets/gallaray/ashu_oc.jpg";
import Anushka from "../assets/gallaray/Anushka.jpg";
import Deepshikha_workshop_core from "../assets/gallaray/Deepshikha_workshop_core.jpg";
import neelmani from "../assets/gallaray/neelmani.jpg";
import shivani_mittal_head from "../assets/gallaray/shivani_mittal_head.jpg";
import Drashti from "../assets/gallaray/Drashti.jpg";




export default function Team() {
  return (
    <div className="team-container">
      <div className="heading-cont">
        <h3>Spic Macay Team(2024-2025)</h3>
        <p>
        SPIC MACAY (Society for the Promotion of Indian Classical Music And Culture Amongst Youth) is a voluntary, non-profit movement dedicated to promoting Indian classical music, arts, and culture among young people. The organization was founded in 1977 by Dr. Kiran Seth, a professor at IIT Delhi, with the aim of introducing students to the rich heritage of Indian art forms and inspiring them to connect with their roots.
        </p>
      </div>

      <div className="team-cont">
        <label>Convenor and Overall Coordinator</label>
        <div className="indi-team-cont">
          <div className="indi-frame">
            <img src={abhishek_convenor} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Abhishek Dwivedi</h3>
              <p>Convenor</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={rishu_oc} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Rishu Jaiswal</h3>
              <p>Overall Coordinator</p>
            </div>
          </div>
        </div>

        <label>Heads</label>
        <div className="indi-team-cont">
          <div className="indi-frame">
            <img src={kundavai_head} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Kundavai Naachiyar</h3>
              <p>Creatives Head</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={sandeep_head} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Sandeep Dindi</h3>
              <p>Branding Head</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={amisha_head} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Amisha Nair</h3>
              <p>Events Head</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={ashu_head} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Ashu Kumar</h3>
              <p>Events Head</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={shivram_head} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Shivaram</h3>
              <p>Media Head</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={Rishav_Head} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Rishav Ghosh</h3>
              <p>Workshop Head</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={Adarsh_Head} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Adarsh Tiwari</h3>
              <p>Creative Head</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={shivani_mittal_head} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Shivani Mittal</h3>
              <p>Hospitality Head</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={Drashti} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Drashti</h3>
              <p>\Marketing Head</p>
            </div>
          </div>
          
        </div>

        <label>Core Team</label>

        <div className="indi-team-cont">
          <div className="indi-frame">
            <img src={lavkush_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Lavkush Pal</h3>
              <p>Media Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={jiwanshu_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Jeevanshu</h3>
              <p>Events Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={krishna_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Krishna Rajeev</h3>
              <p>Events Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={atul_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Atul</h3>
              <p>Events Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={kislay_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Kislay Chaturvedi</h3>
              <p>Events Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={rahul_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Rahul</h3>
              <p> Branding Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={anand_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Anand</h3>
              <p> Hospitality Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={ashutosh_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Ashutosh</h3>
              <p> Media Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={shaswat_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Shaswat</h3>
              <p> Workshop Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={sidhrath_event_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Sidharth</h3>
              <p> Marketing Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={umesh_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Umesh</h3>
              <p> Events Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={Deepshikha_workshop_core} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Deepshikha</h3>
              <p> Workshop Team</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={neelmani} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Neelmani</h3>
              <p> Branding Team</p>
            </div>
          </div>
        </div>

        <label>Organisers</label>
        <div className="indi-team-cont">
          <div className="indi-frame">
            <img src={anuka_organiser} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Anuka Mandal</h3>
              <p> Organiser</p>
            </div>
          </div>
          <div className="indi-frame">
            <img src={Anushka} alt="frame 1" className="frame-img" />
            <div className="indi-desc">
              <h3>Anushka</h3>
              <p> Organiser</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
