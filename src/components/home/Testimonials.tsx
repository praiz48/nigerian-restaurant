import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, User, Quote } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { testimonials } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Cards stagger with fade up
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: index * 0.15,
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
    <section
      ref={sectionRef}
      className="py-stack-lg px-gutter md:px-margin-desktop bg-surface-container"
    >
      <div className="max-w-container-max mx-auto">
        <div ref={headingRef}>
          <SectionHeading
            title="Voices From Our Table"
            className="[&_h2]:font-bold [&_h2]:text-primary [&_h2]:tracking-tight"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-surface p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-lg hover:border-primary/20 transition-all duration-300 relative"
            >
              {/* Decorative quote icon */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary/40" />
              </div>

              {/* Star Ratings */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-secondary fill-secondary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-body-lg text-on-surface-variant mb-6 italic leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary/60" />
                </div>
                <div>
                  <p className="font-label-md text-on-surface font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="font-label-sm text-outline flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 inline-block"></span>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
