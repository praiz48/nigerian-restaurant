import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ReservationsHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2 },
    ).fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6",
    );
  }, []);

  return (
    <section className="max-w-container-max mx-auto px-gutter mb-stack-lg">
      <div
        ref={heroRef}
        className="relative rounded-[2rem] overflow-hidden h-[300px] md:h-[400px] mb-stack-md"
      >
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaKMMt8SZiGUStNuTNj7jb3xmHPvPhh6GMqYJh1-17Ki5tTfcdBoaZsZ0BFkJW9d3oX63jnTTpK5UCpTYly2am6Yb6XZxaked98-1HVdgC0to86lQMysFTFpl8om5JEjLaMhuEtlIJ_kIGKYUA3BjXz1ksdgAUQ2FRRce-8rsPIO075P90kU_GvqRWkWmkshL7coukX2CONrDViWNwRCRFy8xHrkpSM1pzTNhYAf0jahW4gAtJHEJmK7YIL7HVXUQb5ouzJfGwouo"
          alt="Oja Fine Dining interior"
        />
        <div
          ref={textRef}
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 md:p-margin-desktop"
        >
          <h1 className="text-white font-display-lg text-display-lg-mobile md:text-display-lg mb-2">
            Secure Your Seat
          </h1>
          <p className="text-white/90 font-body-lg text-body-lg max-w-xl">
            Experience the pinnacle of New African gastronomy. Join us for an
            evening where ancestral heritage meets contemporary elegance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReservationsHero;
