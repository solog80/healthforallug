"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", interest: "partner", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const interestLabels: Record<string, string> = {
    partner: "Partnering with our programs",
    volunteer: "Volunteering",
    donate: "Donating",
    other: "Something else",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Contact form: ${interestLabels[formData.interest]}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nInterested in: ${interestLabels[formData.interest]}\n\n${formData.message}`;
    window.location.href = `mailto:health4alluganda@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main style={{ background: "#FAF7F1" }}>
      <section style={{ padding: "clamp(56px,8vw,88px) clamp(20px,5vw,64px) clamp(40px,5vw,56px)", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#B54A2C", letterSpacing: "0.14em", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", margin: "0 0 16px" }}>Get Involved</p>
        <h1 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(30px,4vw,46px)", color: "#163F28", margin: "0 0 20px", lineHeight: 1.15 }}>Let's build healthier communities together.</h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#5b5348", margin: 0 }}>Partner with us, volunteer your time, or reach out to support one of our programs.</p>
      </section>

      <section style={{ padding: "0 clamp(20px,5vw,64px) clamp(64px,8vw,88px)", maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
        <div style={{ background: "#fff", border: "1px solid #E4DFD3", borderRadius: "8px", padding: "clamp(28px,4vw,40px)" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#1F5D3B", margin: "0 auto 20px" }} />
              <h3 style={{ fontFamily: "var(--font-lora), serif", fontSize: "22px", color: "#163F28", margin: "0 0 10px" }}>Almost there</h3>
              <p style={{ fontSize: "15px", color: "#5b5348", margin: 0 }}>We've opened your email app with your message pre-filled &mdash; just hit send.</p>
            </div>
          ) : (
            <div>
              <h3 style={{ fontFamily: "var(--font-lora), serif", fontSize: "22px", color: "#163F28", margin: "0 0 24px" }}>Send us a message</h3>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#163F28", display: "block", marginBottom: "6px" }}>Full name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px", border: "1px solid #E4DFD3", borderRadius: "4px", fontSize: "15px", fontFamily: "Work Sans, sans-serif" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#163F28", display: "block", marginBottom: "6px" }}>Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px", border: "1px solid #E4DFD3", borderRadius: "4px", fontSize: "15px", fontFamily: "Work Sans, sans-serif" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#163F28", display: "block", marginBottom: "6px" }}>I'm interested in</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px", border: "1px solid #E4DFD3", borderRadius: "4px", fontSize: "15px", fontFamily: "Work Sans, sans-serif", background: "#fff" }}
                  >
                    <option value="partner">Partnering with our programs</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donate">Donating</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#163F28", display: "block", marginBottom: "6px" }}>Message</label>
                  <textarea
                    placeholder="Tell us how you'd like to get involved"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px", border: "1px solid #E4DFD3", borderRadius: "4px", fontSize: "15px", fontFamily: "Work Sans, sans-serif", resize: "vertical" }}
                  />
                </div>
                <button type="submit" style={{ background: "#1F5D3B", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "4px", fontWeight: 600, fontSize: "15px", cursor: "pointer", alignSelf: "flex-start" }}>
                  Send Message
                </button>
              </form>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ background: "#163F28", borderRadius: "8px", padding: "clamp(28px,4vw,36px)" }}>
            <h3 style={{ fontFamily: "var(--font-lora), serif", fontSize: "19px", color: "#FAF7F1", margin: "0 0 20px" }}>Reach us directly</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px", color: "#D8D2C4" }}>
              <div>
                <p style={{ fontWeight: 600, color: "#D9A441", margin: "0 0 4px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Email</p>
                <a href="mailto:health4alluganda@gmail.com" style={{ color: "#FAF7F1", textDecoration: "none" }}>health4alluganda@gmail.com</a>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: "#D9A441", margin: "0 0 4px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Phone</p>
                <span>+256 705 942 121</span>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: "#D9A441", margin: "0 0 4px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Location</p>
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>
          <div style={{ background: "#F1ECE0", borderRadius: "8px", padding: "clamp(28px,4vw,36px)" }}>
            <h3 style={{ fontFamily: "var(--font-lora), serif", fontSize: "19px", color: "#163F28", margin: "0 0 12px" }}>Support our work</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#5b5348", margin: "0 0 20px" }}>Every contribution helps us reach more girls, families, and health workers. Get in touch and we'll share the best way for you to give.</p>
            <a href="mailto:health4alluganda@gmail.com" style={{ background: "#B54A2C", color: "#fff", padding: "12px 26px", borderRadius: "4px", fontWeight: 600, fontSize: "14px", display: "inline-block", textDecoration: "none" }}>Donate</a>
          </div>
          <div style={{ border: "1px solid #E4DFD3", borderRadius: "8px", padding: "clamp(28px,4vw,36px)" }}>
            <h3 style={{ fontFamily: "var(--font-lora), serif", fontSize: "19px", color: "#163F28", margin: "0 0 12px" }}>Follow along</h3>
            <div style={{ display: "flex", gap: "14px", fontSize: "14px", fontWeight: 600 }}>
              <a href="#" style={{ color: "#1F5D3B", textDecoration: "none" }}>Facebook</a>
              <a href="#" style={{ color: "#1F5D3B", textDecoration: "none" }}>Instagram</a>
              <a href="#" style={{ color: "#1F5D3B", textDecoration: "none" }}>X (Twitter)</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
