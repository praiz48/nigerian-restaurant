import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Share2,
  Globe,
  User,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: Share2, url: "#" },
    { name: "Twitter", icon: Globe, url: "#" },
    { name: "Facebook", icon: User, url: "#" },
  ];

  return (
    <footer className="bg-surface-container-high w-full mt-stack-lg border-t border-outline-variant/20">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-gutter py-stack-lg max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              alt="Oja Fine Dining Logo"
              className="h-10 w-10 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvf1ZxC2VY9vm5w_v28Qr_a2g1meVGQiS-iO3T4P4w6JRks2KjRIgzYE49l-egbE4Xz5gQ1_bg6d6pWSdRDgkl3GKsKbDB0Nlb8ocdl4WcHLmQzYu5ffwo3MkD0TSQ6-rTXDAZ2FFuBrWagqP6E66zHqhDHKdL_r3EhJ__xc8eFe566VSNpJf4r5s7uEguNHq0f0tfd4Hjytmo8AOpFzmiIN70eague33A8joGhrZj5A_inJtWxX9J5E1SEve62vxuL9hexb_5LSc"
            />
            <span className="font-display-lg text-headline-sm text-primary">
              Oja
            </span>
          </div>
          <p className="text-on-surface-variant font-body-md mb-4 max-w-xs leading-relaxed">
            Contemporary Nigerian fine dining. Celebrating flavor, culture, and
            innovation.
          </p>

          {/* Social Links - Using generic icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-label-md text-on-surface mb-4 uppercase tracking-widest text-sm">
            Quick Links
          </h5>
          <ul className="space-y-3">
            <li>
              <Link
                to="/menu"
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"></span>
                Our Menu
              </Link>
            </li>
            <li>
              <Link
                to="/reservations"
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"></span>
                Reservations
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"></span>
                Our Story
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h5 className="font-label-md text-on-surface mb-4 uppercase tracking-widest text-sm">
            Stay Connected
          </h5>

          {/* Contact */}
          <div className="space-y-2 mb-4">
            <a
              href="#"
              className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm"
            >
              <MapPin className="w-4 h-4 text-primary/60" />
              <span>14 Victoria Island, Lagos</span>
            </a>
            <a
              href="tel:+234800OJA"
              className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm"
            >
              <Phone className="w-4 h-4 text-primary/60" />
              <span>+234 (0) 800 OJA FINE</span>
            </a>
            <a
              href="mailto:hello@ojafinedining.com"
              className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm"
            >
              <Mail className="w-4 h-4 text-primary/60" />
              <span>hello@ojafinedining.com</span>
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex items-center gap-2 bg-surface rounded-xl border border-outline-variant/20 p-1 focus-within:border-primary/50 transition-all">
            <input
              className="bg-transparent border-none focus:ring-0 text-body-md px-3 py-2 flex-1 min-w-0 placeholder:text-on-surface-variant/50 text-sm"
              placeholder="Email for updates"
              type="email"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary p-2 rounded-lg hover:bg-primary/90 transition-all active:scale-95 flex-shrink-0"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-outline-variant/10 py-6 px-gutter">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-on-surface-variant font-label-sm text-sm">
            © {currentYear} Oja Fine Dining. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary font-label-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary font-label-sm transition-colors"
            >
              Terms
            </a>
            <span className="text-on-surface-variant/30">|</span>
            <span className="text-on-surface-variant/50 font-label-sm text-xs">
              Crafted in Lagos 🇳🇬
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
