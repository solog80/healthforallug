import Link from "next/link";

export default function Resources() {
  return (
    <main style={{ background: "#FAF7F1" }}>
      <section style={{ padding: "clamp(56px,8vw,88px) clamp(20px,5vw,64px) clamp(40px,5vw,56px)", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#B54A2C", letterSpacing: "0.14em", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", margin: "0 0 16px" }}>Resources &amp; Publications</p>
        <h1 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(30px,4vw,46px)", color: "#163F28", margin: "0 0 20px", lineHeight: 1.15 }}>Knowledge is part of the cure.</h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#5b5348", margin: 0 }}>Research, advocacy writing, and materials produced through our Public Health Education program.</p>
      </section>

      <section style={{ padding: "clamp(24px,4vw,40px) clamp(20px,5vw,64px) clamp(64px,8vw,88px)", maxWidth: "920px", margin: "0 auto" }}>
        <div style={{ border: "1px solid #E4DFD3", borderRadius: "8px", padding: "clamp(28px,4vw,48px)", background: "#fff" }}>
          <p style={{ color: "#B54A2C", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 12px" }}>Article</p>
          <h2 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(22px,2.6vw,28px)", color: "#163F28", margin: "0 0 8px" }}>The Role of Ultrasound Scan in Maternal and Child Health</h2>
          <p style={{ fontSize: "14px", color: "#7d7666", margin: "0 0 28px" }}>By Patricia Ann Lumu &middot; Medical Imaging Technologist &middot; May 2024</p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: "0 0 20px" }}>According to a WHO report, Uganda's maternal mortality ratio stands at 189 per 100,000 live births, with a 1-in-66 lifetime risk of maternal death. The neonatal mortality rate has fallen from 27 to 22 per 1,000 live births but remains above the SDG target of 12 per 1,000. Stillbirth rates are around 17 per 1,000 births, above the WHO target of 10 per 1,000 &mdash; with most deaths attributed to hemorrhage, infection, and hypertensive disorders.</p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: "0 0 20px" }}>The role ultrasound plays in reducing these deaths &mdash; and in identifying abnormalities and multiple pregnancies &mdash; is rarely discussed, despite its proven value across many health settings. Some of that value is highlighted below.</p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: "0 0 20px" }}>Ultrasound confirms the presence of a viable intrauterine pregnancy, while identifying ectopic and non-viable pregnancies such as molar pregnancy, blighted ovum, and missed miscarriage. Multifetal pregnancies are identified and monitored, which is important for tracking twin-to-twin transfusion, and cervical competence is assessed in mothers with recurrent miscarriage.</p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: "0 0 20px" }}>It is also useful for screening fetal anomalies &mdash; some incompatible with life, like anencephaly &mdash; and placental abnormalities such as placenta previa, accreta, increta, percreta, abruption, and vasa previa, all of which can cause significant maternal bleeding, prematurity, or fetal death. Structural placental presentations like circumvallate placenta are identified, with mothers then monitored for intrauterine growth restriction (IUGR). Cord abnormalities &mdash; knots, abnormal insertions, a single artery, nuchal cords &mdash; can also be detected, requiring close monitoring as they can cause IUGR and stillbirth.</p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: "0 0 20px" }}>High-risk pregnancies involving diabetes or high blood pressure are monitored mostly with Doppler assessment, preventing stillbirths. Fetal lie is identified to guide the safest delivery method and prevent complications like fetal asphyxia, while amniotic fluid quantity and estimated fetal weight are assessed, both of which guide the mode of delivery. Ultrasound is also important for dating a pregnancy and identifying IUGR, and for assessing maternal organs &mdash; kidneys, blood vessels, and pelvic organs &mdash; particularly in high-risk patients.</p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: 0 }}>Overall, ultrasound is essential to assessing fetal and maternal wellbeing, monitoring identified risk cases, and guiding safe delivery.</p>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,5vw,64px) clamp(64px,8vw,96px)", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "48px", alignItems: "center", background: "#F1ECE0", borderRadius: "10px", padding: "clamp(28px,4vw,48px)" }}>
          <img src="/assets/ebola-book.jpeg" alt="Ebola in Acan's Surrounding storybook cover" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 12px 28px rgba(30,27,22,0.15)" }} />
          <div>
            <p style={{ color: "#B54A2C", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 12px" }}>Children's Storybook</p>
            <h2 style={{ fontFamily: "var(--font-lora), serif", fontSize: "clamp(22px,2.6vw,28px)", color: "#163F28", margin: "0 0 16px" }}>Ebola in Acan's Surrounding</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5b5348", margin: "0 0 16px" }}>Written under our Public Health Education program, this storybook helps children understand Ebola &mdash; what it is, how it spreads, and how to stay safe &mdash; in a way that is engaging, age-appropriate, and free of fear.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5b5348", margin: "0 0 24px" }}>The book has been shared directly with schoolchildren across our outreach visits, paired with in-person sessions to reinforce key prevention messages like keeping distance and staying safe.</p>
            <Link href="/contact" style={{ fontWeight: 600, fontSize: "15px", color: "#1F5D3B", textDecoration: "none" }}>Request a copy for your school &rarr;</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
