"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const filterBtns = [
    { label: "All", filter: "all" },
    { label: "Production", filter: "production" },
  ];

  const portfolioItems = [
    {
      id: "port-1",
      cat: "production",
      catLabel: "Majalah TV",
      title: "Futurepreneurs",
      desc: "Sebuah Majalah TV — Menampilkan usahawan yang jarang didendang",
      image: "/portfolio/futurepreneurs.png",
      featured: false,
      details: {
        client: "RTM / Berita RTM",
        year: "2022",
        role: "Penerbitan, Pengarahan, Pasca-Produksi",
        fullDesc:
          "Futurepreneurs – Sebuah Majalah TV yang menampilkan usahawan yang jarang didendang, berevolusi, pemikiran di luar kotak, atau wawasan dalam pasaran antarabangsa. Teruskan bersama kami untuk mengupas kisah-kisah usahawan yang mencipta masa depan!",
      },
    },
    {
      id: "port-2",
      cat: "production",
      catLabel: "Rancangan Kanak-Kanak",
      title: "Bobo, Wawa dan Kura",
      desc: "Rancangan kanak-kanak — mengembara & mengenali alam flora dan fauna",
      image: "/portfolio/bobo-wawa-kura.jpg",
      featured: false,
      details: {
        client: "Red Intrade Sdn Bhd",
        year: "2023",
        role: "Penerbitan, Pengarahan, Penyuntingan",
        fullDesc:
          "Sebuah rancangan kanak-kanak yang akan mengembara dan mengenali binatang serta alam flora dan fauna. Ada juga kisah tauladan dan Kak DIY yang akan mengajar adik-adik membuat kraftangan yang mudah. Dan juga ada abang RENJER yang membawa adik-adik menikmati makanan tradisional, mengenali permainan tradisional dan pakaian tradisional.",
      },
    },
    {
      id: "port-3",
      cat: "production",
      catLabel: "Drama TV",
      title: "Kasih Abang",
      desc: "Kisah pengorbanan, kasih sayang, kesetiaan dan kenegaraan",
      image: "/portfolio/kasih-abang.jpg",
      featured: false,
      details: {
        client: "TV2 / FINAS",
        year: "2022",
        role: "Pre-produksi, Penggambaran, Pasca-Produksi, Reka Bunyi",
        fullDesc:
          "Sebuah kisah tentang pengorbanan, kasih sayang, kesetiaan dan juga kenegaraan. Ditayangkan di TV2 pada 12 Disember 2022 (Isnin) pukul 9:00 P.M, menampilkan Aman Aziz sebagai Idris.",
      },
    },

  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Our Work</div>
          <h2 className="section-title">
            Selected <span className="accent">Projects</span>
          </h2>
          <p className="section-desc">
            A showcase of our finest work across media production, events, and beyond.
          </p>
        </div>

        <div className="portfolio-filter" id="portfolio-filter">
          {filterBtns.map((btn) => (
            <button
              key={btn.filter}
              className={`filter-btn ${activeFilter === btn.filter ? "active" : ""}`}
              onClick={() => handleFilterClick(btn.filter)}
              id={`filter-${btn.filter}`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid" id="portfolio-grid">
          {portfolioItems.map((item) => {
            const isVisible = activeFilter === "all" || item.cat === activeFilter;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`portfolio-item ${item.featured ? "featured-port" : ""} ${
                  isVisible ? "" : "hidden"
                }`}
                style={{
                  animation: isVisible ? "fadeInUp 0.5s ease forwards" : "none",
                }}
                onClick={() => openModal(item)}
              >
                <div className="portfolio-img">
                  {item.image ? (
                    <div className="port-img-real">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ) : (
                    <div className="port-img-placeholder">
                      <i className={item.icon}></i>
                    </div>
                  )}
                </div>
                <div className="portfolio-overlay">
                  <span className="port-cat">{item.catLabel}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PORTFOLIO DETAIL MODAL */}
      {selectedProject && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <i className="fa-solid fa-xmark"></i>
            </button>

            <span className="port-cat" style={{ marginBottom: "16px", display: "inline-block" }}>
              {selectedProject.catLabel}
            </span>
            <h3 className="modal-title">{selectedProject.title}</h3>

            <div className="modal-grid">
              <div className="modal-visual">
                {selectedProject.image ? (
                  <div className="modal-img-wrap">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      sizes="400px"
                      style={{ objectFit: "cover", borderRadius: "var(--radius)" }}
                    />
                  </div>
                ) : (
                  <>
                    <div className="modal-icon-wrap">
                      <i className={selectedProject.icon}></i>
                    </div>
                    <div className="modal-gallery-badge">
                      <i className="fa-solid fa-photo-film"></i> Production Case File
                    </div>
                  </>
                )}
              </div>

              <div className="modal-info">
                <h4>Project Overview</h4>
                <p>{selectedProject.details.fullDesc}</p>

                <table className="modal-table">
                  <tbody>
                    <tr>
                      <td><strong>Client:</strong></td>
                      <td>{selectedProject.details.client}</td>
                    </tr>
                    <tr>
                      <td><strong>Year:</strong></td>
                      <td>{selectedProject.details.year}</td>
                    </tr>
                    <tr>
                      <td><strong>Scope:</strong></td>
                      <td>{selectedProject.details.role}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INLINE STYLES FOR MODAL & SCROLL ANIMATION */}
      <style>{`
        .port-img-real {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* Portfolio Modal Styling */
        .portfolio-modal {
          position: fixed;
          inset: 0;
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalFadeIn 0.3s ease forwards;
        }

        .portfolio-modal-content {
          background: var(--dark-2);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 40px;
          position: relative;
          box-shadow: var(--shadow-lg);
          animation: modalSlideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          color: var(--white);
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        .modal-close:hover {
          background: var(--red);
          border-color: var(--red);
          transform: rotate(90deg);
        }

        .modal-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 24px;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 40px;
          align-items: start;
        }

        .modal-visual {
          background: linear-gradient(135deg, #161616 0%, #1a0305 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius);
          aspect-ratio: 3/4;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0;
          text-align: center;
          overflow: hidden;
          position: relative;
        }

        .modal-img-wrap {
          position: absolute;
          inset: 0;
        }

        .modal-icon-wrap {
          width: 80px;
          height: 80px;
          background: var(--red-soft);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .modal-icon-wrap i {
          font-size: 2.2rem;
          color: var(--red);
        }
        .modal-gallery-badge {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--gray-2);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .modal-info h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--white);
        }
        .modal-info p {
          font-size: 0.92rem;
          color: var(--gray-2);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .modal-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 8px;
        }
        .modal-table td {
          padding: 8px 0;
          font-size: 0.88rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          vertical-align: top;
        }
        .modal-table tr:last-child td {
          border-bottom: none;
        }
        .modal-table td:first-child {
          width: 80px;
          color: var(--gray-3);
        }
        .modal-table td:last-child {
          color: var(--gray-1);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .portfolio-modal-content {
            padding: 30px 24px;
          }
          .modal-visual {
            aspect-ratio: 16/9;
          }
        }
      `}</style>
    </section>
  );
}
