import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Utensils, Calendar, Menu as MenuIcon } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [{ name: "Menu", path: "/menu" }];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/90 glass-nav shadow-md"
          : "bg-surface/80 glass-nav"
      }`}
    >
      <nav className="flex justify-between items-center px-gutter md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            alt="Oja Fine Dining Logo"
            className="h-10 w-10 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvf1ZxC2VY9vm5w_v28Qr_a2g1meVGQiS-iO3T4P4w6JRks2KjRIgzYE49l-egbE4Xz5gQ1_bg6d6pWSdRDgkl3GKsKbDB0Nlb8ocdl4WcHLmQzYu5ffwo3MkD0TSQ6-rTXDAZ2FFuBrWagqP6E66zHqhDHKdL_r3EhJ__xc8eFe566VSNpJf4r5s7uEguNHq0f0tfd4Hjytmo8AOpFzmiIN70eague33A8joGhrZj5A_inJtWxX9J5E1SEve62vxuL9hexb_5LSc"
          />
          <span className="font-display-lg text-headline-sm text-primary">
            Oja
          </span>
        </Link>

        {/* Center: Navigation with decorative elements */}
        <div className="hidden md:flex items-center gap-6">
          {/* Decorative dot */}
          <span className="w-1 h-1 rounded-full bg-primary/20"></span>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-label-md transition-all duration-300 relative ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.name}
              {/* Active indicator */}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              )}
              {/* Hover indicator */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Decorative dot */}
          <span className="w-1 h-1 rounded-full bg-primary/20"></span>
        </div>

        {/* Right: Reserve Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate("/reservations")}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-label-md hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Reserve a Table
          </button>
        </div>

        {/* Mobile spacer */}
        <div className="md:hidden w-6"></div>
      </nav>
    </header>
  );
};

export default Navbar;
