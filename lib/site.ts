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
  hero: "/images/townhouse-hero.webp",
  table: "/images/townhouse-detail.webp",
  flowers: "/images/wildflower-detail.webp",
  couple: "/images/couple.webp",
  venue: "/images/nocturne-hero.webp",
  detail: "/images/detail.webp",
};
export const collections = [
  {
    slug: "wildflower",
    name: "Wildflower",
    chapter: "The glasshouse garden celebration",
    subtitle: "A little untamed. Entirely romantic.",
    shortDescription:
      "Meadow flowers, Victorian glass, and a garden lunch in soft English light.",
    description: "For love stories with a little English garden magic.",
    story:
      "Inside a botanical glasshouse, meadow flowers soften the ironwork and daylight filters through the leaves. Butter-yellow daisies mingle with blue delphiniums, then a garden lunch unfolds at its own easy pace. Wildflower takes its cue from the romance of London’s gardens: natural, relaxed, and full of life.",
    image: "/images/wildflower-hero.webp",
    detailImage: "/images/wildflower-detail.webp",
    imageAlt:
      "An English botanical glasshouse ceremony with meadow flowers and light oak chairs",
    detailAlt:
      "A sage garden luncheon with yellow candles and blue and blush meadow flowers",
    atmosphere: "Sunlit & free-spirited",
    setting: "Glasshouses & walled gardens",
    palette: "Sage · Butter yellow · Cornflower",
    colours: ["#829172", "#e7cf85", "#8babc8"],
    materials: "Rattan, washed linen, handmade ceramics",
    features: [
      "Meadow-style ceremony aisle with loose seasonal flowers",
      "Sage linen and a softly coloured garden tablescape",
      "Botanical stationery and handwritten place details",
      "An intimate, relaxed outdoor dining direction",
    ],
    customization:
      "Make the meadow your own: a favourite garden flower, a hand-drawn illustration of your venue, or a soft blue ribbon that finds its way into every place setting.",
    personalDetails: [
      "A petal-lined aisle",
      "Botanical welcome stationery",
      "A garden aperitif corner",
    ],
    galleryCaption: "The ceremony, in bloom. The table, in sunlight.",
  },
  {
    slug: "nocturne",
    name: "Nocturne",
    chapter: "The London evening celebration",
    subtitle: "When the evening becomes the occasion.",
    shortDescription:
      "Burgundy florals, sculptural candlelight, and the city after dark.",
    description:
      "For an evening with a little drama, and a presence all its own.",
    story:
      "Evening settles over London. Beyond the windows of an old brick hall, the streets begin to glow. Inside, wine-red linen, deep red flowers, and candlelight create a world of their own. Nocturne brings a fashion-editorial sensibility to the wedding table: confident contrasts, sculptural silhouettes, and a mood that deepens as the evening unfolds.",
    image: "/images/nocturne-hero.webp",
    detailImage: "/images/nocturne-detail.webp",
    imageAlt:
      "An intimate London warehouse-inspired wedding reception with burgundy flowers and candlelight",
    detailAlt:
      "Burgundy roses, black velvet linen, smoked crystal and sculptural silver candleholders",
    atmosphere: "Dramatic & intimate",
    setting: "London lofts & evening receptions",
    palette: "Oxblood · Onyx · Silver",
    colours: ["#652d39", "#292427", "#b7b5b1"],
    materials: "Velvet, smoked glass, polished silver",
    features: [
      "Sculptural burgundy florals and a dramatic candle composition",
      "Dark velvet tables with silver and smoked-glass accents",
      "A monogram-led stationery direction with strong typography",
      "An atmospheric reception and late-evening lounge concept",
    ],
    customization:
      "Choose a deeper shade of red, an illustrated cocktail menu, or a silver monogram carried from your invitation to the table. Let the evening reflect your own sense of occasion.",
    personalDetails: [
      "A monogrammed menu",
      "An intimate cocktail lounge",
      "A candlelit entrance moment",
    ],
    galleryCaption: "The room, after dark. The details, in the spotlight.",
  },
  {
    slug: "townhouse",
    name: "The Townhouse",
    chapter: "The London house celebration",
    subtitle: "A beautifully intimate London affair.",
    shortDescription:
      "Powder-blue linen, English roses, and a table that feels like home.",
    description:
      "For a small gathering with the warmth of a house, and the grace of an occasion.",
    story:
      "Beyond the front door, a London townhouse opens into rooms full of afternoon light. Sweet peas rest in small silver vases. Powder-blue linen softens an antique table. The Townhouse is a study in English understatement: personal, quietly elegant, and intimate enough for every conversation to matter.",
    image: "/images/townhouse-hero.webp",
    detailImage: "/images/townhouse-detail.webp",
    imageAlt:
      "An intimate wedding reception in a Georgian London-inspired townhouse with powder-blue linen",
    detailAlt:
      "English sweet peas, blush roses, pale-blue china and silver at a townhouse wedding table",
    atmosphere: "Understated & intimate",
    setting: "Townhouses & private dining rooms",
    palette: "Powder blue · Porcelain · Blush",
    colours: ["#b6c9d6", "#eeeae2", "#d9b7b0"],
    materials: "Antique silver, fine china, crisp linen",
    features: [
      "An intimate house-wedding styling direction with English garden roses",
      "Powder-blue linen, antique silver and porcelain table details",
      "Personal stationery inspired by the architecture of a London square",
      "An elegant afternoon reception and private-dining concept",
    ],
    customization:
      "A sketch of your favourite London street, a family piece of silver, or a personal note at every place. Bring the small things that make a room feel like yours.",
    personalDetails: [
      "A hand-drawn house portrait",
      "Personal notes at the table",
      "An afternoon champagne welcome",
    ],
    galleryCaption: "A house full of light. A table full of stories.",
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
