"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export default function SocialMedia() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      } catch (e) {
        console.error("Error reloading social embeds:", e);
      }
    }
  }, []);

  return (
    <section id="social" className="section social-section">
      <div id="fb-root"></div>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
        nonce="redintrade2024"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.FB) window.FB.XFBML.parse();
        }}
      />
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm) window.instgrm.Embeds.process();
        }}
      />

      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Stay Connected</div>
          <h2 className="section-title">
            Follow Our <span className="accent">Journey</span>
          </h2>
          <p className="section-desc">
            Stay updated with our latest projects, behind-the-scenes content, and company news.
          </p>
        </div>

        <div className="social-grid" id="social-grid">
          {/* Facebook Embed */}
          <div className="social-embed-card" id="social-facebook">
            <div className="social-embed-header">
              <div className="social-platform-icon fb-icon">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div style={{ flex: 1 }}>
                <h3>Facebook</h3>
                <a
                  href="https://www.facebook.com/redintradesdnbhd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="fb-link"
                >
                  @redintradesdnbhd
                </a>
              </div>
              <a
                href="https://www.facebook.com/redintradesdnbhd/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-follow-btn"
                id="fb-follow"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Follow
              </a>
            </div>
            <div className="social-embed-body">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/redintradesdnbhd/"
                data-tabs="timeline"
                data-width="500"
                data-height="500"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              ></div>
            </div>
          </div>

          {/* Instagram Embed */}
          <div className="social-embed-card" id="social-instagram">
            <div className="social-embed-header">
              <div className="social-platform-icon ig-icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div style={{ flex: 1 }}>
                <h3>Instagram</h3>
                <a
                  href="https://www.instagram.com/redintrade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="ig-link"
                >
                  @redintrade
                </a>
              </div>
              <a
                href="https://www.instagram.com/redintrade/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-follow-btn"
                id="ig-follow"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Follow
              </a>
            </div>
            <div className="social-embed-body instagram-embed-body">
              <div className="ig-grid" id="ig-manual-grid">
                <div className="ig-post-wrap">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/redintrade/"
                    data-instgrm-version="14"
                    style={{
                      background: "#fff",
                      border: 0,
                      borderRadius: "3px",
                      boxShadow:
                        "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                      margin: "0 auto",
                      maxWidth: "540px",
                      minWidth: "326px",
                      padding: 0,
                      width: "99.375%",
                    }}
                  ></blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social CTA */}
        <div className="social-cta-row" id="social-cta-row">
          <a
            href="https://www.facebook.com/redintradesdnbhd/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill fb-pill"
            id="pill-fb"
          >
            <i className="fa-brands fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://www.instagram.com/redintrade/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill ig-pill"
            id="pill-ig"
          >
            <i className="fa-brands fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
