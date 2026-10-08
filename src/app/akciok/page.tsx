import type { Metadata } from "next";
import { Info, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/shared";
import { OfferGrid } from "@/components/offer-grid";
import { pharmacy } from "@/data/pharmacy";
export const metadata: Metadata = {
  title: "Akciók – demóajánlatok",
  description:
    "Szűrhető, fiktív termékkínálat a weboldalkoncepció bemutatására. Az árak és ajánlatok nem valósak.",
};
export default function Offers() {
  return (
    <>
      <PageIntro
        label="Akciók"
        title="Apró figyelmesség. Mindennap."
        description="Így jelenhet meg egy átlátható, könnyen böngészhető ajánlati kínálat a patika új weboldalán."
      />
      <section className="container section-bottom">
        <div className="notice">
          <Info size={22} />
          <p>
            <strong>Bemutató kínálat.</strong> Minden itt látható termék, ár és
            időszak fiktív demóadat. Nem a patika aktuális kedvezményei, és nem
            vásárolhatók meg ezen az oldalon.
          </p>
        </div>
        <OfferGrid filterable />
        <div className="inline-cta">
          <div>
            <h2>Valódi ajánlatokat keres?</h2>
            <p>
              Az aktuális kínálatról a gyógyszertár hivatalos oldalán
              tájékozódjon.
            </p>
          </div>
          <a
            className="button button-primary"
            href={pharmacy.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hivatalos honlap
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
