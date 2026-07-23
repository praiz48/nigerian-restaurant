import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../shared/Button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Location", path: "/location" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/80 glass-nav shadow-md"
          : "bg-surface/80 glass-nav"
      }`}
    >
      <nav className="flex justify-between items-center px-gutter md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <img
            alt="Oja Fine Dining Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvf1ZxC2VY9v5w_v28Qr_a2g1meVGQiS-iO3T4P4w6JRks2KjRIgzYE49l-egbE4Xz5gQ1_bg6d6pWSdRDgkl3GKsKbDB0Nlb8ocdl4WcHLmQzYu5ffwo3MkD0TSQ6-rTXDAZ2FFuBrWagqP6E66zHqhDHKdL_r3EhJ__xc8eFe566VSNpJf4r5s7uEguNHq0f0tfd4Hjytmo8AOpFzmiIN70eague33A8joGhrZj5A_inJtWxX9J5E1SEve62vxuL9hexb_5LSc"
          />
          <span className="font-display-lg text-headline-sm md:text-headline-md text-primary tracking-tight">
            Oja Fine Dining
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-label-md transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Reserve Button */}
        <Button
          variant="primary"
          className="hidden md:inline-block px-6 py-2.5 rounded-xl"
        >
          Reserve a Table
        </Button>

        {/* Mobile spacer (menu button will be handled by MobileMenu component) */}
        <div className="md:hidden w-6"></div>
      </nav>
    </header>
  );
};

export default Navbar;
