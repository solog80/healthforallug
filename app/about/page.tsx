export default function About() {
  return (
    <main style={{ background: "#FAF7F1" }}>
      <section style={{ padding: "clamp(56px,8vw,88px) clamp(20px,5vw,64px) clamp(40px,5vw,56px)", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#B54A2C", letterSpacing: "0.14em", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", margin: "0 0 16px" }}>About Us</p>
        <h1 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(30px,4vw,46px)", color: "#163F28", margin: 0, lineHeight: 1.15 }}>Building a healthier Uganda, one community at a time.</h1>
      </section>

      <section style={{ padding: "0 clamp(20px,5vw,64px) clamp(64px,8vw,88px)", maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
        <div style={{ background: "#fff", border: "1px solid #E4DFD3", borderRadius: "6px", padding: "36px" }}>
          <p style={{ color: "#B54A2C", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 14px" }}>Our Vision</p>
          <p style={{ fontFamily: "var(--font-lora), serif", fontSize: "20px", lineHeight: 1.6, color: "#163F28", margin: 0 }}>A Uganda where every individual and community has the knowledge, opportunity, and access to live healthy, productive lives.</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4DFD3", borderRadius: "6px", padding: "36px" }}>
          <p style={{ color: "#B54A2C", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 14px" }}>Our Mission</p>
          <p style={{ fontFamily: "var(--font-lora), serif", fontSize: "20px", lineHeight: 1.6, color: "#163F28", margin: 0 }}>To improve health outcomes by promoting health education, disease prevention, community empowerment, and innovative solutions that ensure quality healthcare is accessible to all.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(56px,7vw,80px) clamp(20px,5vw,64px)", background: "#F1ECE0" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(24px,2.8vw,32px)", color: "#163F28", margin: "0 0 40px", textAlign: "center" }}>Our Core Values</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "20px" }}>
            <CoreValueCard color="#1F5D3B" label="Equity" description="Fair access for all" />
            <CoreValueCard color="#B54A2C" label="Compassion" description="People-centered care" />
            <CoreValueCard color="#D9A441" label="Integrity" description="Honest, ethical work" />
            <CoreValueCard color="#1F5D3B" label="Innovation" description="Practical solutions" />
            <CoreValueCard color="#B54A2C" label="Collaboration" description="Stronger together" />
            <CoreValueCard color="#D9A441" label="Accountability" description="Owning our impact" />
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(64px,8vw,88px) clamp(20px,5vw,64px)", maxWidth: "1180px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(24px,2.8vw,32px)", color: "#163F28", margin: "0 0 40px", textAlign: "center" }}>Our Strategic Pillars</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
          <PillarCard number="01" title="Health education &amp; awareness" />
          <PillarCard number="02" title="Disease prevention &amp; health promotion" />
          <PillarCard number="03" title="Community outreach" />
          <PillarCard number="04" title="Digital health innovation" />
          <PillarCard number="05" title="Research &amp; advocacy" />
          <PillarCard number="06" title="Capacity building" />
        </div>
      </section>

      <section style={{ padding: "clamp(56px,7vw,88px) clamp(20px,5vw,64px)", background: "#163F28" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "220px 1fr", gap: "40px", alignItems: "center" }}>
          <div style={{ width: "220px", height: "220px", borderRadius: "50%", background: "repeating-linear-gradient(135deg,#2c6b46,#2c6b46 12px,#255a3b 12px,#255a3b 24px)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
            <span style={{ color: "#D9A441", fontFamily: "monospace", fontSize: "12px", textAlign: "center", background: "rgba(22,63,40,0.85)", padding: "8px 12px", borderRadius: "3px" }}>founder photo</span>
          </div>
          <div>
            <p style={{ color: "#D9A441", letterSpacing: "0.14em", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", margin: "0 0 12px" }}>Founder</p>
            <h3 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(22px,2.6vw,28px)", color: "#FAF7F1", margin: "0 0 14px" }}>Lumu Patricia Ann</h3>
            <p style={{ color: "#D8D2C4", fontSize: "16px", lineHeight: 1.75, margin: 0 }}>Patricia founded Health For All Uganda to close the gap between the healthcare Ugandan communities deserve and the care they can actually reach &mdash; from menstrual health for schoolgirls to decision-support tools for frontline health workers. A medical imaging technologist by training, she brings both clinical grounding and grassroots insight to the organization's work across health education, prevention, and digital innovation.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function CoreValueCard({ color, label, description }: { color: string; label: string; description: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: "6px", padding: "26px 20px", textAlign: "center" }}>
      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: color, margin: "0 auto 14px" }} />
      <p style={{ fontWeight: 600, fontSize: "15px", color: "#163F28", margin: "0 0 6px" }}>{label}</p>
      <p style={{ fontSize: "13px", color: "#7d7666", margin: 0 }}>{description}</p>
    </div>
  );
}

function PillarCard({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ border: "1px solid #E4DFD3", borderRadius: "6px", padding: "24px" }}>
      <p style={{ fontFamily: "var(--font-lora), serif", color: "#D9A441", fontSize: "26px", fontWeight: 700, margin: "0 0 8px" }}>{number}</p>
      <p style={{ fontWeight: 600, fontSize: "16px", color: "#163F28", margin: 0 }}>{title}</p>
    </div>
  );
}
