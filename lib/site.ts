const configuredPhone =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "";

export const site = {
  name: "MAISON ÉLARA",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://maison-elara-phi.vercel.app"
  ).replace(/\/$/, ""),
  phone: configuredPhone || "60000000000",
  configured:
    /^[1-9]\d{6,14}$/.test(configuredPhone) &&
    configuredPhone !== "60000000000",
  email: "Email to be announced",
  instagram: "Instagram to be announced",
};
export const whatsapp = (message: string) =>
  `https://wa.me/${site.phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
export const photos = {
  hero: "/images/hero.webp",
  table: "/images/table.webp",
  flowers: "/images/flowers.webp",
  couple: "/images/couple.webp",
  venue: "/images/hero.webp",
  detail: "/images/detail.webp",
};
export const collections = [
  {
    slug: "essentielle",
    name: "Essentielle",
    subtitle: "The beauty of simplicity",
    description:
      "An intimate expression of timeless beauty, thoughtfully curated for meaningful celebrations.",
    image: photos.flowers,
    features: [
      "Essential wedding styling",
      "Curated design direction",
      "Elegant presentation details",
      "Selected personalization options",
    ],
    customization:
      "Soft seasonal flowers, handwritten place cards, and an intimate candlelit setting.",
  },
  {
    slug: "signature",
    name: "Signature",
    subtitle: "Distinctively, beautifully yours",
    description:
      "A refined celebration experience where thoughtful details and personalized elegance come together.",
    image: photos.table,
    features: [
      "Enhanced wedding styling",
      "Personalized visual concepts",
      "Premium decorative elements",
      "Expanded customization options",
      "Elevated guest experience",
    ],
    customization:
      "A personal colour story, sculptural floral arrangements, and a considered journey for every guest.",
  },
  {
    slug: "prestige",
    name: "Prestige",
    subtitle: "An extraordinary vision, realised",
    description:
      "A celebration without compromise, created to reflect an extraordinary vision.",
    image: photos.venue,
    features: [
      "Bespoke design direction",
      "Premium event aesthetics",
      "Extensive personalization",
      "Exclusive styling concepts",
      "Dedicated concept consultation",
    ],
    customization:
      "Architectural installations, layered tablescapes, and a complete visual world imagined around you.",
  },
];
export const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Collections", "/collections"],
  ["Customization", "/customization"],
  ["E-Invitations", "/e-invitations"],
  ["QR Gallery", "/qr-gallery"],
  ["Combinations & À La Carte", "/combinations"],
  ["Editorial Gallery", "/gallery"],
  ["Contact", "/contact"],
];
