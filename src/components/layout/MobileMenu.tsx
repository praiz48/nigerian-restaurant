import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
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
        className="md:hidden fixed bottom-10 left-15 -translate-x-1/2 z-[70] group animate-float"
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

      {/* Overlay with Menu Booklet */}
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6 transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Menu Booklet - Slides up like a closed book */}
        <div
          className={`w-full max-w-md bg-primary rounded-2xl shadow-2xl leather-texture border-l-4 border-primary-container transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
            isOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-20 opacity-0 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 md:p-12">
            {/* Logo / Header */}
            <div className="text-center mb-8">
              <div className="border-2 border-primary-fixed/30 p-6 flex flex-col items-center gap-4">
                <span className="font-display-lg text-white tracking-widest uppercase">
                  Oja
                </span>
                <div className="w-12 h-px bg-white/50"></div>
                <span className="font-label-md text-white/80 tracking-[0.3em]">
                  EST. 2024
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4 mb-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block text-center font-headline-sm text-lg hover:text-white/90 transition-colors py-3 rounded-xl ${
                      location.pathname === link.path
                        ? "text-white bg-white/10"
                        : "text-white/80 hover:bg-white/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Reserve Button */}
            <button
              className="w-full bg-secondary text-white py-4 rounded-xl font-label-md active:scale-95 transition-transform shadow-md hover:bg-secondary/90"
              onClick={() => {
                setIsOpen(false);
                navigate("/reservations");
              }}
            >
              Reserve a Table
            </button>
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
