"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please check your internet connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Get In Touch</div>
          <h2 className="section-title">
            Let&apos;s Work <span className="accent">Together</span>
          </h2>
          <p className="section-desc">
            Ready to bring your vision to life? Reach out and let&apos;s create something exceptional.
          </p>
        </div>

        <div className="contact-grid" id="contact-grid">
          <div className="contact-info" id="contact-info">
            <div className="contact-item" id="contact-addr">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4>Visit Us</h4>
                <p>
                  No. 2-3-11, Wisma Rampai,
                  <br />
                  Jalan 34/26, Taman Sri Rampai,
                  <br />
                  53300 Kuala Lumpur
                </p>
              </div>
            </div>
            <div className="contact-item" id="contact-phone">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h4>Call Us</h4>
                <p>
                  <a href="tel:+60193138133">019-313 8133</a>
                  <br />
                  <a href="tel:+60341313030">03-4131 3030</a>
                </p>
              </div>
            </div>
            <div className="contact-item" id="contact-email">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4>Email Us</h4>
                <p>
                  <a href="mailto:redintrade@gmail.com">redintrade@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="contact-item" id="contact-social-links">
              <div className="contact-icon">
                <i className="fa-solid fa-share-nodes"></i>
              </div>
              <div>
                <h4>Social Media</h4>
                <p>
                  <a
                    href="https://www.facebook.com/redintradesdnbhd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook: @redintradesdnbhd
                  </a>
                  <br />
                  <a
                    href="https://www.instagram.com/redintrade/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram: @redintrade
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item" id="contact-business">
              <div className="contact-icon">
                <i className="fa-solid fa-building"></i>
              </div>
              <div>
                <h4>Business Hours</h4>
                <p>
                  Monday – Friday: 9:00 AM – 6:00 PM
                  <br />
                  Saturday: 9:00 AM – 1:00 PM
                </p>
              </div>
            </div>

            <div className="contact-map" id="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7506490888737!2d101.72040171475335!3d3.1957823977111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc35e5d42a5e2b%3A0x4ddf2b91e2e4c4b0!2sWisma%20Rampai%2C%20Jalan%2034%2C%20Taman%20Sri%20Rampai%2C%2053300%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1650000000000!5m2!1sen!2smy"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Redintrade Office Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrap" id="contact-form-wrap">
            {!submitted ? (
              <form
                className="contact-form"
                id="contact-form"
                onSubmit={handleFormSubmit}
              >
                <div className="form-group" id="fg-name">
                  <label htmlFor="contactName">Full Name</label>
                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group" id="fg-email">
                  <label htmlFor="contactEmail">Email Address</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group" id="fg-service">
                  <label htmlFor="contactService">Service Interested In</label>
                  <select
                    id="contactService"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="film">Film & Drama Production</option>
                    <option value="broadcast">Broadcasting Services</option>
                    <option value="events">Event Management</option>
                    <option value="artist">Artist Management</option>
                    <option value="equipment">Equipment Rental</option>
                    <option value="consulting">Consultancy & Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group" id="fg-message">
                  <label htmlFor="contactMessage">Message</label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                {errorMessage && (
                  <div style={{ color: "#C8102E", fontSize: "0.88rem", marginTop: "-10px", marginBottom: "10px", textAlign: "center", fontWeight: "600" }}>
                    {errorMessage}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  id="contact-submit"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i> Send Message
                    </>
                  )}
                </button>
                <div className="form-note">We typically respond within 24 hours.</div>
              </form>
            ) : (
              <div className="form-success" id="form-success">
                <i className="fa-solid fa-circle-check"></i>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We&apos;ll be in touch with you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
