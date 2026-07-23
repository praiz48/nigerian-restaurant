import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Location", path: "/location" },
  ];

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-[70] group animate-float"
        aria-label="Open Menu"
      >
        <div className="relative w-28 h-36 bg-primary rounded-r-lg shadow-[10px_10px_20px_rgba(158,61,0,0.3)] leather-texture flex items-center justify-center border-l-4 border-primary-container transition-all duration-500 group-hover:shadow-[15px_15px_30px_rgba(158,61,0,0.4)] group-hover:-translate-y-2 active:scale-95">
          <div className="absolute top-2 left-2 w-0.5 h-[calc(100%-16px)] bg-black/10"></div>
          <div className="flex flex-col items-center text-center">
            <span className="font-headline-sm text-white/90 text-sm leading-tight tracking-[0.2em]">
              MENU
            </span>
            <div className="w-6 h-px bg-white/40 my-2"></div>
            <span className="font-label-sm text-white/60 text-[10px]">
              OPEN
            </span>
          </div>
          {/* Golden Tassel Detail */}
          <div className="absolute -bottom-4 right-2 w-1 h-8 bg-secondary-container rounded-full shadow-sm"></div>
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6 transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="perspective-container w-full max-w-md aspect-[3/4] relative">
          {/* Menu Booklet */}
          <div
            className={`absolute inset-0 w-full h-full transition-transform duration-800 ease-[cubic-bezier(0.645,0.045,0.355,1)] transform-origin-left-center ${
              isOpen ? "rotateY-[-180deg]" : ""
            }`}
            style={{ transformStyle: "preserve-3d" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Front Cover */}
            <div
              className="absolute inset-0 w-full h-full bg-primary rounded-r-2xl shadow-2xl flex flex-col items-center justify-center leather-texture border-l-4 border-primary-container"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="absolute top-8 left-12 w-0.5 h-full bg-black/10"></div>
              <div className="border-2 border-primary-fixed/30 p-8 flex flex-col items-center gap-4">
                <span className="font-display-lg text-white tracking-widest uppercase">
                  Oja
                </span>
                <div className="w-12 h-px bg-white/50"></div>
                <span className="font-label-md text-white/80 tracking-[0.3em]">
                  EST. 2024
                </span>
              </div>
              <span className="absolute bottom-12 font-headline-sm text-white/90">
                MENU
              </span>
            </div>

            {/* Inner Pages (Back of Cover) */}
            <div
              className="absolute inset-0 w-full h-full bg-[#FCF8F3] rounded-l-2xl shadow-inner flex flex-col p-12 leather-texture"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="h-full border border-outline-variant/30 p-6 flex flex-col items-center justify-between text-on-surface">
                <div className="text-center w-full">
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-8 border-b border-primary/20 pb-2">
                    Main Navigation
                  </h2>
                  <ul className="space-y-6">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className={`font-headline-sm text-headline-sm hover:text-primary transition-colors block ${
                            location.pathname === link.path
                              ? "text-primary"
                              : ""
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="mt-8 bg-primary text-white w-full py-4 rounded-xl font-label-md active:scale-95 transition-transform shadow-md"
                  onClick={() => {
                    setIsOpen(false);
                    // Navigate to reservations
                  }}
                >
                  Reserve a Table
                </button>
              </div>
            </div>
          </div>

          {/* Static Right Page (Inside Booklet) */}
          <div className="absolute inset-0 w-full h-full bg-[#FCF8F3] rounded-r-2xl shadow-2xl -z-10 flex flex-col p-12 leather-texture">
            <div className="h-full border border-outline-variant/30 p-6 flex flex-col items-center text-on-surface">
              <span className="font-label-sm text-primary/60 mb-4 tracking-widest">
                FINE DINING
              </span>
              <div className="w-full h-40 mb-6 rounded-lg overflow-hidden grayscale">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApQxWtNX41Idp9B3K6peIuC1lEPLnMMxmFc8V8QA5kdFZiroMW7C4_JPN_e_K7eW63E7IpNqMlGVm3ERoHjgYfs91CAvJuS1uRa2XFUEO5303G6mQ-7fAvyyKTQueSuD3bwCYYlww_STYR5-DLL_AZruvAitvnXjIfJXLNRFdW3oB7UAFJdnGNWNo1tL6rNaYiRaBfDfQich5jB9h_f6aJAFDvsaiO4Jg7aq6g55m0v2XLFtMbPXZr8YSPbgYpVZg1_FKTnMHHhaw"
                  alt="Nigerian cuisine closeup"
                />
              </div>
              <p className="font-body-md text-on-surface-variant text-center italic">
                "Cooking is an art, but dining is an experience."
              </p>
              <div className="mt-auto flex gap-4">
                <span className="material-symbols-outlined text-outline">
                  share
                </span>
                <span className="material-symbols-outlined text-outline">
                  language
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-8 right-8 text-white flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <span className="font-label-md opacity-0 group-hover:opacity-100 transition-opacity">
            CLOSE
          </span>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "32px" }}
          >
            close
          </span>
        </button>
      </div>
    </>
  );
};

export default MobileMenu;
