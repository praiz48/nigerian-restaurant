import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MenuCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom-=80",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom-=80",
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
      className="bg-inverse-surface text-inverse-on-surface py-stack-lg mt-stack-lg"
    >
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div ref={textRef}>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
            Experience the Legacy
          </h2>
          <p className="font-body-lg text-white/80 mb-8">
            Join us for an unforgettable evening where every bite tells a story
            of heritage. Limited seatings available daily.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md active:scale-95 transition-transform">
              Book a Table
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-label-md hover:bg-white/10 transition-colors">
              View Private Dining
            </button>
          </div>
        </div>
        <div
          ref={imageRef}
          className="relative aspect-video rounded-2xl overflow-hidden group"
        >
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5qq_0EsdRBBkAQMzHoo47DbA9U7i4vjEJd1unSShFJNd8MmOvjKT1GTYe1ugwDlocdUzTtFXUZ7BUN_cEGkULZFwE9nt83_iEtl1a-U4EuA3iucf2C7E0i3NofOjgyGcXNyAuL3QQR5JrlgxMY9A9AZdUnr2ksiYYucotxJwLWI8rxJ4N6jB_ViHea4whnS089X4Xbz8wAg7oylfynKxLTt1DU09ZRY7RXzphJEqgCMYt-HMFhWnSwULHRGz3z6Bi_r5GITJJ1n8"
            alt="Oja Fine Dining interior"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default MenuCTA;
