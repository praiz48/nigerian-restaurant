import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../shared/SectionHeading";
import { signatureDishes } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

const SignatureDishes: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-stack-lg bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter md:px-margin-desktop">
        <SectionHeading
          badge="Signature Experiences"
          title="Crafted With Intent"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {signatureDishes.map((dish, index) => (
            <div
              key={dish.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`${dish.span} group relative h-[400px] rounded-[24px] overflow-hidden shadow-sm card-hover-zoom`}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={dish.image}
                alt={dish.title}
              />
              {dish.isFeatured && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              )}
              {!dish.isFeatured && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              )}
              <div className="absolute bottom-0 left-0 p-8">
                {dish.isFeatured && (
                  <span className="font-label-sm text-secondary-fixed bg-secondary/20 backdrop-blur-md px-3 py-1 rounded-lg">
                    Featured
                  </span>
                )}
                <h3 className="font-headline-sm text-white mt-2">
                  {dish.title}
                </h3>
                <p className="text-white/80 font-body-md mt-1 max-w-md">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
