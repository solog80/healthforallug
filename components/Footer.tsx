import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ padding: "56px clamp(20px,5vw,64px) 32px", background: "#12211a", color: "#B9B2A2" }}>
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: "40px",
          paddingBottom: "36px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <img
              src="/assets/logo.jpeg"
              alt="Health For All Uganda logo"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-lora), serif",
                fontWeight: 700,
                color: "#FAF7F1",
                fontSize: "16px",
              }}
            >
              Health For All Uganda
            </span>
          </div>
          <p style={{ fontSize: "14px", lineHeight: 1.7, maxWidth: "320px", margin: 0 }}>
            A Uganda where every individual and community has the knowledge, opportunity, and access to live healthy, productive lives.
          </p>
        </div>

        <div>
          <p style={{ color: "#FAF7F1", fontWeight: 600, fontSize: "14px", margin: "0 0 14px" }}>
            Explore
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
            <Link href="/about" style={{ color: "#B9B2A2", textDecoration: "none" }}>
              About Us
            </Link>
            <Link href="/programs" style={{ color: "#B9B2A2", textDecoration: "none" }}>
              Programs
            </Link>
            <Link href="/resources" style={{ color: "#B9B2A2", textDecoration: "none" }}>
              Resources
            </Link>
            <Link href="/contact" style={{ color: "#B9B2A2", textDecoration: "none" }}>
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p style={{ color: "#FAF7F1", fontWeight: 600, fontSize: "14px", margin: "0 0 14px" }}>
            Contact
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
            <span>Kampala, Uganda</span>
            <a href="mailto:health4alluganda@gmail.com" style={{ color: "#B9B2A2", textDecoration: "none" }}>
              health4alluganda@gmail.com
            </a>
            <span>+256 705 942 121</span>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "13px", textAlign: "center", margin: "24px 0 0", color: "#7d7666" }}>
        &copy; 2026 Health For All Uganda. All rights reserved.
      </p>
    </footer>
  );
}
