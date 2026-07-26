import React from "react";
import type { MenuItem } from "../../utils/menuData";
import MenuItemCard from "./MenuItemCard";
import MenuFeatureCard from "./MenuFeatureCard";

interface MenuGridProps {
  items: MenuItem[];
  categoryId: string;
}

const MenuGrid: React.FC<MenuGridProps> = ({ items, categoryId }) => {
  // Find the featured item (if any)
  const featuredItem = items.find((item) => item.isFeature);
  const regularItems = items.filter((item) => !item.isFeature);

  return (
    <section id={categoryId} className="scroll-mt-[150px]">
      <div className="flex items-center gap-4 mb-stack-md">
        <h2 className="font-headline-md text-headline-md text-primary capitalize">
          {categoryId === "jollof"
            ? "Signature Jollof"
            : categoryId === "soups"
              ? "Artisan Soups"
              : categoryId}
        </h2>
        <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Regular items */}
        {regularItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}

        {/* Featured item (spans 2 columns) */}
        {featuredItem && <MenuFeatureCard item={featuredItem} />}
      </div>
    </section>
  );
};

export default MenuGrid;
