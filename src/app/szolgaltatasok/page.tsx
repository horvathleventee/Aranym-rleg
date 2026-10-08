import type { Metadata } from "next";
import { Phone, ArrowUpRight, Info } from "lucide-react";
import {
  PageIntro,
  ServiceCard,
  ContactSection,
  SourceNote,
} from "@/components/shared";
import { services, pharmacy } from "@/data/pharmacy";
export const metadata: Metadata = {
  title: "Szolgáltatások",
  description:
    "A patika honlapján közölt gyógyszerészi szolgáltatások áttekintése, forrásokkal és elérhetőséggel.",
};
export default function Services() {
  return (
    <>
      <PageIntro
        label="Szolgáltatások"
        title="Segítség, amire számíthat."
        description="A gyógyszerellátástól a személyes tanácsadásig: tekintse át a patika saját honlapján bemutatott szolgáltatásokat."
      />
      <section className="container section-bottom">
        <div className="notice">
          <Info size={20} />
          <p>
            A felsorolás a hivatalos honlapon közölt szolgáltatásokon alapul. Az
            aktuális elérhetőséget, feltételeket és díjakat a patika tudja
            megerősíteni.
          </p>
        </div>
        <div className="services-grid services-full">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="service-anchor">
              <ServiceCard service={s} number={i + 1} />
              <a
                className="service-source"
                href={s.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hivatalos szolgáltatásleírás
                <ArrowUpRight size={13} />
              </a>
            </div>
          ))}
        </div>
        <SourceNote services />
        <div className="inline-cta">
          <div>
            <h2>Kérdése van egy szolgáltatásról?</h2>
            <p>Egyeztessen közvetlenül a gyógyszertárral.</p>
          </div>
          <a className="button button-primary" href={pharmacy.phoneHref}>
            <Phone size={17} />
            {pharmacy.phone}
          </a>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
