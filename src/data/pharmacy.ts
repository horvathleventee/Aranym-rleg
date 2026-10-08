export const pharmacy = {
  name: "Aranymérleg Patika",
  city: "Kiskunhalas",
  address: "6400 Kiskunhalas, Szász Károly utca 2.",
  phone: "+36 77 421 654",
  phoneHref: "tel:+3677421654",
  email: "aranymerlegpatika@t-online.hu",
  website: "https://www.aranymerlegpatika.hu/",
  servicesSource: "https://www.aranymerlegpatika.hu/Szolgaltatasaink_m100",
  dutySource: "https://ogyei.gov.hu/gyogyszertarkereso",
  checkedAt: "2026. október 8.",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Aranymérleg Patika, 6400 Kiskunhalas, Szász Károly utca 2.",
    ),
  hours: [
    { day: "Hétfő – péntek", time: "07:30 – 18:30*", disputed: true },
    { day: "Szombat", time: "07:30 – 12:00", disputed: false },
    { day: "Vasárnap", time: "Zárva", disputed: false },
  ],
  hoursNote:
    "* Ellenőrzendő: a hivatalos oldal nyitvatartási blokkja 18:30-as, bemutatkozása 19:00-s hétköznapi zárást ír. Indulás előtt telefonon egyeztessen. Ünnepnapi nyitvatartás nincs megerősítve.",
} as const;

export const navigation = [
  { href: "/", label: "Főoldal" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/akciok", label: "Akciók" },
  { href: "/ugyelet", label: "Ügyelet" },
  { href: "/kapcsolat", label: "Kapcsolat" },
] as const;

export type ServiceIcon =
  "heart" | "message" | "leaf" | "flask" | "pill" | "activity";
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  source: string;
};
export const services: Service[] = [
  {
    id: "tanacsadas",
    title: "Gyógyszerészi tanácsadás",
    description:
      "Személyes segítség a gyógyszerekkel és alkalmazásukkal kapcsolatos kérdésekben.",
    icon: "message",
    source: pharmacy.servicesSource,
  },
  {
    id: "gondozas",
    title: "Gyógyszerészi gondozás",
    description:
      "Vérnyomás-, vércukor- és koleszterinmérés szerepel a patika szolgáltatásai között.",
    icon: "heart",
    source: pharmacy.servicesSource,
  },
  {
    id: "keszites",
    title: "Egyedi gyógyszerkészítés",
    description:
      "Orvosi vényre, egyéni igények szerint készített magisztrális gyógyszerek.",
    icon: "flask",
    source: pharmacy.servicesSource,
  },
  {
    id: "gyogynoveny",
    title: "Gyógynövények és gyógyteák",
    description:
      "Gyógynövények, gyógyteák és gyógynövény alapú készítmények a kínálatban.",
    icon: "leaf",
    source: pharmacy.servicesSource,
  },
  {
    id: "gyogyszer",
    title: "Gyógyszerellátás",
    description:
      "Vényköteles és vény nélkül kiadható gyógyszerek személyes kiszolgálással.",
    icon: "pill",
    source: pharmacy.servicesSource,
  },
  {
    id: "segedeszkoz",
    title: "Gyógyászati segédeszközök",
    description:
      "Kötszerek és gyógyászati segédeszközök; az elérhetőségről érdeklődjön telefonon.",
    icon: "activity",
    source: pharmacy.servicesSource,
  },
];

export const categories = [
  "Összes",
  "Vitaminok",
  "Bőrápolás",
  "Gyógyteák",
] as const;
export type Category = (typeof categories)[number];
export type Offer = {
  id: string;
  title: string;
  category: Exclude<Category, "Összes">;
  subtitle: string;
  price: string;
  variant: "bottle" | "tube" | "tea";
  color: string;
  period: string;
  demo: true;
};
export const offers: Offer[] = [
  {
    id: "vitamin",
    title: "Mindennapi vitamin",
    category: "Vitaminok",
    subtitle: "60 db • fiktív termék",
    price: "2 490",
    variant: "bottle",
    color: "sand",
    period: "2026. október 1–31. • mintaidőszak",
    demo: true,
  },
  {
    id: "krem",
    title: "Gyengéd hidratálókrém",
    category: "Bőrápolás",
    subtitle: "50 ml • fiktív termék",
    price: "3 290",
    variant: "tube",
    color: "sage",
    period: "2026. október 1–31. • mintaidőszak",
    demo: true,
  },
  {
    id: "tea",
    title: "Kamillavirág gyógytea",
    category: "Gyógyteák",
    subtitle: "20 filter • fiktív termék",
    price: "1 190",
    variant: "tea",
    color: "rose",
    period: "2026. október 1–31. • mintaidőszak",
    demo: true,
  },
];
