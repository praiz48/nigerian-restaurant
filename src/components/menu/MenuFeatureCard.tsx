import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MenuItem } from "../../utils/menuData";
import { Utensils } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface MenuFeatureCardProps {
  item: MenuItem;
  index: number;
}

const MenuFeatureCard: React.FC<MenuFeatureCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        delay: index * 0.1 + 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=80",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="lg:col-span-2 flex flex-col md:flex-row bg-surface-container-low rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="md:w-1/2 relative overflow-hidden min-h-[300px] bg-surface-container">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-primary/15 to-primary/5 flex flex-col items-center justify-center">
            <Utensils className="w-16 h-16 text-primary/30" />
            <span className="text-sm font-label-sm text-primary/40 mt-3">
              {item.name}
            </span>
          </div>
        ) : (
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={item.image}
            alt={item.name}
            onError={() => setImageError(true)}
          />
        )}

        <div className="absolute bottom-6 left-6 z-20">
          <span className="bg-primary/90 text-on-primary px-4 py-1.5 rounded-full font-label-sm text-xs flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5" />
            Seasonal Special
          </span>
        </div>
      </div>

      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <h3 className="font-display-lg text-headline-md mb-3">{item.name}</h3>
        <p className="font-body-lg text-on-surface-variant mb-6 leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-headline-md text-primary text-xl font-bold">
            {item.price}
          </span>
          <button className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-label-md active:scale-95 transition-transform hover:bg-secondary/90">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuFeatureCard;
