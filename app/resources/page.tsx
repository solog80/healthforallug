import type { Metadata } from "next";
import AkelloBookCard from "@/components/AkelloBookCard";

const BOOK_OG_MAP: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    width: number;
    height: number;
    alt: string;
  }
> = {
  akello: {
    title: "Ebola in Akello’s Surrounding",
    description:
      "An illustrative and educational children’s book by Lumu Patricia Ann helping young readers understand and prevent Ebola.",
    image: "/assets/ebola-akello-en.jpg",
    width: 1032,
    height: 1280,
    alt: "Ebola in Akello's Surrounding English book cover",
  },
  "akello-fr": {
    title: "Ebola dans l’entourage d’Akello",
    description:
      "Un livre illustré et éducatif pour enfants, écrit par l’auteure ougandaise Lumu Patricia Ann.",
    image: "/assets/ebola-akello-fr.jpg",
    width: 1029,
    height: 1280,
    alt: "Ebola dans l'entourage d'Akello French book cover",
  },
  "akello-sw": {
    title: "Ebola katika Mazingira ya Akello",
    description:
      "Kitabu cha watoto chenye vielelezo na mafunzo ya afya, kilichoandikwa na mwandishi kutoka Uganda, Lumu Patricia Ann.",
    image: "/assets/ebola-akello-sw.jpg",
    width: 1027,
    height: 1280,
    alt: "Ebola katika Mazingira ya Akello Swahili book cover",
  },
  acan: {
    title: "Ebola in Acan’s Surrounding",
    description:
      "An engaging and educational children's book by Lumu Patricia Ann taking young readers on a journey of discovery to understand and prevent Ebola.",
    image: "/assets/ebola-acan-en.jpg",
    width: 807,
    height: 960,
    alt: "Ebola in Acan's Surrounding book cover",
  },
  mugabo: {
    title: "Mugabo’s Malaria Tales",
    description:
      "An exciting and educational children's book by Lumu Patricia Ann designed to make learning about malaria fun, engaging, and memorable.",
    image: "/assets/mugabo-malaria-tales.jpg",
    width: 774,
    height: 960,
    alt: "Mugabo's Malaria Tales book cover",
  },
  miracle: {
    title: "HER LITTLE HEART: HER BIG BATTLE – Miracle’s Untold Story",
    description:
      "A powerful and educational story by Lumu Patricia Ann created to help adolescents understand HIV beyond myths, stigma, and misconceptions.",
    image: "/assets/her-little-heart.jpg",
    width: 708,
    height: 1080,
    alt: "Her Little Heart: Her Big Battle book cover",
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ book?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const bookKey = params?.book?.toLowerCase();
  const specificBook = bookKey ? BOOK_OG_MAP[bookKey] : undefined;

  if (specificBook) {
    return {
      title: specificBook.title,
      description: specificBook.description,
      openGraph: {
        type: "book",
        url: `https://www.healthforalluganda.org/resources?book=${bookKey}`,
        siteName: "Health For All Uganda",
        title: `${specificBook.title} | Health For All Uganda`,
        description: specificBook.description,
        images: [
          {
            url: specificBook.image,
            width: specificBook.width,
            height: specificBook.height,
            alt: specificBook.alt,
            type: "image/jpeg",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${specificBook.title} | Health For All Uganda`,
        description: specificBook.description,
        images: [specificBook.image],
      },
    };
  }

  const defaultTitle = "Resources & Publications";
  const defaultDescription =
    "Educational children's and adolescent health books by Lumu Patricia Ann — Ebola in Akello’s Surrounding, Ebola in Acan’s Surrounding, Mugabo’s Malaria Tales, and Her Little Heart: Her Big Battle.";

  return {
    title: defaultTitle,
    description: defaultDescription,
    openGraph: {
      type: "website",
      url: "https://www.healthforalluganda.org/resources",
      siteName: "Health For All Uganda",
      title: "Resources & Publications | Health For All Uganda",
      description: defaultDescription,
      images: [
        {
          url: "/assets/ebola-akello-en.jpg",
          width: 1032,
          height: 1280,
          alt: "Ebola in Akello's Surrounding book cover",
          type: "image/jpeg",
        },
        {
          url: "/assets/ebola-acan-en.jpg",
          width: 807,
          height: 960,
          alt: "Ebola in Acan's Surrounding book cover",
          type: "image/jpeg",
        },
        {
          url: "/assets/mugabo-malaria-tales.jpg",
          width: 774,
          height: 960,
          alt: "Mugabo's Malaria Tales book cover",
          type: "image/jpeg",
        },
        {
          url: "/assets/her-little-heart.jpg",
          width: 708,
          height: 1080,
          alt: "Her Little Heart: Her Big Battle book cover",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Resources & Publications | Health For All Uganda",
      description: defaultDescription,
      images: ["/assets/ebola-akello-en.jpg"],
    },
  };
}

export default async function Resources({
  searchParams,
}: {
  searchParams: Promise<{ book?: string }>;
}) {
  const params = await searchParams;
  const initialLang =
    params?.book === "akello-fr" ? "fr" : params?.book === "akello-sw" ? "sw" : "en";

  return (
    <main style={{ background: "#FAF7F1" }}>
      <section
        style={{
          padding: "clamp(56px,8vw,88px) clamp(20px,5vw,64px) clamp(40px,5vw,56px)",
          maxWidth: "900px",
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
          Resources &amp; Publications
        </p>
        <h1
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: "clamp(30px,4vw,46px)",
            color: "#163F28",
            margin: "0 0 20px",
            lineHeight: 1.15,
          }}
        >
          Knowledge is part of the cure.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#5b5348", margin: 0 }}>
          Research, advocacy writing, and materials produced through our Public Health Education
          program.
        </p>
      </section>

      {/* Children's Books Section */}
      <section
        style={{
          padding: "0 clamp(20px,5vw,64px) clamp(48px,6vw,72px)",
          maxWidth: "1180px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "36px",
        }}
      >
        {/* Book 1: Ebola in Akello's Surrounding */}
        <AkelloBookCard initialLang={initialLang} />

        {/* Book 2: Ebola in Acan's Surrounding */}
        <article
          id="acan"
          className="book-card-grid"
          style={{
            background: "#F1ECE0",
            borderRadius: "10px",
            padding: "clamp(28px,4vw,48px)",
            border: "1px solid #E4DFD3",
          }}
        >
          <div>
            <img
              src="/assets/ebola-acan-en.jpg"
              alt="Ebola in Acan's Surrounding storybook cover"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 12px 28px rgba(30,27,22,0.15)",
                display: "block",
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: "#B54A2C",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 10px",
              }}
            >
              Children&apos;s Storybook
            </p>
            <h2
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: "clamp(22px,2.6vw,30px)",
                color: "#163F28",
                margin: "0 0 6px",
              }}
            >
              Ebola in Acan’s Surrounding
            </h2>
            <p style={{ fontSize: "14px", color: "#7d7666", margin: "0 0 18px", fontWeight: 500 }}>
              An engaging and educational children&apos;s book written by Ugandan author Lumu
              Patricia Ann
            </p>
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontStyle: "italic",
                fontSize: "17px",
                lineHeight: 1.65,
                color: "#163F28",
                margin: "0 0 14px",
              }}
            >
              What happens when Ebola becomes a mystery in a child&apos;s surroundings?
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3a352c", margin: "0 0 16px" }}>
              Through Acan’s story, young readers are taken on a journey of discovery, learning
              about Ebola, its symptoms, how it spreads, and the simple measures that can prevent
              infection. As the story unfolds, children begin to understand that knowledge is their
              greatest weapon against fear and that they, too, can play a role in keeping
              themselves, their families and their communities safe.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3a352c", margin: "0 0 20px" }}>
              More than just a story, this book makes learning about Ebola interesting, memorable,
              and child-friendly.
            </p>
            <div
              style={{
                background: "#FAF7F1",
                border: "1px solid #E4DFD3",
                borderRadius: "6px",
                padding: "16px 20px",
              }}
            >
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#3a352c", margin: 0 }}>
                <strong style={{ color: "#163F28" }}>Give a child the gift of knowledge.</strong>{" "}
                Get your copy of <em>Ebola in Acan’s Surrounding</em> today! Via:{" "}
                <a
                  href="mailto:lumupatricia5@gmail.com?subject=Order%3A%20Ebola%20in%20Acan's%20Surrounding"
                  style={{ color: "#B54A2C", fontWeight: 600, textDecoration: "underline" }}
                >
                  lumupatricia5@gmail.com
                </a>
              </p>
            </div>
          </div>
        </article>

        {/* Book 3: Mugabo's Malaria Tales */}
        <article
          id="mugabo"
          className="book-card-grid"
          style={{
            background: "#F1ECE0",
            borderRadius: "10px",
            padding: "clamp(28px,4vw,48px)",
            border: "1px solid #E4DFD3",
          }}
        >
          <div>
            <img
              src="/assets/mugabo-malaria-tales.jpg"
              alt="Mugabo's Malaria Tales storybook cover"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 12px 28px rgba(30,27,22,0.15)",
                display: "block",
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: "#B54A2C",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 10px",
              }}
            >
              Children&apos;s Storybook
            </p>
            <h2
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: "clamp(22px,2.6vw,30px)",
                color: "#163F28",
                margin: "0 0 6px",
              }}
            >
              Mugabo’s Malaria Tales
            </h2>
            <p style={{ fontSize: "14px", color: "#7d7666", margin: "0 0 18px", fontWeight: 500 }}>
              An exciting and educational children&apos;s book written by Ugandan author Lumu
              Patricia Ann, designed to make learning about malaria fun, engaging and memorable.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3a352c", margin: "0 0 16px" }}>
              Through captivating storytelling, young readers join Mugabo on an exciting journey of
              discovery, exploring the world of malaria and learning how this preventable disease
              affects people. The story introduces children to how malaria is transmitted, its
              common signs and symptoms, and the simple but important steps they can take to protect
              themselves, their families and their communities.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3a352c", margin: "0 0 16px" }}>
              By turning important health lessons into an enjoyable story,{" "}
              <em>Mugabo’s Malaria Tales</em> empowers children to become little health champions,
              equipped with knowledge to make healthier choices and share what they learn with
              others.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#163F28",
                fontWeight: 600,
                margin: "0 0 20px",
              }}
            >
              Because every child deserves the knowledge to stay healthy and every story can inspire
              a healthier generation!
            </p>
            <div
              style={{
                background: "#FAF7F1",
                border: "1px solid #E4DFD3",
                borderRadius: "6px",
                padding: "16px 20px",
              }}
            >
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#3a352c", margin: 0 }}>
                Get your copy by emailing{" "}
                <a
                  href="mailto:lumupatricia5@gmail.com?subject=Order%3A%20Mugabo's%20Malaria%20Tales"
                  style={{ color: "#B54A2C", fontWeight: 600, textDecoration: "underline" }}
                >
                  lumupatricia5@gmail.com
                </a>{" "}
                and let Mugabo take you on a fun journey of learning and discovery!
              </p>
            </div>
          </div>
        </article>

        {/* Book 4: Her Little Heart: Her Big Battle */}
        <article
          id="miracle"
          className="book-card-grid"
          style={{
            background: "#F1ECE0",
            borderRadius: "10px",
            padding: "clamp(28px,4vw,48px)",
            border: "1px solid #E4DFD3",
          }}
        >
          <div>
            <img
              src="/assets/her-little-heart.jpg"
              alt="Her Little Heart: Her Big Battle – Miracle's Untold Story book cover"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 12px 28px rgba(30,27,22,0.15)",
                display: "block",
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: "#B54A2C",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 10px",
              }}
            >
              Adolescent Health &amp; Advocacy Book
            </p>
            <h2
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: "clamp(22px,2.6vw,30px)",
                color: "#163F28",
                margin: "0 0 6px",
              }}
            >
              HER LITTLE HEART: HER BIG BATTLE &ndash; Miracle’s Untold Story
            </h2>
            <p style={{ fontSize: "14px", color: "#7d7666", margin: "0 0 18px", fontWeight: 500 }}>
              A powerful and educational story written by Ugandan author Lumu Patricia Ann, created
              to help adolescents understand HIV beyond the myths, stigma and misconceptions that
              surround it.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3a352c", margin: "0 0 16px" }}>
              Through Miracle’s journey, young readers are drawn into the realities of growing up
              with HIV, navigating relationships, confronting stigma and discovering the importance
              of knowledge, self-acceptance and resilience. The story opens up conversations about
              HIV prevention, testing, treatment, emotional well-being and the importance of
              supporting rather than judging those living with HIV.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3a352c", margin: "0 0 16px" }}>
              More than just a story, this book reminds adolescents that an HIV diagnosis does not
              define a person&apos;s worth, dreams or future. It encourages compassion, informed
              choices and a world where no young person has to face HIV-related stigma alone.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#163F28",
                fontWeight: 600,
                margin: "0 0 20px",
              }}
            >
              Let&apos;s raise a generation that is informed, compassionate and free from HIV
              stigma.
            </p>
            <div
              style={{
                background: "#FAF7F1",
                border: "1px solid #E4DFD3",
                borderRadius: "6px",
                padding: "16px 20px",
              }}
            >
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#3a352c", margin: 0 }}>
                Get your copy by emailing{" "}
                <a
                  href="mailto:lumupatricia5@gmail.com?subject=Order%3A%20Her%20Little%20Heart%3A%20Her%20Big%20Battle"
                  style={{ color: "#B54A2C", fontWeight: 600, textDecoration: "underline" }}
                >
                  lumupatricia5@gmail.com
                </a>{" "}
                and give a young person a story that could change the way they see HIV and
                themselves.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Article Section */}
      <section
        style={{
          padding: "clamp(16px,3vw,32px) clamp(20px,5vw,64px) clamp(64px,8vw,96px)",
          maxWidth: "920px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            border: "1px solid #E4DFD3",
            borderRadius: "8px",
            padding: "clamp(28px,4vw,48px)",
            background: "#fff",
          }}
        >
          <p
            style={{
              color: "#B54A2C",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 12px",
            }}
          >
            Article
          </p>
          <h2
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "clamp(22px,2.6vw,28px)",
              color: "#163F28",
              margin: "0 0 8px",
            }}
          >
            The Role of Ultrasound Scan in Maternal and Child Health
          </h2>
          <p style={{ fontSize: "14px", color: "#7d7666", margin: "0 0 28px" }}>
            By Patricia Ann Lumu &middot; Medical Imaging Technologist &middot; May 2024
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: "0 0 20px" }}>
            According to a WHO report, Uganda&apos;s maternal mortality ratio stands at 189 per
            100,000 live births, with a 1-in-66 lifetime risk of maternal death. The neonatal
            mortality rate has fallen from 27 to 22 per 1,000 live births but remains above the SDG
            target of 12 per 1,000. Stillbirth rates are around 17 per 1,000 births, above the WHO
            target of 10 per 1,000 &mdash; with most deaths attributed to hemorrhage, infection, and
            hypertensive disorders.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: "0 0 20px" }}>
            The role ultrasound plays in reducing these deaths &mdash; and in identifying
            abnormalities and multiple pregnancies &mdash; is rarely discussed, despite its proven
            value across many health settings. Some of that value is highlighted below.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: "0 0 20px" }}>
            Ultrasound confirms the presence of a viable intrauterine pregnancy, while identifying
            ectopic and non-viable pregnancies such as molar pregnancy, blighted ovum, and missed
            miscarriage. Multifetal pregnancies are identified and monitored, which is important for
            tracking twin-to-twin transfusion, and cervical competence is assessed in mothers with
            recurrent miscarriage.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: "0 0 20px" }}>
            It is also useful for screening fetal anomalies &mdash; some incompatible with life,
            like anencephaly &mdash; and placental abnormalities such as placenta previa, accreta,
            increta, percreta, abruption, and vasa previa, all of which can cause significant
            maternal bleeding, prematurity, or fetal death. Structural placental presentations like
            circumvallate placenta are identified, with mothers then monitored for intrauterine
            growth restriction (IUGR). Cord abnormalities &mdash; knots, abnormal insertions, a
            single artery, nuchal cords &mdash; can also be detected, requiring close monitoring as
            they can cause IUGR and stillbirth.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: "0 0 20px" }}>
            High-risk pregnancies involving diabetes or high blood pressure are monitored mostly
            with Doppler assessment, preventing stillbirths. Fetal lie is identified to guide the
            safest delivery method and prevent complications like fetal asphyxia, while amniotic
            fluid quantity and estimated fetal weight are assessed, both of which guide the mode of
            delivery. Ultrasound is also important for dating a pregnancy and identifying IUGR, and
            for assessing maternal organs &mdash; kidneys, blood vessels, and pelvic organs &mdash;
            particularly in high-risk patients.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3a352c", margin: 0 }}>
            Overall, ultrasound is essential to assessing fetal and maternal wellbeing, monitoring
            identified risk cases, and guiding safe delivery.
          </p>
        </div>
      </section>
    </main>
  );
}
