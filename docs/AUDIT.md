# Aranymérleg Patika – audit és tervezés

Dátum: 2026-10-08. Független, nem hivatalos redesign.

## Források és korlátok

- https://www.aranymerlegpatika.hu/ – a főoldal olvasható.
- https://www.aranymerlegpatika.hu/Szolgaltatasaink_m100 – közvetlen lekérésnél hiba, kereső által indexelt tartalom elérhető. Ez szolgál a szolgáltatások forrásául; jelenlegi elérhetőség telefonon megerősítendő.
- Tanacsadas_m73, Impresszum_m102 – közvetlen webes lekérés sikertelen. Tartalmuk nem auditálható teljesen.
- https://ogyei.gov.hu/gyogyszertarkereso – hatósági kereső; napi ügyeleti beosztás nem került ellenőrzésre.
  Ez tartalmi és információarchitektúra-audit, nem a régi oldal teljes vizuális vagy akadálymentességi felmérése.

## Jelenlegi szerkezet

A főoldalon gyógyszerkereső, sok termékkategória, ABC-listák, honlapajánló, tanácsadás, gyógyszerésznek küldhető kérdés, külső akciós oldal, ügyeleti link és fejlesztés alatt álló webpatika szerepel. A fő tartalom pályázati tájékoztatást, bemutatkozást, kapcsolatot, nyitvatartást és dátum nélküli ügyeleti leírást tartalmaz.

## Megerősített és vitatott adatok

A honlapon közölt cím: Kiskunhalas, Szász Károly utca 2.; telefon: +36 77 421 654; email: aranymerlegpatika@t-online.hu. A főoldali városnév elírását a szolgáltatások oldalon szereplő név alapján normalizáltuk.
Alapítás: 1990; Év Patikája elismerés: 1993 – a patika saját közlései, független igazolás nélkül.
A nyitvatartási blokk hétköznap 07:30–18:30-at, a bemutatkozás 07:30–19:00-t ír. Szombat 07:30–12:00, vasárnap zárva. Nem számítunk élő „nyitva” státuszt.
A szolgáltatások között tanácsadás, gyógyszerellátás, magisztrális készítés, gyógyteák, segédeszközök és vérnyomás-, vércukor-, koleszterinmérés szerepel. Ezek forrásban közölt, nem a patikával közvetlenül megerősített adatok.

## UX-problémák és döntések

- A sok kategória versenyez a cím, telefon és nyitvatartás fontosságával → hat fő navigációs pont, közvetlen hívás és útvonal.
- Hosszú, nehezen pásztázható főoldali szöveg → rövid tartalmi blokkok, világos címsorhierarchia.
- Ellentmondó nyitvatartás → közvetlenül az órák mellett jelzett eltérés.
- Dátum nélküli ügyelet → kizárólag hivatalos kereső, ellenőrzési dátummal és az ellenőrzés határával.
- Hiányzó modern funkciók: átlátható mobilmenü, szűrhető ajánlatok, forrásjelölés, hozzáférhető fókuszállapotok.
- Nem készül gyógyszerkereső, rendelés, vénykezelés vagy egészségügyi kérdőív.

## Dizájn és komponensek

Törtfehér vászon, erdőzöld hangsúly, zsálya és tompa arany. Szerkesztőségi hatású serif címsorok és jól olvasható sans-serif törzsszöveg. Saját SVG patikai csendélet, saját CSS termékmakettek; átvett patikafotó nincs.
Oldalak: /, /rolunk, /szolgaltatasok, /akciok, /ugyelet, /kapcsolat.
Közös héj: DemoBanner → Header → main → Footer. Újrafelhasználható PageIntro, Hours, ServiceCard, ContactSection, OfferGrid. A mobilmenü és ajánlatszűrő klienskomponens, a többi szerverkomponens.
A tartalom src/data/pharmacy.ts alatt típusosan kezelt. Későbbi CMS adapterrel helyettesíthető.
