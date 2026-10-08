import type { Metadata } from "next";
import {
  ArrowUpRight,
  CalendarDays,
  Search,
  MapPin,
  Phone,
  Info,
} from "lucide-react";
import { PageIntro, Eyebrow } from "@/components/shared";
import { pharmacy } from "@/data/pharmacy";
export const metadata: Metadata = {
  title: "Ügyeleti információk",
  description:
    "Ügyeletes gyógyszertár keresése a hivatalos hatósági adatbázisban. Ez a demó nem közöl élő ügyeleti beosztást.",
};
export default function Duty() {
  return (
    <>
      <PageIntro
        label="Ügyelet"
        title="Segítség nyitvatartási időn túl."
        description="A gyógyszertári ügyeleti beosztás változhat. Indulás előtt mindig a hivatalos adatbázisban ellenőrizze az adott napra érvényes információkat."
      />
      <section className="container section-bottom duty-layout">
        <div className="duty-main">
          <span className="status-label">
            <Info size={15} />
            Nincs ellenőrzött napi beosztás
          </span>
          <h2>
            Keresse meg az
            <br />
            <em>ügyeletes gyógyszertárat.</em>
          </h2>
          <p>
            A hatósági gyógyszertárkeresőben település és dátum szerint
            kereshet. Ez a bemutatóoldal nem állítja, hogy az Aranymérleg Patika
            jelenleg ügyeletes.
          </p>
          <a
            className="button button-primary"
            href={pharmacy.dutySource}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hivatalos ügyeletkereső
            <ArrowUpRight size={18} />
          </a>
          <div className="duty-source">
            <strong>Forrás: NNGYK / OGYÉI gyógyszertárkereső</strong>
            <p>Forráshivatkozás ellenőrzése: {pharmacy.checkedAt}</p>
            <p>
              Aktuális ügyeleti adatok: nincs lekért vagy hitelesített beosztás.
            </p>
          </div>
        </div>
        <aside className="steps-panel">
          <Eyebrow>Három egyszerű lépés</Eyebrow>
          {[
            {
              Icon: Search,
              title: "Nyissa meg a keresőt",
              text: "Kövesse a hivatalos ügyeletkereső hivatkozását.",
            },
            {
              Icon: MapPin,
              title: "Válassza ki Kiskunhalast",
              text: "Az ügyeletes gyógyszertár mezőnél keressen település szerint.",
            },
            {
              Icon: CalendarDays,
              title: "Ellenőrizze a dátumot",
              text: "Válassza ki a látogatás napját, és nézze meg a címhez tartozó időpontot.",
            },
          ].map(({ Icon, title, text }, i) => (
            <div className="step" key={title}>
              <span>
                <Icon size={20} />
              </span>
              <div>
                <small>0{i + 1}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </aside>
      </section>
      <div className="container section-bottom">
        <div className="notice">
          <Phone size={20} />
          <p>
            A patika általános elérhetősége:{" "}
            <a href={pharmacy.phoneHref}>{pharmacy.phone}</a>. Ez nem igazolt
            ügyeleti telefonszám.
          </p>
        </div>
      </div>
    </>
  );
}
