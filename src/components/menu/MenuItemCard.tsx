import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MenuItem } from "../../utils/menuData";
import { Utensils, Star, Flame } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay: index * 0.08,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=60",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, [index]);

  const renderSpiceLevel = (level: number) => {
    const maxSpice = 3;
    return (
      <div className="flex gap-0.5">
        {[...Array(maxSpice)].map((_, idx) => (
          <Flame
            key={idx}
            className={`w-4 h-4 ${
              idx < level
                ? "text-primary fill-primary/30"
                : "text-outline-variant"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      ref={cardRef}
      className="group bg-surface shadow-sm rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative h-64 overflow-hidden bg-surface-container">
        {imageError ? (
          // Fallback: Gradient with icon
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col items-center justify-center">
            <Utensils className="w-12 h-12 text-primary/30" />
            <span className="text-sm font-label-sm text-primary/40 mt-2">
              {item.name}
            </span>
          </div>
        ) : (
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={item.image}
            alt={item.name}
            onError={() => setImageError(true)}
          />
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {item.isChefsChoice && (
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm shadow-sm flex items-center gap-1 text-xs">
              <Star className="w-3 h-3 fill-current" />
              Chef's Choice
            </span>
          )}
          {item.isNew && (
            <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm shadow-sm text-xs">
              New
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline-sm text-headline-sm">{item.name}</h3>
          <span className="font-headline-sm text-headline-sm text-primary font-bold">
            {item.price}
          </span>
        </div>

        {item.isGlutenFree && (
          <div className="flex gap-2 mt-1 mb-2">
            <span className="bg-tertiary-container/10 text-tertiary px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border border-tertiary/20">
              Gluten Free
            </span>
          </div>
        )}

        <p className="font-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">
          {item.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-on-surface-variant/60 text-xs">
              Spice:
            </span>
            {renderSpiceLevel(item.spiceLevel)}
          </div>
          <button className="w-9 h-9 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            <span className="text-lg font-light">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
