import React, { useState, useEffect, useRef } from "react";
import { categories } from "../../utils/menuData";

interface MenuCategoriesProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const MenuCategories: React.FC<MenuCategoriesProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 72);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={navRef}
      className={`sticky top-[72px] z-40 bg-surface/95 backdrop-blur-sm border-y border-outline-variant/20 mb-stack-lg transition-shadow ${
        isSticky ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-container-max mx-auto px-gutter py-4">
        <div className="flex gap-6 md:gap-8 overflow-x-auto hide-scrollbar whitespace-nowrap scroll-smooth">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleClick(category.id)}
              className={`font-label-md transition-colors duration-300 pb-1 ${
                activeCategory === category.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategories;
