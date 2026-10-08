"use client";
import { useState } from "react";
import { Leaf, Plus, SlidersHorizontal } from "lucide-react";
import { offers, categories, type Category, type Offer } from "@/data/pharmacy";

function Product({ offer }: { offer: Offer }) {
  return (
    <div className={"product-stage " + offer.color} aria-hidden="true">
      <div className="product-halo" />
      <div className={"product " + offer.variant}>
        <div className="product-cap" />
        <div className="product-label">
          <span className="product-brand">ARANYMÉRLEG</span>
          {offer.variant === "tea" ? (
            <Leaf size={30} strokeWidth={1} />
          ) : (
            <Plus size={27} strokeWidth={1} />
          )}
          <strong>
            {offer.variant === "bottle"
              ? "VITAMIN"
              : offer.variant === "tube"
                ? "HYDRA"
                : "KAMILLA"}
          </strong>
          <span>
            {offer.variant === "bottle"
              ? "MINDENNAPOK"
              : offer.variant === "tube"
                ? "GYENGÉD ÁPOLÁS"
                : "VIRÁGZAT"}
          </span>
          <i>DEMO COLLECTION</i>
        </div>
      </div>
      <span className="product-caption">ILLUSZTRÁCIÓ</span>
    </div>
  );
}
export function OfferGrid({ filterable = false }: { filterable?: boolean }) {
  const [category, setCategory] = useState<Category>("Összes");
  const visible = offers.filter(
    (offer) => category === "Összes" || offer.category === category,
  );
  return (
    <>
      {filterable && (
        <div className="filter-row">
          <div
            role="group"
            aria-label="Ajánlatok szűrése kategória szerint"
            className="filters"
          >
            {categories.map((c) => (
              <button
                type="button"
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <span className="filter-count" role="status">
            <SlidersHorizontal size={15} />
            {visible.length} mintaajánlat
          </span>
        </div>
      )}
      <div className="offers-grid">
        {visible.map((offer) => (
          <article key={offer.id} className="offer-card">
            <div className="offer-visual">
              <Product offer={offer} />
              <span className="demo-label">DEMÓAJÁNLAT</span>
              <span className="offer-category">{offer.category}</span>
            </div>
            <div className="offer-content">
              <h3>{offer.title}</h3>
              <p>{offer.subtitle}</p>
              <div className="price-row">
                <span>
                  {offer.price} <small>Ft</small>
                </span>
                <span className="sample-price">Szemléltető ár</span>
              </div>
              <div className="offer-period">{offer.period}</div>
              <p className="offer-disclaimer">
                Nem valós ajánlat, a termék nem rendelhető.
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
