import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sprout,
  HeartHandshake,
  MapPin,
  Phone,
  Clock3,
  Plus,
} from "lucide-react";
import { pharmacy, services } from "@/data/pharmacy";
import {
  Eyebrow,
  DirectionsButton,
  ServiceCard,
  SectionHeading,
  ContactSection,
} from "@/components/shared";
import { OfferGrid } from "@/components/offer-grid";

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <Eyebrow>Kiskunhalas · 1990 óta</Eyebrow>
          <h1>
            Egyensúlyban
            <br />
            az <em>egészséggel.</em>
          </h1>
          <p>
            Szakértelem, figyelem és személyes gondoskodás.
            <br className="desktop-break" /> Fedezze fel az Aranymérleg Patikát.
          </p>
          <div className="button-row">
            <Link href="/szolgaltatasok" className="button button-primary">
              Miben segíthetünk?
              <ArrowUpRight size={18} />
            </Link>
            <DirectionsButton light />
          </div>
          <div className="hero-footnote">
            <span className="mini-cross">
              <Plus size={17} />
            </span>
            <span>
              A patika története 1990-ben kezdődött.
              <Link href="/rolunk">
                Ismerje meg közelebbről <ArrowRight size={13} />
              </Link>
            </span>
          </div>
        </div>
        <div className="hero-art">
          <Image
            src="/apothecary.svg"
            alt="Saját készítésű patikai csendélet: borostyánszínű üveg, porcelán mozsár és botanikai ágak."
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="art-caption">
            <span>TRADÍCIÓ ÉS ODAFIGYELÉS</span>
            <span>EST. 1990</span>
          </div>
          <div className="hero-seal">
            <Sprout size={22} strokeWidth={1.3} />
            <span>
              Az egészség
              <br />
              közös érték.
            </span>
          </div>
        </div>
      </section>
      <section className="quick-info container" aria-label="Fontos információk">
        <Link href="/kapcsolat">
          <span className="quick-icon">
            <MapPin />
          </span>
          <div>
            <small>ITT TALÁL BENNÜNKET</small>
            <strong>Szász Károly utca 2.</strong>
            <span>6400 Kiskunhalas</span>
          </div>
          <ArrowUpRight className="quick-arrow" size={18} />
        </Link>
        <Link href="/kapcsolat#nyitvatartas">
          <span className="quick-icon">
            <Clock3 />
          </span>
          <div>
            <small>HÉTKÖZNAPI NYITVATARTÁS</small>
            <strong>07:30 – 18:30*</strong>
            <span>* A zárás telefonon ellenőrzendő</span>
          </div>
          <ArrowUpRight className="quick-arrow" size={18} />
        </Link>
        <a href={pharmacy.phoneHref}>
          <span className="quick-icon">
            <Phone />
          </span>
          <div>
            <small>HÍVJA A GYÓGYSZERTÁRAT</small>
            <strong>{pharmacy.phone}</strong>
            <span>Érdeklődjön közvetlenül a patikánál</span>
          </div>
          <ArrowUpRight className="quick-arrow" size={18} />
        </a>
      </section>
      <section className="container section-space services-section">
        <SectionHeading
          label="Szakértelem a mindennapokhoz"
          title="Több figyelem. Több segítség."
          href="/szolgaltatasok"
          link="Összes szolgáltatás"
        />
        <div className="services-grid">
          {services.slice(0, 4).map((s, i) => (
            <ServiceCard key={s.id} service={s} number={i + 1} />
          ))}
        </div>
        <p className="section-footnote">
          A patika honlapján szereplő szolgáltatások. Az aktuális elérhetőségről
          telefonon érdeklődjön.
        </p>
      </section>
      <section className="offers-section section-space">
        <div className="container">
          <SectionHeading
            label="Válogatás a mindennapokra"
            title="Egy kis figyelmesség magunknak."
            href="/akciok"
            link="Ajánlatok megtekintése"
          />
          <p className="demo-explainer">
            Bemutató kínálat · Az alábbi termékek és árak fiktívek, nem a patika
            valódi akciói.
          </p>
          <OfferGrid />
        </div>
      </section>
      <section className="container about-section section-space">
        <div className="about-art">
          <div className="about-art-inner">
            <span className="about-year">1990</span>
            <Sprout size={92} strokeWidth={0.8} />
            <span>
              GYÖKEREINK HELYBEN.
              <br />
              FIGYELMÜNK ÖNÖN.
            </span>
          </div>
          <p>Aranymérleg Patika · Kiskunhalas</p>
        </div>
        <div className="about-copy">
          <Eyebrow>A történetünk</Eyebrow>
          <h2>
            Helyi érték.
            <br />
            <em>Személyes odafigyelés.</em>
          </h2>
          <p>
            A patikát három gyógyszerész alapította 1990-ben. A hivatalos
            bemutatkozás a gondos gyógyszerellátást és a felkészült szakmai
            tanácsadást helyezi a középpontba.
          </p>
          <div className="values">
            <span>
              <ShieldCheck size={21} />
              Szakmai elhivatottság
            </span>
            <span>
              <HeartHandshake size={21} />
              Emberközpontú szemlélet
            </span>
          </div>
          <Link href="/rolunk" className="text-link">
            Ismerje meg a patikát
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="duty-band container">
        <div className="duty-symbol">
          <Plus size={30} />
        </div>
        <div>
          <h2>Nyitvatartási időn túl keres gyógyszertárat?</h2>
          <p>
            Az aktuális ügyeletet a hivatalos gyógyszertárkeresőben
            ellenőrizheti.
          </p>
        </div>
        <Link href="/ugyelet" className="button button-light">
          Ügyeleti információk
          <ArrowUpRight size={18} />
        </Link>
      </section>
      <ContactSection />
    </>
  );
}
