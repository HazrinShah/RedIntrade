"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [particles, setParticles] = useState([]);
  const [animateHero, setAnimateHero] = useState(false);

  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  const statsRef = useRef(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const particleArray = Array.from({ length: 28 }).map((_, i) => {
        const size = Math.random() * 5 + 2;
        return {
          id: i,
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 18 + 10}s`,
          animationDelay: `${Math.random() * 10}s`,
          opacity: Math.random() * 0.5 + 0.1,
        };
      });
      setParticles(particleArray);
    }, 0);

    const handleSiteLoaded = () => {
      setTimeout(() => {
        setAnimateHero(true);
      }, 50);
    };

    window.addEventListener("site-loaded", handleSiteLoaded);

    const fallback = setTimeout(() => {
      setAnimateHero(true);
    }, 2500);

    return () => {
      clearTimeout(timerId);
      window.removeEventListener("site-loaded", handleSiteLoaded);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const statsEl = statsRef.current;
    if (!statsEl) return;

    const runCountUp = (targetVal, setter) => {
      const duration = 1800;
      const start = performance.now();

      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setter(Math.round(eased * targetVal));

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCountUp(11, setYears);
            runCountUp(60, setProjects);
            runCountUp(50, setClients);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(statsEl);

    return () => {
      if (statsEl) observer.unobserve(statsEl);
    };
  }, []);

  const springVariant = (delay) => ({
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
        delay: delay,
      },
    },
  });

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <div className="hero-particles" id="hero-particles">
          {particles.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                width: p.width,
                height: p.height,
                left: p.left,
                animationDuration: p.animationDuration,
                animationDelay: p.animationDelay,
                opacity: p.opacity,
              }}
            />
          ))}
        </div>
      </div>
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          id="hero-badge"
          initial="hidden"
          animate={animateHero ? "visible" : "hidden"}
          variants={springVariant(0)}
        >
          <span className="badge-dot"></span>
          Kuala Lumpur, Malaysia
        </motion.div>
        
        <motion.h1
          className="hero-title"
          id="hero-title"
          initial="hidden"
          animate={animateHero ? "visible" : "hidden"}
          variants={springVariant(0.12)}
        >
          <span className="title-line">Crafting Stories,</span>
          <span className="title-line accent">Creating Impact.</span>
        </motion.h1>
        
        <motion.p
          className="hero-sub"
          id="hero-sub"
          initial="hidden"
          animate={animateHero ? "visible" : "hidden"}
          variants={springVariant(0.24)}
        >
          A multi-business company specializing in media production, broadcasting, event & artist management — doing things to perfection.
        </motion.p>
        
        <motion.div
          className="hero-actions"
          id="hero-actions"
          initial="hidden"
          animate={animateHero ? "visible" : "hidden"}
          variants={springVariant(0.36)}
        >
          <a href="#services" className="btn btn-primary" id="hero-cta-primary">
            Our Services
          </a>
          <a href="#portfolio" className="btn btn-ghost" id="hero-cta-secondary">
            <i className="fa-solid fa-play-circle"></i> View Portfolio
          </a>
        </motion.div>
        
        <motion.div
          className="hero-stats"
          id="hero-stats"
          ref={statsRef}
          initial="hidden"
          animate={animateHero ? "visible" : "hidden"}
          variants={springVariant(0.48)}
        >
          <div className="stat-item">
            <span className="stat-num">{years}</span>
            <span className="stat-unit">+</span>
            <span className="stat-label">Years Active</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">{projects}</span>
            <span className="stat-unit">+</span>
            <span className="stat-label">Training &amp; Courses Provided</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">{clients}</span>
            <span className="stat-unit">+</span>
            <span className="stat-label">Clients Served</span>
          </div>
        </motion.div>
      </div>
      <a href="#about" className="hero-scroll" id="hero-scroll" aria-label="Scroll down">
        <i className="fa-solid fa-chevron-down"></i>
      </a>
    </section>
  );
}
