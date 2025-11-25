import React from "react";
import './content.styles.css';

const Content = () => {
  return (
    <div className="content-section">
      <div className="content-container">
        <p className="content-intro">Stuff I'm proud of</p>
        <div className="content-items">
          <div className="content-item">
            <p className="content-name">Palantir</p>
            <p className="content-description">
                I work on a databases team. I'm introducing multitenancy to our deployments from the ground up and building the infrastructure around it. Learning how to design scalable systems and spot failure modes early.
            </p>
          </div>
          <div className="content-item">
            <p className="content-name">Evergreen Tutors</p>
            <p className="content-description">
                I love teaching. I started by tutoring high-school students in math, then in a year grew it to around 20 tutors and &gt;100 concurrent students. I recently shut it down due to lack of bandwidth and focusing on some other projects. Learned a lot about marketing, hiring, and ops.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
