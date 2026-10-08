import type { Metadata } from "next";
import { Phone, Mail, MapPin, ArrowUpRight, Scale } from "lucide-react";
import {
  PageIntro,
  Hours,
  SourceNote,
  DirectionsButton,
} from "@/components/shared";
import { pharmacy } from "@/data/pharmacy";
export const metadata: Metadata = {
  title: "Kapcsolat és nyitvatartás",
  description:
    "Aranymérleg Patika, Kiskunhalas, Szász Károly utca 2. Telefon, útvonaltervezés és ellenőrzendő nyitvatartási információk.",
};
export default function Contact() {
  return (
    <>
      <PageIntro
        label="Kapcsolat"
        title="Találkozzunk Kiskunhalason."
        description="Cím, elérhetőség és nyitvatartás egy helyen — hogy egyszerűbb legyen megtervezni a látogatást."
      />
      <section className="container contact-page-grid section-bottom">
        <div>
          <div className="contact-details">
            <div>
              <MapPin />
              <span>
                <small>CÍM</small>
                <strong>{pharmacy.address}</strong>
              </span>
            </div>
            <div>
              <Phone />
              <span>
                <small>TELEFON</small>
                <a href={pharmacy.phoneHref}>{pharmacy.phone}</a>
              </span>
            </div>
            <div>
              <Mail />
              <span>
                <small>E-MAIL</small>
                <a href={"mailto:" + pharmacy.email}>{pharmacy.email}</a>
              </span>
            </div>
          </div>
          <DirectionsButton />
          <SourceNote />
        </div>
        <div id="nyitvatartas">
          <Hours />
        </div>
      </section>
      <section className="container section-bottom">
        <div className="map-card">
          <div
            className="map-drawing"
            role="img"
            aria-label="Szemléltető, nem méretarányos helyszínrajz. A pontos helyet a Google Maps hivatkozás mutatja."
          >
            <div className="map-park" />
            <div className="map-road road-one" />
            <div className="map-road road-two" />
            <div className="map-road road-three" />
            <span className="map-street">Szász Károly utca</span>
            <div className="map-pin">
              <Scale size={26} />
            </div>
            <span className="map-city">KISKUNHALAS</span>
            <span className="map-label">
              Szemléltető helyszínrajz · Nem méretarányos
            </span>
          </div>
          <div className="map-info">
            <MapPin size={25} />
            <h2>Aranymérleg Patika</h2>
            <p>{pharmacy.address}</p>
            <a
              className="text-link"
              href={pharmacy.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pontos hely és útvonal a Google Mapsen
              <ArrowUpRight size={16} />
            </a>
            <p className="map-privacy">
              Az interaktív térkép külön oldalon nyílik meg.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
