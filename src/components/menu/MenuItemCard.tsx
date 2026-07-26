import React from "react";
import type { MenuItem } from "../../utils/menuData";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const renderSpiceLevel = (level: number) => {
    const maxSpice = 3;
    const filled = Array(level).fill("filled");
    const empty = Array(maxSpice - level).fill("empty");
    return [...filled, ...empty].map((type, index) => (
      <span
        key={index}
        className="material-symbols-outlined text-[18px]"
        style={type === "filled" ? { fontVariationSettings: "'FILL' 1" } : {}}
      >
        local_fire_department
      </span>
    ));
  };

  return (
    <div className="group bg-surface shadow-sm rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={item.image}
          alt={item.name}
        />
        {item.isChefsChoice && (
          <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm shadow-sm flex items-center gap-1">
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            Chef's Choice
          </div>
        )}
        {item.isNew && (
          <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm shadow-sm">
            New
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline-sm text-headline-sm">{item.name}</h3>
          <span className="font-headline-sm text-headline-sm text-primary">
            {item.price}
          </span>
        </div>
        {item.isGlutenFree && (
          <div className="flex gap-2 mt-1 mb-2">
            <span className="bg-tertiary-container/10 text-tertiary px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
              Gluten Free
            </span>
          </div>
        )}
        <p className="font-body-md text-on-surface-variant mb-6">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <span className="font-label-sm text-on-surface-variant mr-2">
              Spice Level:
            </span>
            {renderSpiceLevel(item.spiceLevel)}
          </div>
          <button className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
