"use client";

import React from "react";
import Image from "next/image";

const servicesData = [
  {
    id: "service-equipment",
    image: "/services/equipment-rental.png",
    title: "Equipment Rental",
  },
  {
    id: "service-drama",
    image: "/services/drama-production.jpeg",
    title: "Drama Production",
  },
  {
    id: "service-event",
    image: "/services/event-management.jpg",
    title: "Event Management",
  },
  {
    id: "service-team",
    image: "/services/team-building.jpg",
    title: "Team Building",
  },
  {
    id: "service-artists",
    image: "/services/artists-management.jpg",
    title: "Artists Management",
  },
  {
    id: "service-video",
    image: "/services/videography.jpg",
    title: "Corporate Video, Event Videography & Photography",
  },
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title">
            Our <span className="accent">Core Services</span>
          </h2>
          <p className="section-desc">
            From concept to completion, we handle every aspect of your media and event needs with precision and passion.
          </p>
        </div>

        <div className="services-img-grid" id="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} id={service.id} className="svc-card">
              <div className="svc-img-wrap">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="svc-img"
                />
                <div className="svc-overlay" />
                <div className="svc-shine" />
              </div>
              <div className="svc-info">
                <h3 className="svc-title">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
