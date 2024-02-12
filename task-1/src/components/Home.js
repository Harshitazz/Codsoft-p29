/*import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
const Home=(props)=>{
    return(
        <div className="container1">
            <div >
            <img className="profilepic" src={require("./pictures/Screenshot_2024-01-20_234928-removebg-preview.png")} alt="harshita" />
            </div>
            
            <div id="home" className=" card">
                <h1>Harshita Pathak</h1>
                <p className="title">Front-end develpoer</p>
                <p style={{textDecoration:'underline', fontSize:"20px"}}>A KEEN LEARNER</p>
                <p>A passionate React developer dedicated to crafting engaging and dynamic user experiences on the web. With a keen eye for detail and a commitment to writing clean, modular code, I thrive in turning creative ideas into seamless, interactive applications.</p>
                <ul>
                    <li> <a href="https://www.linkedin.com/in/harshita-pathak-a557b6256/"  ><i className="fa fa-linkedin fa-lg" style={{padding: '5px',  maxWidth: '40%'}} ></i></a></li>
                    <li><a href="https://github.com/Harshitazz" ><i className="fa fa-github fa-lg"></i></a></li>
                </ul>
                
                <Link className="button" to={`/contact`} style={{textDecoration:'none'}}>Contact</Link> 
            </div>
           
            
            
        </div>
    );
};

export default Home;*/

import React from "react";
import "./Home.css"; // Import your CSS file for styling
import imageurl from "./pictures/1-removebg-preview.png";

const Home = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${imageurl})` }}>
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="content">
          <h1>Harshita Pathak</h1>
          <p className="title">Front-end develpoer</p>
          <p >
          A passionate React developer dedicated to crafting engaging and
            dynamic user experiences on the web.
          </p>
          <ul>

                    <li> <a href="https://www.linkedin.com/in/harshita-pathak-a557b6256/"  ><i className="fa fa-linkedin fa-lg" style={{padding: '5px',  maxWidth: '40%'}} ></i></a></li>
                    <li><a href="mailto:pathakharshita04@gmail.com" ><i className="fa fa-envelope fa-lg"></i></a></li>

                    <li><a href="https://github.com/Harshitazz" ><i className="fa fa-github fa-lg"></i></a></li>
                </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
