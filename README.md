# Aranymérleg Patika – független weboldalkoncepció

Hatoldalas, magyar nyelvű, reszponzív Next.js App Router alkalmazás. Nem hivatalos gyógyszertári weboldal; a készítő nem áll kapcsolatban a patikával. A projekt helye: D:\aranymerleg.

## Indítás

Node.js 22.13+ (vagy támogatott frissebb LTS), npm szükséges. A jelenlegi fejlesztőgép Node 22.11-et használ, amelynél egy lintfüggőség engine-figyelmeztetést ad; új telepítéshez 22.13+ javasolt.

```powershell
cd D:\aranymerleg
npm ci
npm run dev
```

Böngésző: http://localhost:3000. Ha a port foglalt (ezen a gépen másik projekt használja), PowerShellben: npm.cmd run dev -- --port 3106. Ekkor: http://localhost:3106. Az átadáskor a production előnézet a 3106-os porton fut.

Production:

```powershell
npm run build
npm run start
```

## Ellenőrzések

```powershell
npm run lint
npm run typecheck
npm run build
npm run test:e2e
npm audit --omit=dev
```

A Playwright-tesztekhez Google Chrome szükséges. Az alapbeállítás a telepített Chrome-ot használja, külön böngészőletöltés nélkül. Más környezetben a playwright.config.ts channel beállítása módosítható, vagy használható a Playwright Chromium. A tesztek a production buildet indítják, ezért előbb build szükséges.
A tesztek mind a hat oldalt asztali és mobil nézetben vizsgálják: HTTP-státusz, noindex, magyar nyelv, címsor, vízszintes túlcsordulás, böngészős hibák, axe WCAG 2/2.1/2.2 AA szabályok, kategóriaszűrés, mobilmenü, Escape-fókusz, átugrólink, külső linkcélok és 404.
Az automata akadálymentességi ellenőrzés nem teljes WCAG-megfelelőségi tanúsítás.
Képernyőképek és HTML-tesztjelentés: test-results/ (gitből kizárva).

## Oldalak

- / – főoldal, szolgáltatások, demóajánlatok, bemutatkozás, kapcsolat
- /rolunk – forrásalapú történet és értékek
- /szolgaltatasok – hat, a patika oldalán közölt szolgáltatás
- /akciok – három fiktív ajánlat, működő kategóriaszűrés
- /ugyelet – hivatalos gyógyszertárkereső, forrásellenőrzési dátum
- /kapcsolat – hívás, email, Google Maps útvonal, tájékoztató órák, saját szemléltető helyszínrajz

## Szerkezet

- src/app/ – App Router oldalak, Metadata API, globális stílusok, robots és favicon
- src/components/ – navigáció, ajánlatszűrő, közös tartalmi elemek
- src/data/pharmacy.ts – típusos tartalom, források, elérhetőségek, ajánlatok
- public/apothecary.svg – saját, reszponzív vektoros patikai illusztráció
- docs/AUDIT.md – források, korlátok, UX-audit és tervezési döntések
- tests/ – Playwright + axe működési és hozzáférhetőségi ellenőrzések

React, TypeScript strict mód, Tailwind CSS 4, Lucide React ikonok. Az arculat CSS-változókra és újrafelhasználható komponensekre épül. Nincs adatbázis, backend, űrlap, gyógyszervásárlás, vénykezelés vagy egészségügyi adatgyűjtés. A menü és szűrés klienskomponensek; a többi oldal alapvetően statikusan renderelhető.
A mozgások tiszteletben tartják a prefers-reduced-motion beállítást. Rendszerbetűk és helyi SVG-k miatt nincs külső font- vagy képkérés. A saját CSS-termékmakettek és az SVG nem a valódi patikát vagy valódi termékeket ábrázolják. Térkép csak felhasználói kattintás után nyílik meg külső oldalon.

## Adathitelesség

Ellenőrzés: 2026. október 8. A nyilvános honlap adatainak átvétele nem jelent közvetlen üzleti megerősítést.
A hétköznapi zárás ellentmondásos: 18:30 a nyitvatartási blokkban, 19:00 a bemutatkozásban. Ez a felületen jelzett; nincs „most nyitva” állítás.
Nincs hitelesített napi ügyeleti beosztás; kizárólag hatósági keresőhivatkozás.
Minden ajánlat demo:true jelölésű és a felületen is egyértelműen fiktív. A dátum mintaidőszak, a demó sosem nevezi az ajánlatokat élő kedvezménynek.
A hivatalos szolgáltatási oldal indexelt tartalma volt elérhető; a tényleges aktuális elérhetőséget a patikával egyeztetni kell.
A noindex metadata és robots.txt tiltja az indexelést. Ez nem hozzáférés-védelem.

## Későbbi admin / CMS

A tartalom a src/data/pharmacy.ts fájlban módosítható. A típusok alapján később CMS adapter vezethető be; validálás, szerepkörök, változási napló, képfeltöltés és publikálási folyamat szükséges. Valós ajánlatokhoz explicit kezdő- és lejárati dátum, időzóna és automatikus lejáratkezelés kerüljön a modellbe.

## Függőségi audit és ismert korlátok

A 2026-10-08-i npm audit --omit=dev eredménye: 0 sérülékenység. A teljes audit 5 high jelzést ad ugyanazon fejlesztői láncban: eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces. A braces legfrissebb elérhető verziója (3.0.3) is érintett; javítás megjelenésekor frissítendő. Nem alkalmaztunk a Next.js 16 konfigurációját visszaminősítő automatikus force javítást. A hibajelzés nem érinti a production függőségeket.

## Élesítés előtt

1. A patika megbízása, arculat és összes tartalom jóváhagyása.
2. Cím, telefon, nyitvatartás, ünnepnapok és szolgáltatások közvetlen megerősítése.
3. Fiktív ajánlatok cseréje jóváhagyott, időben érvényes termékadatokra.
4. Jogi/gyógyszerészeti tartalmi ellenőrzés, szükséges impresszum és adatkezelési tájékoztató.
5. Hiteles ügyeleti adatfolyam és frissítési/lejárati szabály, ha saját beosztás kerül az oldalra.
6. Valós márkaanyagok, fotók felhasználási jogának tisztázása.
7. Domain, tárhely, HTTPS, biztonsági fejlécek, naplózás és karbantartás; függőségek frissítése.
8. Valós eszközös és képernyőolvasós ellenőrzés, teljesítménymérés.
9. A demójelölés és indexelési tiltás eltávolítása csak jóváhagyott hivatalos publikáláskor; ekkor canonical URL, sitemap és ellenőrzött szervezeti metaadatok hozzáadása.
