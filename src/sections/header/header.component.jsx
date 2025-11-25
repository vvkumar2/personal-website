import React from "react";
import './header.styles.css';

const Header = () => {
  return (
    <div className="header-section">
      <div className="header-content">
        <h1 className="header-name">Varun Kumar</h1>
        <p className="header-location">San Francisco, CA</p>
        <p className="header-section-title">About me</p>
        <div className="header-text">
          <p>
            I'm a software engineer. I grew up in Buffalo, went to UCLA, and now live in San Francisco. 
            I enjoy watching movies, road biking, and going to the gym.
          </p>
          <p>
            I'm not focused on a specific problem space; I'm more interested in how we can use AI to improve efficiency across <em>any</em> industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
