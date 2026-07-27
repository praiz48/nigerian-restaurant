import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Building2,
  Clock as ClockIcon,
  User,
} from "lucide-react";
import { openingHours } from "../../utils/reservationsData";

gsap.registerPlugin(ScrollTrigger);

const VisitUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top bottom-=80",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top bottom-=80",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Stagger cards
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=60",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactItems = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+234 (0) 800 OJA FINE",
      href: "tel:+234800OJA",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@ojafinedining.com",
      href: "mailto:hello@ojafinedining.com",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-surface-container-high/40 to-surface-container/20"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-label-sm text-primary uppercase tracking-widest">
              Find Us
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md md:text-headline-md text-on-surface">
            Come Visit Us
          </h2>
          <p className="font-body-md text-on-surface-variant mt-2 max-w-xl mx-auto">
            Located in the heart of Victoria Island, we're ready to welcome you
            to an unforgettable dining experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Info Cards */}
          <div ref={infoRef} className="flex-1 space-y-6">
            {/* Location Card */}
            <div
              ref={(el) => {
                cardRefs.current[0] = el;
              }}
              className="bg-surface rounded-2xl p-6 md:p-8 border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                    Our Location
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    14 Victoria Island Extension,
                    <br />
                    Lekki-Epe Expressway,
                    <br />
                    Lagos, Nigeria
                  </p>
                  <button className="mt-3 text-primary font-label-sm text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    <span>Get Directions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div
              ref={(el) => {
                cardRefs.current[1] = el;
              }}
              className="bg-surface rounded-2xl p-6 md:p-8 border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                    Opening Hours
                  </h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 font-body-md">
                    {openingHours.map((item, index) => (
                      <React.Fragment key={index}>
                        <span className="font-label-md text-on-surface/70">
                          {item.day}
                        </span>
                        <span className="text-on-surface-variant font-medium">
                          {item.hours}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                  {/* Live status indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-herb-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-herb-green"></span>
                    </span>
                    <span className="font-label-sm text-herb-green text-sm">
                      Open Now
                    </span>
                    <span className="text-on-surface-variant/40 text-xs ml-1">
                      • Last seating 30 mins before close
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div
              ref={(el) => {
                cardRefs.current[2] = el;
              }}
              className="bg-surface rounded-2xl p-6 md:p-8 border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                    Contact Us
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {contactItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors group/link"
                      >
                        <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center group-hover/link:bg-primary/10 transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-label-sm text-on-surface-variant/60 text-xs">
                            {item.label}
                          </p>
                          <p className="font-body-md text-sm">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div ref={mapRef} className="flex-1">
            <div className="sticky top-[120px] h-[400px] md:h-[550px] rounded-3xl overflow-hidden ambient-shadow border-4 border-white shadow-2xl group">
              <div
                className="w-full h-full bg-surface-container bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuUYVYnPAMj28vUfxEJHo3uAYQcIO_MIpMeNrSQdjGRRzeEu87RoERE2vS10-P4yKfIJpLs62c44rfsfpr8UA_-WbrT6uce2PH4SCvmYGBIqy0eII0LWvBMAZD5MTqawPPsQ6piIyHqxUbIZfxn8r5mMUV4GQCbWkLqMHn1hFi_lNI1JYobsDcVxDk7-xdBSxV-tCc207-FHpA9___fI2dfOVVyzQTSPxF0Zn9JS1dRoVnVGxbJx2vycX_-6T0KHPrWHwWwczNNmU')`,
                }}
              />
              {/* Map Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="font-label-sm text-sm text-on-surface">
                      Oja Fine Dining
                    </span>
                  </div>
                </div>
                <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <span className="font-label-sm text-sm text-white flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    Open Today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
