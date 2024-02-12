import React from "react";
import "./About.css";

const About = () => {
  return (
    
    <div className="containerabout">
      
      <h1 className="heading"
        
      >
        🚀 Welcome to My React World!
      </h1>
      <h4 style={{ color: "azure" }}>Greetings! I'm Harshita pathak, I am proficient in languages like C ,C++. A DSA learner. I know languages like HTML, CSS, Javascript, React.js, Node.js (MERN) and bootstrap etc </h4>
      
      
      <h4 style={{ color: "azure" }}>Some of the skills i have learned are:</h4>
      <div id="skills">
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/html-5.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img class="skillicon" src={require("./pictures/css.png")} alt="." />
        </div>
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/java-script.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/bootstrap.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/react.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img class="skillicon" src={require("./pictures/git.png")} alt="." />
        </div>
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/hierarchical-structure.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img class="skillicon" src={require("./pictures/c-.png")} alt="." />
        </div>
      </div>
    </div>
  );
};

export default About;
