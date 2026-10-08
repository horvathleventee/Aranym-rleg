import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container page-intro section-bottom">
      <p className="eyebrow">404 · Az oldal nem található</p>
      <h1>Vissza az egyensúlyhoz.</h1>
      <p className="intro-description">
        Ez a hivatkozás nem vezet létező oldalra.
      </p>
      <Link href="/" className="button button-primary">
        Vissza a főoldalra
      </Link>
    </section>
  );
}
