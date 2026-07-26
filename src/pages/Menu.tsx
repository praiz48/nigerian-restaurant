import React, { useState, useEffect } from "react";
import MenuHero from "../components/menu/MenuHero";
import MenuCategories from "../components/menu/MenuCategories";
import MenuGrid from "../components/menu/MenuGrid";
import MenuCTA from "../components/menu/MenuCTA";
import { menuItems, categories } from "../utils/menuData";

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("jollof");

  // Update active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "jollof";
      const sections = categories.map((cat) => document.getElementById(cat.id));

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 200) {
            current = section.id;
          }
        }
      });

      setActiveCategory(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Group items by category
  const groupedItems = categories.map((cat) => ({
    category: cat.id,
    items: menuItems.filter((item) => item.category === cat.id),
  }));

  return (
    <main className="pt-32">
      <MenuHero />
      <MenuCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="max-w-container-max mx-auto px-gutter space-y-stack-lg pb-stack-lg">
        {groupedItems.map(
          ({ category, items }) =>
            items.length > 0 && (
              <MenuGrid key={category} items={items} categoryId={category} />
            ),
        )}
      </div>

      <MenuCTA />
    </main>
  );
};

export default Menu;
