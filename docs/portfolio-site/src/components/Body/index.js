import React from 'react';
import './body.css'; 
import coops from './coopsBadge.png';
import sightplan from './VUITag.png';
import petvet from './petVetBadge.png';
import seaturtle from './stcTag.png';

function Body() {
    return(
      <div>
        <br></br>
        <h2>nice to meet you!</h2>
        <br></br>
        <div className="row">
          <div className="column-left">
            <a href="#skills"><button className="button">Discover Skills</button></a>
            <a href="#work"><button className="button">Explore Work</button></a>
            <a href="https://e38ba876-57ee-45c0-9867-e8e440bcf681.filesusr.com/ugd/ecd191_f19e79cb415e4ea684cc7b5b2e30b905.pdf" target="_blank"><button className="button">View Resume</button></a>
          </div>
          <div className="column-right">
            <h4>ABOUT ME</h4>
            <p>I'm passionate about defining what it is people
            look for in design.</p>
            <p>I am dedicated to creating experience-driven 
            products and am endlessly curious about the relationship
            people have with technology.</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 id="skills" className="brown-text">skills i'm mastering</h2>
        <br></br>
        <div className="row">
          <div className="column-left">
            <h4>DESIGN</h4>
            <p>Creating voice and web experiences that ease interaction,
              mitigate errors, and leave positive impressions.</p>
            <br></br>
            <h6>VOICE INTERACTION DESIGN</h6>
            <div id="progressbar1"><div></div></div>
            <h6>UX WRITING</h6>
            <div id="progressbar2"><div></div></div>
            <h6>USER CENTERED DESIGN</h6>
            <div id="progressbar3"><div></div></div>
          </div>
          <div className="column-right">
            <h4>RESEARCH</h4>
            <p>Empowering individuals to take control over the interfaces
              they interact with by informing and leading participants.</p>
            <br></br>
            <h6>HUMAN COMPUTER INTERACTION</h6>
            <div id="progressbar4"><div></div></div>
            <h6>USER EXPERIENCE RESEARCH</h6>
            <div id="progressbar5"><div></div></div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 id="work">work i'm proud of</h2>
        <p className="center-text">The work I've done to refine my design skills, develop a deeper
          understanding of user experience, and become more empathetic towards
          what constitutes a successful interaction.</p>
        <br></br>
        <div className="row">
          <div className="column-left">
            <h4 className="badge-header">CO-OPS RESEARCH</h4>
            <p className="badge-text">Discovering how communities can empower one another
              to protect mobile data.</p>
              <img className="work-badge" src={coops} alt="co-ops image"></img>
            <br></br>

            <h4 className="badge-header">SIGHTPLAN VUI</h4>
            <p className="badge-text">Creating an industry leading natural language
              understanding unit</p>
            <img className="work-badge" src={sightplan} alt="sightplan image"></img>
            <br></br>
            <br></br>
            <br></br>

          </div>
          <div className="column-right">
            <h4 className="badge-header">PETVET APP</h4>
            <p className="badge-text">Creating a response for emergency pet scenarios through
              intuitive design</p>
            <img className="work-badge" src={petvet} alt="sightplan image"></img>
            <br></br>

            <h4 className="badge-header">SEA TURTLE CONSERVANCY</h4>
            <p className="badge-text">Modernizing a charitable brand in order to help build appeal</p>
            <img className="work-badge" src={seaturtle} alt="sightplan image"></img>
            <br></br>
            <br></br>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    )
}

export default Body; 