import Link from "next/link";

export default function Home() {
  return (
    <main style={{ background: "#FAF7F1" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          padding: "clamp(56px,9vw,96px) clamp(20px,5vw,64px) clamp(64px,8vw,96px)",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "56px",
          alignItems: "center",
          background: "#163F28",
        }}
      >
        <div style={{ maxWidth: "640px" }}>
          <p
            style={{
              color: "#D9A441",
              letterSpacing: "0.14em",
              fontWeight: 600,
              fontSize: "13px",
              textTransform: "uppercase",
              margin: "0 0 18px",
            }}
          >
            Uganda &middot; Community Health Nonprofit
          </p>
          <h1
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "clamp(34px,5vw,54px)",
              lineHeight: 1.12,
              color: "#FAF7F1",
              margin: "0 0 24px",
            }}
          >
            A Uganda where every community has the power to live healthy, productive lives.
          </h1>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#D8D2C4",
              margin: "0 0 36px",
              maxWidth: "540px",
            }}
          >
            We improve health outcomes through education, disease prevention, community empowerment, and innovative digital solutions &mdash; reaching girls, families and frontline health workers across Uganda.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/programs"
              style={{
                background: "#B54A2C",
                color: "#fff",
                padding: "14px 30px",
                borderRadius: "3px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              See Our Programs
            </Link>
            <Link
              href="/contact"
              style={{
                background: "transparent",
                color: "#FAF7F1",
                padding: "14px 30px",
                borderRadius: "3px",
                fontWeight: 600,
                fontSize: "15px",
                border: "1px solid rgba(250,247,241,0.4)",
                textDecoration: "none",
              }}
            >
              Get Involved
            </Link>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <img
            src="/assets/herrise-2.jpeg"
            alt="Girls receiving reusable sanitary kits"
            style={{
              width: "100%",
              height: "230px",
              objectFit: "cover",
              borderRadius: "4px",
              gridColumn: "1/2",
            }}
          />
          <img
            src="/assets/education-1.jpeg"
            alt="Children reading health education materials"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "4px",
              alignSelf: "end",
            }}
          />
          <img
            src="/assets/ebola-1.jpeg"
            alt="Classroom health education session"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
          <img
            src="/assets/herrise-bins.jpeg"
            alt="HerRise Initiative sanitary bins"
            style={{
              width: "100%",
              height: "230px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </div>
      </section>

      {/* Mission Section */}
      <section
        style={{
          padding: "clamp(56px,7vw,84px) clamp(20px,5vw,64px)",
          maxWidth: "1180px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#B54A2C",
            letterSpacing: "0.14em",
            fontWeight: 600,
            fontSize: "13px",
            textTransform: "uppercase",
            margin: "0 0 16px",
          }}
        >
          Our Mission
        </p>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: "clamp(22px,2.6vw,30px)",
            lineHeight: 1.5,
            color: "#163F28",
            maxWidth: "880px",
            margin: "0 auto",
          }}
        >
          To improve health outcomes by promoting health education, disease prevention, community empowerment, and innovative solutions that ensure quality healthcare is accessible to all.
        </p>
      </section>

      {/* Programs Section */}
      <section
        style={{
          padding: "0 clamp(20px,5vw,64px) clamp(64px,8vw,96px)",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "clamp(26px,3vw,36px)",
              color: "#163F28",
              margin: 0,
            }}
          >
            Our Programs
          </h2>
          <Link
            href="/programs"
            style={{ fontWeight: 600, fontSize: "15px", color: "#1F5D3B", textDecoration: "none" }}
          >
            View all programs &rarr;
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "28px",
          }}
        >
          {/* Program Card 1 */}
          <ProgramCard
            image="/assets/herrise-1.jpeg"
            title="HerRise Initiative"
            description="Ending period poverty and keeping girls in school through sanitary products, reusable pad-making skills, and SRHR education."
            link="/programs#herrise"
          />

          {/* Program Card 2 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #E4DFD3",
              borderRadius: "6px",
              overflow: "hidden",
              transition: "all 0.2s",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "190px",
                background: "repeating-linear-gradient(135deg,#1F5D3B,#1F5D3B 12px,#1a4f32 12px,#1a4f32 24px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#D9A441",
                  fontFamily: "monospace",
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                  background: "rgba(22,63,40,0.85)",
                  padding: "8px 14px",
                  borderRadius: "3px",
                }}
              >
                app screenshot
              </span>
            </div>
            <div style={{ padding: "26px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontSize: "20px",
                  color: "#163F28",
                  margin: "0 0 10px",
                }}
              >
                Assistant Clinician
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#5b5348",
                  margin: "0 0 16px",
                }}
              >
                An offline clinical triage decision-support app helping frontline health workers make consistent, timely decisions in remote settings.
              </p>
              <Link
                href="/programs#assistant-clinician"
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#1F5D3B",
                  textDecoration: "none",
                }}
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>

          {/* Program Card 3 */}
          <ProgramCard
            image="/assets/ebola-2.jpeg"
            title="Public Health Education"
            description="Fighting misinformation and promoting disease prevention through community engagement and publications, including a children's storybook on Ebola."
            link="/programs#public-health-education"
          />
        </div>
      </section>

      {/* Values Section */}
      <section
        style={{
          padding: "clamp(56px,7vw,88px) clamp(20px,5vw,64px)",
          background: "#F1ECE0",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "clamp(24px,2.8vw,32px)",
              color: "#163F28",
              margin: "0 0 40px",
              textAlign: "center",
            }}
          >
            Our Core Values
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
              gap: "24px",
            }}
          >
            <CoreValue color="#1F5D3B" label="Equity" />
            <CoreValue color="#B54A2C" label="Compassion" />
            <CoreValue color="#D9A441" label="Integrity" />
            <CoreValue color="#1F5D3B" label="Innovation" />
            <CoreValue color="#B54A2C" label="Collaboration" />
            <CoreValue color="#D9A441" label="Accountability" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "clamp(64px,8vw,96px) clamp(20px,5vw,64px)",
          textAlign: "center",
          background: "#163F28",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: "clamp(26px,3vw,36px)",
            color: "#FAF7F1",
            margin: "0 0 18px",
          }}
        >
          Join us in building a healthier Uganda
        </h2>
        <p
          style={{
            color: "#D8D2C4",
            fontSize: "16px",
            maxWidth: "560px",
            margin: "0 auto 32px",
          }}
        >
          Whether as a partner, volunteer, or donor &mdash; there's a place for you in this work.
        </p>
        <Link
          href="/contact"
          style={{
            background: "#B54A2C",
            color: "#fff",
            padding: "15px 34px",
            borderRadius: "3px",
            fontWeight: 600,
            fontSize: "15px",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Get Involved
        </Link>
      </section>
    </main>
  );
}

function ProgramCard({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E4DFD3",
        borderRadius: "6px",
        overflow: "hidden",
        transition: "all 0.2s",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "190px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "26px" }}>
        <h3
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: "20px",
            color: "#163F28",
            margin: "0 0 10px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.65,
            color: "#5b5348",
            margin: "0 0 16px",
          }}
        >
          {description}
        </p>
        <Link
          href={link}
          style={{
            fontWeight: 600,
            fontSize: "14px",
            color: "#1F5D3B",
            textDecoration: "none",
          }}
        >
          Learn more &rarr;
        </Link>
      </div>
    </div>
  );
}

function CoreValue({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 12px" }}>
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: color,
          margin: "0 auto 14px",
        }}
      />
      <p
        style={{
          fontWeight: 600,
          fontSize: "15px",
          color: "#163F28",
          margin: 0,
        }}
      >
        {label}
      </p>
    </div>
  );
}
