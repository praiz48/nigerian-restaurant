import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Button from "../shared/Button";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const egusiRef = useRef<HTMLDivElement>(null);
  const suyaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2 },
    )
      .fromTo(
        mainImageRef.current,
        { opacity: 0, scale: 0.9, rotate: 5 },
        { opacity: 1, scale: 1, rotate: 3, duration: 1.2 },
        "-=0.6",
      )
      .fromTo(
        egusiRef.current,
        { opacity: 0, x: -60, rotate: -10 },
        { opacity: 0.9, x: 0, rotate: -6, duration: 1 },
        "-=0.8",
      )
      .fromTo(
        suyaRef.current,
        { opacity: 0, x: 60, rotate: 15 },
        { opacity: 1, x: 0, rotate: 12, duration: 1 },
        "-=0.6",
      );
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center px-gutter md:px-margin-desktop overflow-hidden">
      <div
        ref={heroRef}
        className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative"
      >
        {/* Text Content */}
        <div ref={textRef} className="z-20 order-2 lg:order-1">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-6">
            Modern Nigerian <br />
            <span className="text-primary italic">Cuisine, Redefined</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
            Experience the soul of West Africa through a contemporary lens.
            Heritage Modern brings ancestral flavors to life with metropolitan
            elegance and meticulous plating.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">View Menu</Button>
            <Button variant="outline">Book a Table</Button>
          </div>
        </div>

        {/* Images */}
        <div className="relative order-1 lg:order-2 h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Primary Focal Point: Jollof Rice */}
          <div
            ref={mainImageRef}
            className="relative z-10 w-4/5 aspect-square rounded-[40px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
          >
            <img
              alt="Premium Nigerian Jollof Rice"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLv3f-UQFVIiHzSyXyBg6q3emgjS44DBvFFDUsrrM91HsSAA6eaT7VRTHAkuOPIMuNxUhetQ60646HG3odN8YEdK3u0Nq50izI9HTwrbJH4VFzXd8hM1DiYuw611JnbmuT4HpNvLiWUBQa71rFu3myfIIQtVPu0Beyyb30EKk1G5j333xWD69nptOKt_UsMxx9UxZU-VOxgUATSdUIWNlwjjYKQHwXE11d8jC-UXL6Vvrj4eZnzwLH5Bt_s"
            />
          </div>

          {/* Layered Image: Egusi Soup */}
          <div
            ref={egusiRef}
            className="absolute -left-4 top-0 w-1/2 aspect-square rounded-3xl overflow-hidden shadow-xl -rotate-6 z-0 opacity-90 hover:rotate-0 transition-transform duration-700"
          >
            <img
              alt="Egusi Soup and Pounded Yam"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpzRZtnpRHrgG3DoH62MIGgWbFCsv0oA9qYyAwJiAoUD7nNbRmMqHYK7oKqu2KmqTu5baE6Zyk1ZxGoPr5B3O17ewF3VpnLinTatr71ZYvmDu-icnlO0rUrLztOkCWmQZnBm4I3PPs_yK8B5Zv2WaWQV1BGUL_1kOM4AXHpBZemh2BQrkUaGqksDcGsXycaYSjsNvLieLfne7fQRyqiAdhM-xV8jDcQwrUESzu3NNuU2qiJGtq-ZMw"
            />
          </div>

          {/* Layered Image: Suya Skewers */}
          <div
            ref={suyaRef}
            className="absolute -right-8 -bottom-4 w-1/2 aspect-square rounded-3xl overflow-hidden shadow-xl rotate-12 z-20 hover:rotate-0 transition-transform duration-700"
          >
            <img
              alt="Spicy Suya Skewers"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqmSpaDp0hWpu8El0gxa6b0gIYY1ntTENMlyoANIbMdmA0utq8OnbLyhOxmE5MwVo5stl1j34fWM3U-llQvRgyJ1XfTXpJeQI4APLJxqJunATtUYforGcawzsgq9FvdNjBj8bdnLyyqQqYvEDgFeF8nnV2TeCQU2reMv1xGHpjqFnGuldCdUNlKMaqbHMzB3gs5AtieiFWl2541PvTfgj48dvEilHljnDEfMyKyHJRoJtVamFC0hZ6"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
