"use client";

import { useState } from "react";

export const AKELLO_EDITIONS = [
  {
    id: "en",
    label: "English",
    badge: "Children’s Storybook · English Edition",
    title: "Ebola in Akello’s Surrounding",
    subtitle:
      "An illustrative and educational children’s book written by Ugandan author Lumu Patricia Ann.",
    body: "Through the story of Akello, a curious little girl who sets out to understand the mysterious monster called Ebola, young readers discover the truth about the disease. As Akello learns about its symptoms, how it spreads, and the simple ways it can be prevented, her fear gradually turns into knowledge and confidence. She discovers that Ebola is not a mystery to be feared but a disease that can be understood and prevented through the right information and actions.",
    highlight:
      "Give your child more than a story; give them the knowledge to protect themselves and their communities.",
    ctaPrefix: "Get your copy of the book by emailing",
    ctaSuffix: "and let the journey of learning begin!",
    image: "/assets/ebola-akello-en.jpg",
    alt: "Ebola in Akello's Surrounding English book cover",
  },
  {
    id: "fr",
    label: "Français",
    badge: "Livre pour enfants · Édition française",
    title: "Ebola dans l’entourage d’Akello",
    subtitle:
      "Un livre illustré et éducatif pour enfants, écrit par l’auteure ougandaise Lumu Patricia Ann.",
    body: "À travers l’histoire d’Akello, une petite fille curieuse qui cherche à comprendre le mystérieux monstre appelé Ebola, les jeunes lecteurs découvrent la vérité sur cette maladie. En apprenant à reconnaître ses symptômes, à comprendre comment elle se transmet et à connaître les gestes simples pour la prévenir, Akello transforme progressivement sa peur en connaissance et en confiance. Elle découvre qu’Ebola n’est pas un mystère dont il faut avoir peur, mais une maladie que l’on peut comprendre et prévenir grâce aux bonnes informations et aux bons gestes.",
    highlight:
      "Offrez à votre enfant bien plus qu’une histoire : donnez-lui les connaissances nécessaires pour se protéger et protéger sa communauté.",
    ctaPrefix: "Pour obtenir votre exemplaire, envoyez un e-mail à",
    ctaSuffix: "et laissez commencer cette belle aventure éducative !",
    image: "/assets/ebola-akello-fr.jpg",
    alt: "Ebola dans l'entourage d'Akello French book cover",
  },
  {
    id: "sw",
    label: "Kiswahili",
    badge: "Kitabu cha Watoto · Toleo la Kiswahili",
    title: "Ebola katika Mazingira ya Akello",
    subtitle:
      "Kitabu cha watoto chenye vielelezo na mafunzo ya afya, kilichoandikwa na mwandishi kutoka Uganda, Lumu Patricia Ann.",
    body: "Kupitia hadithi ya Akello, msichana mdogo mwenye udadisi anayeamua kutafuta ukweli kuhusu mnyama wa kutisha anayeitwa Ebola, watoto wanapata fursa ya kujifunza ukweli kuhusu ugonjwa huu. Akello anapojifunza kuhusu dalili za Ebola, jinsi unavyoambukizwa na njia rahisi za kujikinga nao, hofu yake inabadilika polepole kuwa uelewa na kujiamini. Anagundua kwamba Ebola si fumbo la kuogopwa, bali ni ugonjwa unaoweza kueleweka na kuzuiwa kwa kupata taarifa sahihi na kuchukua hatua zinazofaa.",
    highlight:
      "Mpe mtoto wako zaidi ya hadithi; mpe maarifa yatakayomsaidia kujilinda yeye mwenyewe na jamii yake.",
    ctaPrefix: "Pata nakala yako kwa kutuma barua pepe kwa",
    ctaSuffix: "na uanze safari hii ya kujifunza!",
    image: "/assets/ebola-akello-sw.jpg",
    alt: "Ebola katika mazingira ya Akello Swahili book cover",
  },
] as const;

export default function AkelloBookCard({
  initialLang = "en",
}: {
  initialLang?: "en" | "fr" | "sw";
}) {
  const [akelloLang, setAkelloLang] =
    useState<(typeof AKELLO_EDITIONS)[number]["id"]>(initialLang);
  const currentAkello =
    AKELLO_EDITIONS.find((edition) => edition.id === akelloLang) ?? AKELLO_EDITIONS[0];

  return (
    <article
      id="akello"
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
          src={currentAkello.image}
          alt={currentAkello.alt}
          style={{
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0 12px 28px rgba(30,27,22,0.15)",
            display: "block",
          }}
        />
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "14px",
          }}
        >
          <p
            style={{
              color: "#B54A2C",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            {currentAkello.badge}
          </p>

          <div
            role="tablist"
            aria-label="Book edition language"
            style={{
              display: "inline-flex",
              gap: "6px",
              background: "#E6DFD1",
              padding: "4px",
              borderRadius: "24px",
            }}
          >
            {AKELLO_EDITIONS.map((edition) => {
              const isActive = edition.id === akelloLang;
              return (
                <button
                  key={edition.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setAkelloLang(edition.id)}
                  className="pressable"
                  style={{
                    padding: "5px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "none",
                    background: isActive ? "#163F28" : "transparent",
                    color: isActive ? "#FAF7F1" : "#3a352c",
                  }}
                >
                  {edition.label}
                </button>
              );
            })}
          </div>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: "clamp(22px,2.6vw,30px)",
            color: "#163F28",
            margin: "0 0 6px",
          }}
        >
          {currentAkello.title}
        </h2>
        <p style={{ fontSize: "14px", color: "#7d7666", margin: "0 0 18px", fontWeight: 500 }}>
          {currentAkello.subtitle}
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3a352c", margin: "0 0 16px" }}>
          {currentAkello.body}
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
          {currentAkello.highlight}
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
            {currentAkello.ctaPrefix}{" "}
            <a
              href={`mailto:lumupatricia5@gmail.com?subject=${encodeURIComponent(
                `Order: ${currentAkello.title}`
              )}`}
              style={{ color: "#B54A2C", fontWeight: 600, textDecoration: "underline" }}
            >
              lumupatricia5@gmail.com
            </a>{" "}
            {currentAkello.ctaSuffix}
          </p>
        </div>
      </div>
    </article>
  );
}
