import React from "react";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual" id="about-visual">
            <div className="about-img-wrapper">
              <div className="about-img-main">
                <div className="about-img-placeholder">
                  <i className="fa-solid fa-video"></i>
                </div>
              </div>
              <div className="about-badge-float">
                <i className="fa-solid fa-award"></i>
                <span>Est. 2015</span>
              </div>
              <div className="about-glow"></div>
            </div>
          </div>
          <div className="about-content" id="about-content">
            <div className="section-eyebrow">Who We Are</div>
            <h2 className="section-title">
              Malaysia&apos;s Premier <span className="accent">Media & Events</span> Company
            </h2>
            <p className="about-lead">
              <strong>Redintrade Sdn Bhd</strong> is a multi-business powerhouse incorporated in 2015, headquartered in Kuala Lumpur. We blend creative storytelling with creative and technical excellence to deliver world-class media productions and unforgettable events.
            </p>
            <p className="about-text">
              From high-impact TV dramas and documentaries to nationally-scaled events and corporate workshops, we serve both government and private sectors with unwavering commitment to quality and professionalism.
            </p>
            <div className="about-pillars">
              <div className="pillar">
                <i className="fa-solid fa-check-circle"></i>
                <span>Government & Private Sector</span>
              </div>
              <div className="pillar">
                <i className="fa-solid fa-check-circle"></i>
                <span>National & International Reach</span>
              </div>
              <div className="pillar">
                <i className="fa-solid fa-check-circle"></i>
                <span>End-to-End Production</span>
              </div>
              <div className="pillar">
                <i className="fa-solid fa-check-circle"></i>
                <span>MATRADE Registered</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary" id="about-cta">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
