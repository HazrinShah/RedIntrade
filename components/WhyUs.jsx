import React from "react";
import Image from "next/image";
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
            <div className="whyus-image-wrapper">
              <div className="whyus-img-1">
                <Image
                  src="/services/videography.jpg"
                  alt="Videography Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="whyus-img-2">
                <Image
                  src="/services/equipment-rental.png"
                  alt="Equipment Rental"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="whyus-accent-box"></div>
            </div>
          </div>
        </div>
        <PartnersMarquee />
      </div>
    </section>
  );
}
