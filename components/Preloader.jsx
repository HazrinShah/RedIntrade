"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      window.dispatchEvent(new Event("site-loaded"));
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={hidden ? "hidden" : ""}>
      <div className="preloader-inner">
        <div className="preloader-logo">
          <svg viewBox="0 0 330 60" xmlns="http://www.w3.org/2000/svg">
            <text
              x="165"
              y="48"
              textAnchor="middle"
              fontFamily="Outfit, sans-serif"
              fontSize="42"
              letterSpacing="-1"
            >
              <tspan fontWeight="900" fill="#C8102E">RED</tspan>
              <tspan fontWeight="300" fill="#ffffff">INTRADE</tspan>
            </text>
          </svg>
        </div>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
      </div>
    </div>
  );
}
