# Ellenőrzési jegyzőkönyv
Dátum: 2026. október 8.

## Sikeres ellenőrzések
- npm run lint: 0 hiba, 0 figyelmeztetés.
- npm run typecheck: sikeres.
- npm run build: sikeres Next.js 16.4.0 production build, minden tartalmi oldal statikusan előállítva.
- npm run test:e2e: 18/18 teszt sikeres (23,6 s), asztali Chrome és emulált mobil Chrome.
- Mind a hat oldal: HTTP 200, magyar nyelv, egy H1, egyedi cím, noindex, demójelölés, nincs vízszintes túlcsordulás vagy futásidejű JavaScript-hiba.
- Axe: nincs talált WCAG 2 A/AA, 2.1 AA, 2.2 AA szabálysértés a vizsgált alapnézetekben.
- Ajánlatok: három kategória szűrése, összes visszaállítása, demójelölés megőrzése.
- Navigáció: mobilmenü, Escape és fókuszvisszaadás, oldalváltás, tartalomátugró link.
- Kapcsolati és ügyeleti linkek céljának ellenőrzése.
- Nem létező útvonal: HTTP 404 és működő visszalink.
- Külön 320 pixeles ellenőrzés: mind a hat oldal túlcsordulás nélkül.
- Asztali és mobil képernyőképek vizuális ellenőrzése megtörtént.
- npm audit --omit=dev: 0 sérülékenység.

## Javított hibák
A kezdeti böngészős teszt másik, a 3000-es porton futó projektet ért el. A tesztek most saját 3107-es portot használnak, meglévő szerver újrahasználata nélkül.
Javítva: halvány feliratok kontrasztja, mobilos hívásikon hozzáférhető neve, 320 pixeles főoldali címsor és szolgáltatáskártyák, keskeny képernyőn túlérő ügyeleti sáv.

## Korlátok
Nem történt Lighthouse-pontszámmérés, valós mobileszközös, Safari- vagy képernyőolvasós audit; a WCAG cél automata ellenőrzése nem tanúsítás.
A teljes npm audit 5 high jelzést ad egyetlen fejlesztői lintfüggőségi láncban (braces; GHSA-vfj7-8cjw-p6xm). A kiadott legfrissebb braces 3.0.3 érintett, javítás még nincs; production függőség nem érintett.
Node 22.11 alatt a tesztek sikeresek, de egy lintfüggőség 22.13+ verziót kér. Új környezethez Node 22.13+ vagy támogatott frissebb LTS ajánlott.

## Artefaktumok
- test-results/report/index.html: Playwright HTML jelentés.
- test-results/desktop, test-results/mobile: teljes oldalas képernyőképek.
- test-results/visual: asztali és mobil áttekintő képek.
- scripts/visual-check.mjs: a http://localhost:3106 alatt futó előnézet vizuális és 320 px ellenőrzése.
