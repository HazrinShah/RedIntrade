"use client";

import React from "react";

export default function PartnersMarquee() {
  const partners = [
    { name: "IKIM MEDIA", icon: "fa-solid fa-microphone-lines" },
    { name: "RTM BROADCAST", icon: "fa-solid fa-tower-broadcast" },
    { name: "TV3 MALAYSIA", icon: "fa-solid fa-tv" },
    { name: "ASTRO PRODUCTION", icon: "fa-solid fa-satellite" },
    { name: "FINAS MALAYSIA", icon: "fa-solid fa-clapperboard" },
    { name: "JAKIM PARTNER", icon: "fa-solid fa-mosque" },
    { name: "MINISTRY OF COMMUNICATIONS", icon: "fa-solid fa-building" },
  ];

  const doubledPartners = [...partners, ...partners];

  return (
    <div className="partners-marquee-container">
      <div className="section-eyebrow" style={{ textAlign: "center", marginBottom: "24px" }}>
        Trusted Network & Affiliations
      </div>
      
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubledPartners.map((partner, index) => (
            <div key={index} className="marquee-item">
              <i className={`${partner.icon} partner-icon`}></i>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partners-marquee-container {
          width: 100%;
          padding: 40px 0 10px 0;
          overflow: hidden;
          background: transparent;
          position: relative;
        }

        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
          display: flex;
        }
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: "";
          height: 100%;
          position: absolute;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-wrapper::before {
          left: 0;
          top: 0;
          background: linear-gradient(to right, #0A0A0A 0%, transparent 100%);
        }
        .marquee-wrapper::after {
          right: 0;
          top: 0;
          background: linear-gradient(to left, #0A0A0A 0%, transparent 100%);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeRun 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          margin: 0 16px;
          background: var(--dark-2);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          cursor: pointer;
        }
        .marquee-item:hover {
          border-color: rgba(200, 16, 46, 0.35);
          background: linear-gradient(135deg, #161616 0%, #1a0305 100%);
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }

        .partner-icon {
          font-size: 1.15rem;
          color: var(--red);
        }
        .partner-name {
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--gray-2);
          white-space: nowrap;
        }
        .marquee-item:hover .partner-name {
          color: var(--white);
        }

        @keyframes marqueeRun {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee-wrapper::before,
          .marquee-wrapper::after {
            width: 60px;
          }
          .marquee-item {
            padding: 12px 24px;
            margin: 0 10px;
          }
        }
      `}</style>
    </div>
  );
}
