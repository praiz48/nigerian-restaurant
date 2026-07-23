import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../shared/Button";

gsap.registerPlugin(ScrollTrigger);

const ReservationCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef.current,
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
      className="py-stack-lg px-gutter relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/5"></div>
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">
          Secure Your Seat at the Table
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-12">
          Reservations are recommended to ensure the best experience. We look
          forward to hosting you.
        </p>
        <div className="inline-flex flex-col sm:flex-row gap-6 p-4 bg-white rounded-[32px] shadow-xl border border-outline-variant/30">
          <div className="flex items-center gap-3 px-6 py-3 border-r border-outline-variant/30 last:border-0">
            <span className="material-symbols-outlined text-primary">
              calendar_today
            </span>
            <div className="text-left">
              <p className="font-label-sm text-outline uppercase">Date</p>
              <p className="font-label-md">Select Date</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 border-r border-outline-variant/30 last:border-0">
            <span className="material-symbols-outlined text-primary">
              group
            </span>
            <div className="text-left">
              <p className="font-label-sm text-outline uppercase">Guests</p>
              <p className="font-label-md">2 People</p>
            </div>
          </div>
          <Button variant="primary" className="rounded-2xl">
            Check Availability
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
