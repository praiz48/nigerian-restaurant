import React from "react";
import type { MenuItem } from "../../utils/menuData";

interface MenuFeatureCardProps {
  item: MenuItem;
}

const MenuFeatureCard: React.FC<MenuFeatureCardProps> = ({ item }) => {
  return (
    <div className="lg:col-span-2 flex flex-col md:flex-row bg-surface-container-low rounded-xl overflow-hidden group shadow-sm">
      <div className="md:w-1/2 relative overflow-hidden min-h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={item.image}
          alt={item.name}
        />
        <div className="absolute bottom-6 left-6 z-20">
          <span className="bg-primary/90 text-on-primary px-4 py-1 rounded-full font-label-sm">
            New Seasonal Special
          </span>
        </div>
      </div>
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <h3 className="font-display-lg text-headline-md mb-4">{item.name}</h3>
        <p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-headline-md text-primary">{item.price}</span>
          <button className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-label-md active:scale-95 transition-transform">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuFeatureCard;
