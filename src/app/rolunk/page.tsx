import type { Metadata } from "next";
import { Scale, HeartHandshake, ShieldCheck, Sprout } from "lucide-react";
import {
  PageIntro,
  ContactSection,
  SourceNote,
  Eyebrow,
} from "@/components/shared";
export const metadata: Metadata = {
  title: "Rólunk",
  description:
    "A kiskunhalasi Aranymérleg Patika története a hivatalos bemutatkozás alapján. Független weboldalkoncepció.",
};
export default function About() {
  return (
    <>
      <PageIntro
        label="Rólunk"
        title="Szakértelem, amelynek története van."
        description="Egy helyi gyógyszertár története, ahol a szakmai felkészültség és a személyes figyelem találkozik."
      />
      <section className="container story-grid">
        <div className="story-panel">
          <Scale size={64} strokeWidth={1} />
          <span className="story-year">1990</span>
          <p>
            Három gyógyszerész.
            <br />
            Egy közös elhivatottság.
          </p>
          <span>KISKUNHALAS</span>
        </div>
        <div className="story-copy">
          <Eyebrow>A hivatalos bemutatkozás nyomán</Eyebrow>
          <h2>
            Helyben gyökerező
            <br />
            <em>gyógyszerészi hivatás.</em>
          </h2>
          <p>
            Az Aranymérleg Patikát 1990-ben három gyógyszerész alapította. Saját
            honlapjuk szerint 1993-ban megkapták a Magángyógyszerészek Országos
            Szövetségének „Év Patikája” elismerését.
          </p>
          <p>
            A történeti bemutatkozás 2001-es korszerűsítésről és 2003-ban
            bevezetett minőségbiztosítási rendszerről is beszámol. A gondos
            gyógyszerellátás és a szakmai felvilágosítás a patika megfogalmazott
            céljai közé tartozik.
          </p>
          <SourceNote />
        </div>
      </section>
      <section className="container section-space">
        <h2>Értékek a mindennapokban.</h2>
        <div className="values-grid">
          {[
            {
              Icon: ShieldCheck,
              title: "Szakmai felkészültség",
              text: "A hivatalos bemutatkozás hangsúlyozza a hiteles gyógyszerészi tájékoztatás szerepét.",
            },
            {
              Icon: HeartHandshake,
              title: "Személyes figyelem",
              text: "A gyógyszerekkel kapcsolatos kérdések személyesen, a patika szakembereivel beszélhetők meg.",
            },
            {
              Icon: Sprout,
              title: "Folyamatos fejlődés",
              text: "A patika honlapja a működés korszerűsítéséről és technológiai fejlesztési projektről is tájékoztat.",
            },
          ].map(({ Icon, title, text }) => (
            <article className="value-card" key={title}>
              <Icon size={28} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
