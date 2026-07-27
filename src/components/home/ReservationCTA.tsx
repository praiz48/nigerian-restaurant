import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Users, ArrowRight, Clock } from "lucide-react";
import Button from "../shared/Button";

gsap.registerPlugin(ScrollTrigger);

const ReservationCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const subheaderRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation - split text effect
      const headerChars = headerRef.current?.textContent?.split("") || [];
      if (headerRef.current) {
        const chars = headerRef.current.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { opacity: 0, y: 40, rotateX: 40 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Subheader animation - typewriter style fade
      gsap.fromTo(
        subheaderRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subheaderRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Form card animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.92, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split header into characters for animation
  const headerText = "Secure Your Seat at the Table";

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 px-gutter relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl"></div>

      <div
        ref={contentRef}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Animated Header */}
        <h1
          ref={headerRef}
          className="font-display-lg  text-3xl  text-display-lg-mobile md:text-display-lg text-on-background mb-6 leading-[1.1]"
        >
          {headerText.split("").map((char, index) => (
            <span
              key={index}
              className="char inline-block"
              style={{ display: char === " " ? "inline" : "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Subheader with icon */}
        <div ref={subheaderRef}>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed flex items-center justify-center gap-2 flex-wrap">
            <Clock className="w-5 h-5 text-primary/60" />
            <span>
              Reservations are recommended to ensure the best experience.
            </span>
            <span className="text-primary font-medium">
              We look forward to hosting you.
            </span>
          </p>
        </div>

        {/* Form Card */}
        <div
          ref={formRef}
          className="mt-12 inline-flex flex-col sm:flex-row items-center gap-4 p-3 bg-white rounded-[32px] shadow-xl border border-outline-variant/20 hover:shadow-2xl transition-shadow duration-500"
        >
          {/* Date Picker */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-label-sm text-outline uppercase text-xs tracking-wider">
                Date
              </p>
              <p className="font-label-md text-on-surface">Select Date</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-outline-variant/30"></div>

          {/* Guests Picker */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-label-sm text-outline uppercase text-xs tracking-wider">
                Guests
              </p>
              <p className="font-label-md text-on-surface">2 People</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-outline-variant/30"></div>

          {/* CTA Button */}
          <Button
            variant="primary"
            className="rounded-2xl px-8 py-4 flex items-center gap-2 w-full sm:w-auto justify-center group"
          >
            <span>Check Availability</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs font-label-sm text-on-surface-variant/60">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-herb-green"></span>
            No booking fees
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-herb-green"></span>
            Free cancellation
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-herb-green"></span>
            Instant confirmation
          </span>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
