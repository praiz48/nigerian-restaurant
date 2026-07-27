import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  ArrowRight,
  Clock,
  Star,
  Utensils,
  Download,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ReservationsCTAProps {
  onBookNow?: () => void;
  onDownloadMenu?: () => void;
}

const ReservationsCTA: React.FC<ReservationsCTAProps> = ({
  onBookNow,
  onDownloadMenu,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main container animation
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Badge animation
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "back.out(1.7)",
        },
      );

      // Buttons stagger
      buttonRefs.current.forEach((btn, index) => {
        gsap.fromTo(
          btn,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.5 + index * 0.15,
            ease: "power2.out",
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Features list
  const features = [
    { icon: Clock, label: "48hr advance notice" },
    { icon: Star, label: "Premium seating" },
    { icon: Utensils, label: "Tasting menu access" },
  ];

  return (
    <div
      ref={sectionRef}
      className="max-w-container-max mx-auto px-gutter mt-16 md:mt-24"
    >
      <div className="relative rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden p-8 md:p-12 lg:p-16 xl:p-20 text-center shadow-2xl">
        {/* Decorative Pattern - More refined */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

        {/* Content */}
        <div ref={contentRef} className="relative z-10 space-y-8">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/10"
          >
            <span className="font-label-sm text-sm tracking-wider">
              Limited Availability
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span className="font-label-sm text-sm">Season's Tasting Menu</span>
          </div>

          {/* Heading */}
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-[1.1]">
            Secure Your Table
            <br />
            <span className="text-secondary-fixed">For the Season</span>
          </h2>

          {/* Description */}
          <p className="text-white/80 font-body-lg text-body-lg max-w-2xl mx-auto leading-relaxed">
            Don't miss out on the season's most anticipated tasting menu.
            Reservations are recommended at least 48 hours in advance.
          </p>

          {/* Features Row */}
          <div className="flex flex-wrap justify-center gap-6 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/70"
              >
                <feature.icon className="w-4 h-4 text-secondary-fixed" />
                <span className="font-label-sm text-sm">{feature.label}</span>
                {index < features.length - 1 && (
                  <span className="w-px h-4 bg-white/10 ml-2"></span>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              ref={(el) => {
                buttonRefs.current[0] = el;
              }}
              onClick={handleBookNow}
              className="group bg-secondary text-white px-10 py-4 rounded-xl font-label-md hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              ref={(el) => {
                buttonRefs.current[1] = el;
              }}
              onClick={onDownloadMenu}
              className="group border border-white/30 text-white px-10 py-4 rounded-xl font-label-md hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Menu</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-6 text-white/40 font-label-sm text-xs pt-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-herb-green"></span>
              No booking fees
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-herb-green"></span>
              Free cancellation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-herb-green"></span>
              Instant confirmation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationsCTA;
