import React from "react";
import PartnersMarquee from "./PartnersMarquee";

export default function WhyUs() {
  return (
    <section className="section whyus-section">
      <div className="container">
        <div className="whyus-inner">
          <div className="whyus-text" id="whyus-text">
            <div className="section-eyebrow">Why Choose Us</div>
            <h2 className="section-title">
              Perfection Is Not <span className="accent">An Option.</span>
              <br />
              It&apos;s Our Standard.
            </h2>
            <p className="about-text">
              Every project we take on is treated with the same intensity — whether it&apos;s a national
              broadcast event reaching millions or an intimate corporate video. Our team of skilled
              professionals brings years of industry expertise to deliver results that exceed
              expectations.
            </p>
            <div className="whyus-features">
              <div className="why-feat" id="why-1">
                <div className="why-icon">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div>
                  <h4>Fast Turnaround</h4>
                  <p>We meet deadlines without compromising quality.</p>
                </div>
              </div>
              <div className="why-feat" id="why-2">
                <div className="why-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h4>Trusted Partner</h4>
                  <p>Serving government and private clients since 2015.</p>
                </div>
              </div>
              <div className="why-feat" id="why-3">
                <div className="why-icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div>
                  <h4>National Reach</h4>
                  <p>Projects executed across Malaysia and internationally.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="whyus-visual" id="whyus-visual">
            <div className="whyus-card-stack">
              <div className="wc wc-1">
                <i className="fa-solid fa-film"></i>
                <span>200+ Projects</span>
              </div>
              <div className="wc wc-2">
                <i className="fa-solid fa-users"></i>
                <span>50+ Clients</span>
              </div>
              <div className="wc wc-3">
                <i className="fa-solid fa-star"></i>
                <span>9+ Years</span>
              </div>
              <div className="wc-center">
                <svg viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg">
                  <text
                    x="2"
                    y="30"
                    fontFamily="Outfit, sans-serif"
                    fontWeight="900"
                    fontSize="26"
                    fill="#C8102E"
                  >
                    RED
                  </text>
                  <text
                    x="63"
                    y="30"
                    fontFamily="Outfit, sans-serif"
                    fontWeight="300"
                    fontSize="26"
                    fill="#fff"
                  >
                    IN
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <PartnersMarquee />
      </div>
    </section>
  );
}
