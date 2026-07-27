import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slides in from left
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -80, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Text slides in from right
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Stat badge pops in
      gsap.fromTo(
        statRef.current,
        { opacity: 0, scale: 0.8, rotate: -5 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          delay: 0.5,
          scrollTrigger: {
            trigger: statRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-stack-lg px-gutter md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
        <div ref={imageRef} className="w-full md:w-1/2">
          <div className="relative rounded-[32px] overflow-hidden shadow-xl aspect-[4/5]">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRkf7l-YYyXLw9--FB740Nun-jrk1ajGSqkEUPVnSegxTGgWuH9btRH6HSn8pjJC0KFdf14gHJbod1-gG0Tw9ZhiK2sHBBVq3MGFNTLINBLJVTTvvwwXVocrhw_HJdRHyZlWb0HX9lx4rxu04spKgB_K942t0CbNWVKyZW-cvMl8oG5QFNvlkfpzp149U8sU8H9k0CxCdJNr3V_Vu9h9_5OQt059024ew8dXO22Wzr1lLodQpLOpV8E3DRD6cma4qlP9Rx2DZ_OJs"
              alt="Restaurant interior"
            />
            <div
              ref={statRef}
              className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-[200px]"
            >
              <p className="font-display-lg text-headline-sm text-primary mb-1">
                20+
              </p>
              <p className="font-label-sm text-on-surface-variant">
                Years of Culinary Heritage
              </p>
            </div>
          </div>
        </div>

        <div ref={textRef} className="w-full md:w-1/2">
          <span className="font-label-sm text-secondary uppercase tracking-widest mb-4 inline-block">
            The Story
          </span>
          <h2 className="font-display-lg text-headline-md md:text-display-lg text-on-background mb-6">
            Honoring Our Past, Plating Our Future
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-6 leading-relaxed">
            Heritage Modern was born from a desire to celebrate the rich
            culinary diversity of Nigeria in a space that feels both nostalgic
            and forward-thinking.
          </p>
          <p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed">
            Every recipe in our kitchen is a tribute to the mothers and
            grandmothers who mastered the art of fire and spice. We haven't
            changed the soul of the dishes—we've simply given them a new stage
            to shine.
          </p>
          <div className="flex items-center gap-4 bg-surface-container-highest p-4 rounded-2xl border border-outline-variant/20">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-herb-green rounded-full border-2 border-surface"></div>
            </div>
            <div>
              <p className="font-label-md text-on-surface">Chef de Cuisine</p>
              <p className="font-display-lg text-headline-sm text-primary">
                Adewale O. Heritage
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-label-sm text-herb-green bg-herb-green/10 px-2 py-0.5 rounded-full">
                  ★ Executive Chef
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
