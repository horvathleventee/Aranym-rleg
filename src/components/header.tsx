"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X, Phone, Scale, ArrowUpRight } from "lucide-react";
import { navigation, pharmacy } from "@/data/pharmacy";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <>
      <div className="demo-banner">
        <span className="demo-dot" />
        Független weboldalkoncepció · Nem a gyógyszertár hivatalos oldala.
        <a href={pharmacy.website} target="_blank" rel="noopener noreferrer">
          Hivatalos honlap <ArrowUpRight size={12} />
        </a>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            className="brand"
            href="/"
            aria-label="Aranymérleg Patika – főoldal"
            onClick={() => setOpen(false)}
          >
            <span className="brand-symbol">
              <Scale size={29} strokeWidth={1.4} />
            </span>
            <span>
              Aranymérleg<small>PATIKA · KISKUNHALAS</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Fő navigáció">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="header-phone"
            href={pharmacy.phoneHref}
            aria-label={"A patika hívása: " + pharmacy.phone}
          >
            <Phone size={16} />
            <span>{pharmacy.phone}</span>
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobil navigáció"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false);
                toggle.current?.focus();
              }
            }}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <ArrowUpRight size={16} />
              </Link>
            ))}
            <a href={pharmacy.phoneHref}>
              Telefonálok <Phone size={16} />
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
