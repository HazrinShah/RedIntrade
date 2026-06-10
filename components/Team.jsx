"use client";

import React from "react";
import Image from "next/image";

export default function Team() {
  const people = [
    {
      id: "person-dato",
      image: "/people/dato-ahmad-reduan.jpg",
      name: "Dato' Ahmad Reduan",
      role: "Founder & Managing Director",
      profima: "No: 18504",
      desc: "Dato' Ahmad Reduan brings 8 years of experience in event management, 4 years in TV Production, and 15 years of professional experience in project management, policy advisory, business and investor management. His most valuable asset is his Public Relation skills with government administrators, foreign investors in Malaysia, and his team.",
    },
    {
      id: "person-qaseh",
      image: "/people/qaseh-anita.jpg",
      name: "Qaseh Anita Abd. Shukor",
      role: "Director of Production & Talent",
      profima: "No: 12496",
      desc: "Qaseh, an iron lady graduated in hospitality college, has 15 years of experience in hospitality industry, public relations (PR), talent management, Film and TV production and management. Actively involved in artiste management and pre-production for Malaysian production companies and TV stations.",
    },
  ];

  return (
    <section id="team" className="section team-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Our People</div>
          <h2 className="section-title">
            The <span className="accent">Leadership</span>
          </h2>
          <p className="section-desc">
            Driven by passion, experience, and a shared vision for excellence in media and events.
          </p>
        </div>

        <div className="people-grid" id="team-grid">
          {people.map((person) => (
            <div key={person.id} className="people-card" id={person.id}>
              <div className="people-photo-wrap">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="people-photo"
                />
                <div className="people-photo-overlay" />
              </div>
              <div className="people-info">
                <div className="people-meta">
                  <h3 className="people-name">{person.name}</h3>
                  <span className="people-role">{person.role}</span>
                  <span className="people-profima">
                    <i className="fa-solid fa-id-badge"></i> PROFIMA {person.profima}
                  </span>
                </div>
                <p className="people-desc">{person.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
