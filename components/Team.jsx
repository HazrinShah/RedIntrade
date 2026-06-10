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
      certLabel: "PROFIMA",
      cert: "No: 18504",
      desc: "Dato' Ahmad Reduan brings 8 years of experience in event management, 4 years in TV Production, and 15 years of professional experience in project management, policy advisory, business and investor management. His most valuable asset is his Public Relation skills with government administrators, foreign investors in Malaysia, and his team.",
    },
    {
      id: "person-haslinda",
      image: "",
      name: "Haslinda Hashim",
      role: "Trainer & Facilitator",
      certLabel: "CERT",
      cert: "TOT HRDF",
      desc: "Haslinda has over 26 years of experience in education. She is a Level 2 Certified Practitioner by the Malaysia TRIZ Innovation Association (MyTRIZ) and has trained thousands of participants across schools, universities, and the corporate sector. She is also a Master Trainer under HRDF, highly experienced in conducting Training of Trainers (TOT) programs.",
    },
    {
      id: "person-rahman",
      image: "",
      name: "Abdul Rahman Roseley",
      role: "Certified Trainer",
      certLabel: "CERT",
      cert: "TOT HRDF",
      desc: "Abdul Rahman has over 30 years of experience in arts, lectures, and motivation. He is a certified trainer for Close Protection and Peace Training (CPPTS) and Global Protection (GPS). In 2017, he was awarded a qualified trainer certificate in the field of Bodyguard by the Selangor and Federal Territory National Dual Training System at UNITEN.",
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
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="people-photo"
                  />
                ) : (
                  <div className="avatar-placeholder">
                    <i className="fa-solid fa-user"></i>
                  </div>
                )}
                <div className="people-photo-overlay" />
              </div>
              <div className="people-info">
                <div className="people-meta">
                  <h3 className="people-name">{person.name}</h3>
                  <span className="people-role">{person.role}</span>
                  <span className="people-profima">
                    <i className="fa-solid fa-id-badge"></i> {person.certLabel} {person.cert}
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
