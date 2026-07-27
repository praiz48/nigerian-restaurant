import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, BookOpen, ChefHat, Gem, ArrowRight } from "lucide-react";
import { features } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

// Map icon strings to Lucide components
const iconMap = {
  eco: Leaf,
  menu_book: BookOpen,
  skillet: ChefHat,
  diamond: Gem,
};

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=80",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-stack-lg bg-surface">
      <div className="max-w-container-max mx-auto px-gutter md:px-margin-desktop">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-label-sm text-primary uppercase tracking-widest bg-primary-fixed px-4 py-1 rounded-full">
            Why Choose Us
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface mt-4">
            The Oja Difference
          </h2>
          <p className="font-body-md text-on-surface-variant mt-2 max-w-2xl mx-auto">
            Experience the pinnacle of Nigerian fine dining through our
            commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent =
              iconMap[feature.icon as keyof typeof iconMap] || Leaf;

            return (
              <div
                key={feature.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group bg-surface-container-highest p-8 rounded-[24px] transition-all hover:translate-y-[-4px] hover:shadow-lg border border-outline-variant/10 hover:border-primary/20 relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                {/* Icon */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <IconComponent
                    className="w-7 h-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>

                <h4 className="font-headline-sm text-headline-sm mb-2 text-on-surface relative">
                  {feature.title}
                </h4>

                <p className="text-on-surface-variant font-body-md leading-relaxed relative">
                  {feature.description}
                </p>

                {/* Decorative arrow on hover */}
                <div className="flex items-center gap-1 mt-4 text-primary/40 group-hover:text-primary/70 transition-all duration-300">
                  <span className="text-sm font-label-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
