// Typed product catalogue for the मaka (Makhana) product-detail pages.
// Ported from the hardcoded `PRODUCTS` object embedded in product.html's inline script.

export interface ProductQuality {
  icon: string;
  title: string;
  desc: string;
}

export interface ProductNutrition {
  calories: number;
  protein: string;
  fat: string;
  carbs: string;
}

export interface ProductVariant {
  img: string;
  weight: string;
  price: number;
  servings: number;
}

export interface PremiumProductVariant extends ProductVariant {
  /** Name of the limited-edition folk-art print featured on the premium jar, when present. */
  art?: string;
  /** Description of the art print, shown alongside `art` in the premium art section. */
  artDesc?: string;
  /** A few premium source photos have two jars baked into one frame — zoom/reposition onto a single jar. */
  imgZoom?: boolean;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  bg: string;
  /** Dark Chocolate's hero visual uses a fixed dark background instead of the pastel `bg`. */
  bgDark?: boolean;
  tag: string;
  /** Limited-edition batch — shows the "no restocks" note. */
  isLimited?: boolean;
  about: string;
  qualities: ProductQuality[];
  ingredients: string;
  nutrition: ProductNutrition;
  regular: ProductVariant;
  premium: PremiumProductVariant;
}

export const PRODUCTS: Record<string, Product> = {
  "himalayan-pink-salt": {
    id: "himalayan-pink-salt",
    name: "Himalayan Pink Salt",
    tagline: "The original. Pure. Addictive.",
    accent: "#C49A8A",
    bg: "#F5EDE8",
    tag: "BESTSELLER",
    about:
      "Sourced from the Khewra mines of Pakistan and the pristine salt flats of Rajasthan, Himalayan Pink Salt is the purest form of flavour. We hand-roast each makhana in small batches and finish with a precise dusting of mineral-rich pink salt. No fillers, no additives, nothing to apologise for.",
    qualities: [
      { icon: "◈", title: "HIGH PROTEIN", desc: "4g of plant protein per serving. Keeps you fuller, sharper, longer." },
      { icon: "◉", title: "LOW CALORIE", desc: "Just 90 calories per 25g serve. The crunch you want, not the guilt." },
      { icon: "◫", title: "MINERAL RICH", desc: "Over 84 trace minerals from authentic Himalayan pink salt crystals." },
      { icon: "◬", title: "GLUTEN FREE", desc: "Naturally gluten-free. Safe for coeliacs and mindful eaters alike." },
    ],
    ingredients: "Roasted makhana (fox nuts), Himalayan pink salt, cold-pressed coconut oil.",
    nutrition: { calories: 90, protein: "4g", fat: "0.8g", carbs: "18g" },
    regular: { img: "/assets/maka-regular-himalayan.png", weight: "80g", price: 149, servings: 3 },
    premium: {
      img: "/assets/maka-premium-himalayan.png",
      weight: "180g",
      price: 349,
      servings: 7,
      art: "WARLI ART",
      artDesc:
        "Warli tribal art from Maharashtra — white pigment on terracotta-red, depicting community harvest and dance. A celebration of the land that gives us our ingredient.",
    },
  },
  "masala-chai": {
    id: "masala-chai",
    name: "Masala Chai",
    tagline: "Chai in a crunch.",
    accent: "#B87A3C",
    bg: "#F5EAD8",
    tag: "FAN FAVOURITE",
    about:
      "The aroma of a Mumbai chai stall — cardamom, star anise, ginger, and cinnamon — locked into every roasted puff. मaka Masala Chai began as an intern experiment and became the most-requested flavour before the brand even launched. Some things are just inevitable.",
    qualities: [
      { icon: "◈", title: "DIGESTIVE SPICES", desc: "Cardamom and ginger support gut health and reduce bloating naturally." },
      { icon: "◉", title: "ANTI-INFLAMMATORY", desc: "Cinnamon and clove are rich in antioxidants that fight inflammation." },
      { icon: "◫", title: "ZERO CAFFEINE", desc: "All the chai energy, none of the jitters. Snack any time of day." },
      { icon: "◬", title: "LOW GLYCAEMIC", desc: "Won't spike your blood sugar — even with all that warming spice." },
    ],
    ingredients:
      "Roasted makhana (fox nuts), cardamom, star anise, cinnamon, ginger, clove, black pepper, cold-pressed coconut oil, rock salt.",
    nutrition: { calories: 94, protein: "4g", fat: "1.2g", carbs: "17g" },
    regular: { img: "/assets/maka-regular-masalachai.png", weight: "80g", price: 149, servings: 3 },
    premium: {
      img: "/assets/maka-premium-masalachai.png",
      weight: "180g",
      price: 349,
      servings: 7,
      art: "MADHUBANI ART",
      artDesc:
        "Madhubani painting from Bihar — the land of makhana — with dancing peacocks in ochre, rust, and forest green. A love letter to where it all begins.",
      imgZoom: true,
    },
  },
  "mango-habanero": {
    id: "mango-habanero",
    name: "Mango Habanero",
    tagline: "Sweet hits first. Then the burn.",
    accent: "#C4511E",
    bg: "#F5E0CE",
    tag: "NEW",
    about:
      "Inspired by the aam papad + mirchi combo every Indian kid grew up sneaking from the kitchen, Mango Habanero is unapologetically bold. Sun-dried Alphonso mango powder meets habanero extract for a flavour that builds — sweet, tangy, smoky, then fire. You will finish the bag before you realise what happened.",
    qualities: [
      { icon: "◈", title: "VITAMIN C BOOST", desc: "Alphonso mango powder is loaded with Vitamin C — great for immunity." },
      { icon: "◉", title: "METABOLISM KICK", desc: "Capsaicin from habanero naturally boosts metabolism and fat burn." },
      { icon: "◫", title: "MOOD LIFTER", desc: "Spice triggers endorphin release. Science says snacking = happiness." },
      { icon: "◬", title: "REAL HEAT", desc: "Real habanero, not synthetic capsaicin extract or chilli powder blends." },
    ],
    ingredients:
      "Roasted makhana (fox nuts), sun-dried Alphonso mango powder, habanero extract, rock salt, cold-pressed coconut oil, cumin.",
    nutrition: { calories: 92, protein: "4g", fat: "0.9g", carbs: "18g" },
    regular: { img: "/assets/maka-regular-mango.png", weight: "80g", price: 159, servings: 3 },
    premium: {
      img: "/assets/maka-premium-mango.png",
      weight: "180g",
      price: 369,
      servings: 7,
      art: "MADHUBANI ART",
      artDesc:
        "A Madhubani mango grove — the sacred amra vriksha — in bold primary reds, yellows, and greens. As vibrant and irresistible as the flavour itself.",
      imgZoom: true,
    },
  },
  "pudina-chaat": {
    id: "pudina-chaat",
    name: "Pudina Chaat",
    tagline: "Street-food energy. Zero regret.",
    accent: "#2B6B3E",
    bg: "#E0F0E8",
    tag: "HERO FLAVOUR",
    about:
      "Think of a Delhi ki gali — the papdi chaat stall with that electric green chutney that tastes like it was made by someone's dadi. मaka Pudina Chaat captures that exact hit: mint, lime, chaat masala, amchur — layered over roasted makhana for a snack that tastes like nostalgia and feels like a life upgrade.",
    qualities: [
      { icon: "◈", title: "COOLING EFFECT", desc: "Fresh mint extract cools the body and aids digestion after meals." },
      { icon: "◉", title: "TANGY KICK", desc: "Amchur and chaat masala sourced from UP spice markets. The real deal." },
      { icon: "◫", title: "BREATH FRESHENING", desc: "Mint does double duty — great snack, better breath. Multitasker." },
      { icon: "◬", title: "AUTHENTIC SPICE", desc: "Real chaat masala and lime extract, not flavour-powder substitutes." },
    ],
    ingredients:
      "Roasted makhana (fox nuts), mint extract, amchur (dry mango powder), chaat masala, lime extract, rock salt, cold-pressed coconut oil.",
    nutrition: { calories: 88, protein: "4g", fat: "0.7g", carbs: "17g" },
    regular: { img: "/assets/maka-regular-pudina.png", weight: "80g", price: 149, servings: 3 },
    premium: {
      img: "/assets/maka-premium-pudina.png",
      weight: "180g",
      price: 349,
      servings: 7,
      art: "RANGOLI ART",
      artDesc:
        "Geometric Rangoli patterns in emerald, gold, and white — celebrating festivals, welcome, and the spirit of Indian hospitality. Made to be gifted.",
    },
  },
  "dark-chocolate": {
    id: "dark-chocolate",
    name: "Dark Chocolate & Sea Salt",
    tagline: "The indulgence you deserve.",
    accent: "#3A2018",
    bg: "#2A1F1A",
    bgDark: true,
    tag: "BOLD PICK",
    about:
      '70% Belgian dark cocoa. A hand-harvested Maldon sea salt flake. Roasted makhana. Three ingredients that have no business working this well together. मaka Dark Chocolate & Sea Salt began as the "maybe this is too weird" flavour that every tasting panel voted their favourite by the end. The apology is officially cancelled.',
    qualities: [
      { icon: "◈", title: "ANTIOXIDANT RICH", desc: "Dark cocoa is one of the highest natural sources of flavonoid antioxidants." },
      { icon: "◉", title: "MOOD ENHANCING", desc: "Cocoa triggers serotonin release — the same compound as 'runner's high'." },
      { icon: "◫", title: "HEART HEALTHY", desc: "Flavanols in dark chocolate support healthy blood pressure and circulation." },
      { icon: "◬", title: "PREMIUM COCOA", desc: "70% Belgian dark chocolate — no compound chocolate, no shortcuts." },
    ],
    ingredients:
      "Roasted makhana (fox nuts), 70% Belgian dark cocoa powder, Maldon sea salt flakes, cold-pressed coconut oil, coconut sugar.",
    nutrition: { calories: 102, protein: "4g", fat: "2.1g", carbs: "19g" },
    regular: { img: "/assets/maka-regular-darkchoco.png", weight: "80g", price: 169, servings: 3 },
    premium: {
      img: "/assets/maka-premium-darkchoco.png",
      weight: "180g",
      price: 399,
      servings: 7,
      art: "MADHUBANI ART",
      artDesc:
        "A moonlit Madhubani tree in deep indigo, violet, and cobalt — the Kalpa Vriksha, the cosmic wish-fulfilling tree of Indian mythology. Rich. Mysterious.",
      imgZoom: true,
    },
  },
  "saffron-rose": {
    id: "saffron-rose",
    name: "Saffron & Rose",
    tagline: "For those who dare to savour.",
    accent: "#A07840",
    bg: "#F5EDE0",
    tag: "LIMITED EDITION",
    isLimited: true,
    about:
      "Kashmiri saffron — the world's most expensive spice by weight — meets hand-dried Kannauj rose petals in the most unexpected snack of the year. मaka Saffron & Rose is a limited edition created to prove that healthy food can be extraordinary. Only 500 pouches and 200 premium jars per batch. No restocks. No apologies.",
    qualities: [
      { icon: "◈", title: "KASHMIRI SAFFRON", desc: "Grade A1 saffron from Pampore — the saffron capital of Kashmir." },
      { icon: "◉", title: "MOOD LIFTING", desc: "Saffron has clinically proven anti-anxiety and mood-enhancing properties." },
      { icon: "◫", title: "ROSE BENEFITS", desc: "Dried Kannauj rose petals support skin health and hormonal balance." },
      { icon: "◬", title: "ULTRA LIMITED", desc: "500 pouches and 200 premium jars per batch. Not restocked." },
    ],
    ingredients:
      "Roasted makhana (fox nuts), Kashmiri saffron (Grade A1), hand-dried Kannauj rose petals, Mishri (rock sugar), cold-pressed coconut oil, cardamom.",
    nutrition: { calories: 96, protein: "4g", fat: "1.0g", carbs: "18g" },
    regular: { img: "/assets/maka-regular-saffron.png", weight: "80g", price: 199, servings: 3 },
    premium: {
      img: "/assets/maka-premium-saffron.png",
      weight: "180g",
      price: 449,
      servings: 7,
      art: "MUGHAL MINIATURE",
      artDesc:
        "A Mughal floral miniature in royal teal, cobalt, and gold leaf — peacocks, lotuses, and the khamsa motif from the imperial ateliers of Agra. Limited. Collectible. Museum-worthy.",
    },
  },
};

export const PRODUCT_IDS = Object.keys(PRODUCTS);

export function getProduct(id: string): Product | undefined {
  return PRODUCTS[id];
}
