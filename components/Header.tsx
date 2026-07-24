import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        padding: "18px clamp(20px,5vw,64px)",
        borderBottom: "1px solid #E4DFD3",
        flexWrap: "wrap",
        position: "relative",
        background: "#FAF7F1",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
        <img
          src="/assets/logo.jpeg"
          alt="Health For All Uganda logo"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-lora), serif",
            fontWeight: 700,
            fontSize: "19px",
            lineHeight: 1.1,
            color: "#163F28",
          }}
        >
          Health For All<br />
          <span
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "#B54A2C",
            }}
          >
            UGANDA
          </span>
        </span>
      </Link>

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(16px,3vw,36px)",
          flexWrap: "wrap",
          fontSize: "15px",
          fontWeight: 500,
        }}
      >
        <Link href="/" style={{ color: "#163F28", borderBottom: "2px solid #B54A2C", paddingBottom: "4px", textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/about" style={{ color: "#201C16", textDecoration: "none" }}>
          About
        </Link>
        <Link href="/programs" style={{ color: "#201C16", textDecoration: "none" }}>
          Programs
        </Link>
        <Link href="/resources" style={{ color: "#201C16", textDecoration: "none" }}>
          Resources
        </Link>
        <Link href="/contact" style={{ color: "#201C16", textDecoration: "none" }}>
          Contact
        </Link>
        <Link
          href="/contact"
          style={{
            background: "#1F5D3B",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: "3px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Get Involved
        </Link>
      </nav>
    </header>
  );
}
