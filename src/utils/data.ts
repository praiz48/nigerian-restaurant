import type { Testimonial, Feature } from "../types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Elena Rodriguez",
    role: "Food Critic",
    review:
      "\"The Jollof Rice here isn't just a meal; it's a sensory journey back to Lagos, but with a level of refinement I've never seen before. Absolutely spectacular.\"",
    rating: 5,
  },
  {
    id: "2",
    name: "Tunde Adebayo",
    role: "Gourmet Traveler",
    review:
      '"Heritage Modern manages to balance luxury and soul perfectly. The Amala was silky smooth, and the wine pairings are expertly curated."',
    rating: 5,
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    role: "Lifestyle Influencer",
    review:
      '"A true masterpiece of design and dining. The Suya skewers were grilled to perfection. Finally, a place that takes our cuisine to the global stage."',
    rating: 5,
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "eco",
    title: "Fresh Ingredients",
    description: "Sourced daily from local farmers and organic markets.",
  },
  {
    id: "2",
    icon: "menu_book",
    title: "Authentic Recipes",
    description: "Passed down through generations, preserved with care.",
  },
  {
    id: "3",
    icon: "skillet",
    title: "Master Chefs",
    description:
      "Culinary experts with a deep passion for West African flavors.",
  },
  {
    id: "4",
    icon: "diamond",
    title: "Premium Experience",
    description: "Impeccable service in a sophisticated, curated atmosphere.",
  },
];

export const signatureDishes = [
  {
    id: "1",
    title: "The Amala & Egusi Ensemble",
    description:
      "Our signature yam flour swallow paired with slow-simmered melon seed soup and forest greens.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPjL9W77UF1sEqnznQexjx5Yo-Y4hrRybPkv-uX7DEeGN5F-MSPyuDWDJKRul6kBS-ft20-UGct_nt2BI5zivjsFXUUF3mAMIZC7ACXAZWsWfnlwPNuz27QOK8wLT7CtfXdYQY0p7hpsaXpMqu-fFY4XvpZVuKYAei0ijk8TuE8bFva6D-NGzSi-3VjvRF-chvUdQx7Cz9kn9slwEsDBIXJe3iZwUiyqIinBY93SvOtVHdMIR3fr4eUC7qd9E2UtY3BFXE6wdNVdQ",
    isFeatured: true,
    span: "md:col-span-2",
  },
  {
    id: "2",
    title: "Velvet Puff Puff",
    description: "Light, airy, and served with spiced honey.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCysf5xIyezsdxYml1oz9LoCSFX7ax9icS0QX5_hHHz045vX9oWrVNPO61mSzsdJsd5ic2uv1HhLPNNEsIIaNxeIYGS3TdMyPnWuNJX9IHHkA01_quzyQTU0fHr9E6Oqp3NyeVyMs1khKT7AERu3OwhGKD1S7DIrf815TJ4NA0zuxQgAJSZUhpUl_arNYuNOPM-R06RC4eVxhbofEATq1xG6lynDVyQ1UJk_9JUC0XhFOxZ4Eydeoi6M3R7_Izra5gcRaHmSzs28O4",
    isFeatured: false,
    span: "",
  },
  {
    id: "3",
    title: "Yaji Prime Suya",
    description: "Kwagila-spiced beef with house-made nut dust.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDk7LHOhlDettCWGsdCtPDdo-NRfskDlQ6XZe5LJ2YPlTSwEYcVlzhioG3vgM71-OPitMD-hyXXhzn_O6jHT81sMQwkqldHKhPXsdS3VCqb8L3P2G2PCAJA0WhbyCxG29THmc7lbIaGbu69KtGb_m3DWPaR64wQ3zMQr46ZlPVFrhkuYJWHUqdN9ZQ6qa_jnlyEJ6BrYPEg3UtbP1RLUNSL9CUdoQMkgjswx8keIglMV7KS67sQFpW-5SxLwqnuaueBmnvrjg0uGJ4",
    isFeatured: false,
    span: "",
  },
  {
    id: "4",
    title: "Heritage Okra Symphony",
    description:
      "A rich tapestry of seafood and hand-chopped okra, infused with palm oil pearls.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfMj9v199swCUM0F1spXn1oNFO_JMnsKeVXnAdzDdEhG069wUXUjvxxe1nR23i3rkmBDeuj8uYKCUKwJjyK5DnjCYIwBIHPqUVaS1gMPxcG5hGVocrxCebxc-EHGx7twloSsgzWIpDon2lo0YSTdMYD5HGsKjy8whgb208I9s0-0Ur48X_w5Y5-ihZL4w85hc43FRtIMZK2WAscuytOYEOJjIVkejmYIW1FgLzApiaFslGgDxTo0ArHGaeorSqpLTEcmnW3WEpTGg",
    isFeatured: false,
    span: "md:col-span-2",
  },
];
