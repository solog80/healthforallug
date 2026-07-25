import Link from "next/link";

export default function Programs() {
  return (
    <main style={{ background: "#FAF7F1" }}>
      <section style={{ padding: "clamp(56px,8vw,88px) clamp(20px,5vw,64px) clamp(40px,5vw,56px)", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#B54A2C", letterSpacing: "0.14em", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", margin: "0 0 16px" }}>Our Programs</p>
        <h1 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(30px,4vw,46px)", color: "#163F28", margin: "0 0 20px", lineHeight: 1.15 }}>Three projects. One goal: quality healthcare, accessible to all.</h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#5b5348", margin: 0 }}>From girls' schools to remote health posts, our work meets people where they are.</p>
      </section>

      <section id="herrise" style={{ padding: "clamp(40px,6vw,64px) clamp(20px,5vw,64px)", maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
        <div>
          <p style={{ color: "#B54A2C", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 14px" }}>Program 01 &middot; SRHR</p>
          <h2 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(24px,2.8vw,32px)", color: "#163F28", margin: "0 0 18px" }}>HerRise Initiative</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5b5348", margin: "0 0 16px" }}>HerRise Initiative Uganda is focused on ending period poverty and equipping young women and girls with skills and health information &mdash; ultimately keeping them in school.</p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5b5348", margin: "0 0 24px" }}>Sanitary products and disposal bins are provided in schools, and girls are taught to make their own reusable pads, creating a long-standing, self-sustaining impact long after each visit.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Tag>Sanitary product distribution</Tag>
            <Tag>Reusable pad skills training</Tag>
            <Tag>SRHR education</Tag>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <img src="/assets/herrise-1.jpeg" alt="Schoolgirls with reusable sanitary kits" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px" }} />
          <img src="/assets/herrise-2.jpeg" alt="Schoolgirls receiving HerRise kits" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px", marginTop: "28px" }} />
          <img src="/assets/herrise-bins.jpeg" alt="HerRise Initiative branded sanitary bins" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px", gridColumn: "1/3" }} />
        </div>
      </section>

      {/* Assistant Clinician program — commented out for now
      <section id="assistant-clinician" style={{ padding: "clamp(56px,7vw,80px) clamp(20px,5vw,64px)", background: "#F1ECE0" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div style={{ width: "100%", aspectRatio: "4/3", background: "repeating-linear-gradient(135deg,#1F5D3B,#1F5D3B 12px,#1a4f32 12px,#1a4f32 24px)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", order: 2 }}>
            <span style={{ color: "#D9A441", fontFamily: "monospace", fontSize: "13px", background: "rgba(22,63,40,0.85)", padding: "8px 14px", borderRadius: "3px" }}>app screenshots</span>
          </div>
          <div style={{ order: 1 }}>
            <p style={{ color: "#B54A2C", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 14px" }}>Program 02 &middot; Digital Health</p>
            <h2 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(24px,2.8vw,32px)", color: "#163F28", margin: "0 0 18px" }}>Assistant Clinician</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5b5348", margin: "0 0 16px" }}>An offline clinical triage decision-support application built for frontline health workers, guiding them through structured clinical pathways to enable more consistent, timely decision-making &mdash; even where specialized staff are unavailable.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5b5348", margin: "0 0 24px" }}>Preliminary pilot testing has shown it to be a promising, scalable solution to Uganda's limited health workforce in remote settings.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <TagLight>Works fully offline</TagLight>
              <TagLight>Structured triage pathways</TagLight>
              <TagLight>Pilot-tested</TagLight>
            </div>
          </div>
        </div>
      </section>
      */}

      <section id="public-health-education" style={{ padding: "clamp(56px,7vw,88px) clamp(20px,5vw,64px)", maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
        <div>
          <p style={{ color: "#B54A2C", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 14px" }}>Program 03 &middot; Education &amp; Advocacy</p>
          <h2 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(24px,2.8vw,32px)", color: "#163F28", margin: "0 0 18px" }}>Public Health Education</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5b5348", margin: "0 0 16px" }}>We engage in public health discussions to address misinformation, and to promote disease prevention, management and control across communities.</p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5b5348", margin: "0 0 24px" }}>This includes original publications &mdash; among them a children's storybook about Ebola, designed to help children understand the disease in an engaging, age-appropriate, non-frightening way.</p>
          <Link href="/resources" style={{ fontWeight: 600, fontSize: "15px", color: "#1F5D3B", textDecoration: "none" }}>See our publications &rarr;</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <img src="/assets/education-1.jpeg" alt="Children reading health education booklets" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px" }} />
          <img src="/assets/ebola-1.jpeg" alt="Classroom outreach session" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px", marginTop: "28px" }} />
          <img src="/assets/ebola-2.jpeg" alt="Students holding Ebola storybook" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px", gridColumn: "1/3" }} />
        </div>
      </section>

      <section style={{ padding: "clamp(56px,7vw,80px) clamp(20px,5vw,64px)", textAlign: "center", background: "#163F28" }}>
        <h2 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(24px,2.8vw,32px)", color: "#FAF7F1", margin: "0 0 16px" }}>Want to bring a program to your community?</h2>
        <p style={{ color: "#D8D2C4", fontSize: "16px", maxWidth: "520px", margin: "0 auto 30px" }}>We partner with schools, health facilities and local organizations across Uganda.</p>
        <Link href="/contact" style={{ background: "#B54A2C", color: "#fff", padding: "15px 34px", borderRadius: "3px", fontWeight: 600, fontSize: "15px", textDecoration: "none", display: "inline-block" }}>Partner With Us</Link>
      </section>
    </main>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span style={{ background: "#F1ECE0", color: "#163F28", fontSize: "13px", fontWeight: 600, padding: "8px 16px", borderRadius: "20px" }}>
      {children}
    </span>
  );
}

function TagLight({ children }: { children: string }) {
  return (
    <span style={{ background: "#fff", color: "#163F28", fontSize: "13px", fontWeight: 600, padding: "8px 16px", borderRadius: "20px" }}>
      {children}
    </span>
  );
}
