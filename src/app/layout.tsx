import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/shared";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Aranymérleg Patika – Egyensúlyban az egészséggel | Demó",
    template: "%s | Aranymérleg Patika – Demó",
  },
  description:
    "Független weboldalkoncepció a kiskunhalasi Aranymérleg Patika számára. Szolgáltatások, elérhetőségek és tájékoztató nyitvatartás.",
  robots: { index: false, follow: false },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173f35",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body>
        <a href="#main-content" className="skip-link">
          Ugrás a tartalomhoz
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
