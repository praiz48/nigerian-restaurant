import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Default animation configs
export const animations = {
  fadeUp: {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.8, ease: "power2.out" },
  },
  staggerFadeUp: (delay: number = 0.1) => ({
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: delay },
  }),
  scaleIn: {
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.7)" },
  },
  slideInLeft: {
    from: { opacity: 0, x: -80 },
    to: { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
  },
  slideInRight: {
    from: { opacity: 0, x: 80 },
    to: { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
  },
};

// Helper to create scroll-triggered animations
export const createScrollAnimation = (
  element: HTMLElement | null,
  from: gsap.TweenVars,
  to: gsap.TweenVars,
  trigger?: HTMLElement | null,
  start: string = "top bottom-=100",
) => {
  if (!element) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger || element,
      start,
      toggleActions: "play none none reverse",
    },
  });

  tl.fromTo(element, from, to);
  return tl;
};

// Staggered cards animation
export const staggerCards = (
  cards: (HTMLElement | null)[],
  from: gsap.TweenVars = { opacity: 0, y: 50 },
  to: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
  },
) => {
  const validCards = cards.filter((card) => card !== null) as HTMLElement[];
  if (validCards.length === 0) return;

  gsap.fromTo(validCards, from, {
    ...to,
    scrollTrigger: {
      trigger: validCards[0].parentElement || validCards[0],
      start: "top bottom-=80",
      toggleActions: "play none none reverse",
    },
  });
};
