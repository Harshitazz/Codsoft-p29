

import React from 'react';
import './ProjectItem.css'; // Import your CSS file for the Card component

const ProjectItem = ({ imageUrl, title, githuburl, tech }) => {
  return (
    <div className="fancy-card">
      <div className="card-image-container">
        <img src={imageUrl} alt="Card Image" className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h5 className=" my-3" style={{fontSize:'15px'}}>{tech}</h5>
        <div className="card-buttons">
          <a className="button1" href={githuburl} style={{color:'white'}} >VIEW CODE</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

