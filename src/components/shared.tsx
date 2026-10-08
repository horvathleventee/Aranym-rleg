import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Clock3,
  Scale,
  HeartPulse,
  MessagesSquare,
  Leaf,
  FlaskConical,
  Pill,
  Activity,
  ExternalLink,
  Info,
} from "lucide-react";
import {
  pharmacy,
  navigation,
  type Service,
  type ServiceIcon,
} from "@/data/pharmacy";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro container">
      <div className="breadcrumb">
        <Link href="/">Főoldal</Link>
        <span>/</span>
        <span>{label}</span>
      </div>
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <p className="intro-description">{description}</p>
    </section>
  );
}
export function DirectionsButton({ light = false }: { light?: boolean }) {
  return (
    <a
      className={light ? "button button-light" : "button button-primary"}
      href={pharmacy.directions}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MapPin size={17} />
      Útvonaltervezés
      <ArrowUpRight size={17} />
    </a>
  );
}
export function Hours() {
  return (
    <div className="hours">
      <div className="hours-title">
        <Clock3 size={20} />
        <h3>Nyitvatartás</h3>
        <span className="tag">Tájékoztató</span>
      </div>
      <dl>
        {pharmacy.hours.map((h) => (
          <div key={h.day}>
            <dt>{h.day}</dt>
            <dd>{h.time}</dd>
          </div>
        ))}
      </dl>
      <p className="hours-note">{pharmacy.hoursNote}</p>
    </div>
  );
}
const icons: Record<ServiceIcon, typeof Leaf> = {
  heart: HeartPulse,
  message: MessagesSquare,
  leaf: Leaf,
  flask: FlaskConical,
  pill: Pill,
  activity: Activity,
};
export function ServiceCard({
  service,
  number,
}: {
  service: Service;
  number: number;
}) {
  const Icon = icons[service.icon];
  return (
    <article className="service-card">
      <div className="service-top">
        <span className="icon-tile">
          <Icon size={26} strokeWidth={1.5} />
        </span>
        <span className="card-number">0{number}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link
        href={"/szolgaltatasok#" + service.id}
        aria-label={service.title + " – részletek"}
        className="text-link"
      >
        Részletek
        <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
export function SourceNote({ services = false }: { services?: boolean }) {
  return (
    <p className="source-note">
      <Info size={16} />
      <span>
        A patika honlapján közölt adatok alapján. Ellenőrzés:{" "}
        {pharmacy.checkedAt}{" "}
        <a
          href={services ? pharmacy.servicesSource : pharmacy.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Forrás megnyitása <ExternalLink size={12} />
        </a>
      </span>
    </p>
  );
}
export function ContactSection() {
  return (
    <section className="contact-section section-space">
      <div className="container contact-grid">
        <div>
          <Eyebrow>Találkozzunk személyesen</Eyebrow>
          <h2>
            Közel Önhöz.
            <br />
            <em>Kiskunhalas szívében.</em>
          </h2>
          <p className="contact-address">
            <MapPin size={20} />
            {pharmacy.address}
          </p>
          <p className="muted">
            A látogatás megtervezéséhez minden fontos információ egy helyen.
          </p>
          <div className="button-row">
            <DirectionsButton />
            <a className="text-link" href={pharmacy.phoneHref}>
              <Phone size={16} />
              {pharmacy.phone}
            </a>
          </div>
          <SourceNote />
        </div>
        <Hours />
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand footer-brand">
              <span className="brand-symbol">
                <Scale size={29} strokeWidth={1.4} />
              </span>
              <span>
                Aranymérleg<small>PATIKA · KISKUNHALAS</small>
              </span>
            </Link>
            <p>
              Szakértelem és odafigyelés.
              <br />
              Egyensúlyban az egészséggel.
            </p>
          </div>
          <div>
            <h3>Fedezze fel</h3>
            <nav aria-label="Lábléc navigáció">
              {navigation.slice(1).map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>Elérhetőség</h3>
            <p>{pharmacy.address}</p>
            <a href={pharmacy.phoneHref}>{pharmacy.phone}</a>
            <a href={"mailto:" + pharmacy.email}>{pharmacy.email}</a>
            <a
              className="footer-external"
              href={pharmacy.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hivatalos honlap
              <ArrowUpRight size={15} />
            </a>
          </div>
          <div>
            <h3>Nyitvatartás</h3>
            {pharmacy.hours.map((h) => (
              <p className="footer-hours" key={h.day}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </p>
            ))}
            <p className="footer-note">
              * A hétköznapi zárás ellenőrzendő.
              <br />
              Indulás előtt telefonon egyeztessen.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 · Független Aranymérleg Patika weboldalkoncepció.</p>
          <p>
            Nem hivatalos oldal. A készítő nem áll kapcsolatban a patikával.
          </p>
        </div>
      </div>
    </footer>
  );
}
export function SectionHeading({
  label,
  title,
  href,
  link,
}: {
  label: string;
  title: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {href && (
        <Link href={href} className="text-link">
          {link}
          <ArrowRight size={17} />
        </Link>
      )}
    </div>
  );
}
