import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Button from "../shared/Button";
import ThreeDish from "../3d/ThreeDish";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2 },
    ).fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9, rotate: 5 },
      { opacity: 1, scale: 1, rotate: 3, duration: 1.4 },
      "-=0.6",
    );
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden px-gutter md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div ref={textRef} className="z-10 order-2 lg:order-1">
          <h1 className="font-['Libre_Caslon_Text'] text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] tracking-[-0.02em] text-[--color-on-background]">
            Modern Nigerian <br />
            <span className="text-primary italic">Cuisine, Redefined</span>
          </h1>
          <p className="text-[18px] leading-[28px] text-[--color-on-surface-variant]">
            Experience the soul of West Africa through a contemporary lens.
            Heritage Modern brings ancestral flavors to life with metropolitan
            elegance and meticulous plating.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">View Menu</Button>
            <Button variant="outline">Book a Table</Button>
          </div>
        </div>

        {/* 3D Dish Model */}
        <div
          ref={imageRef}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-[500px] aspect-square rounded-[40px] overflow-hidden shadow-2xl rotate-3">
            <ThreeDish />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-container rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
