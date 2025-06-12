import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import kirupa from '../assets/images/kirupa.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={kirupa} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/anandhkirupa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kirupanandanjagadeesan/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kirupanandan Jagadeesan</h1>
          <p>AI & ML Engineer/ Gen AI Engineer/ Data Analyst/ Data Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/anandhkirupa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kirupanandanjagadeesan/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;