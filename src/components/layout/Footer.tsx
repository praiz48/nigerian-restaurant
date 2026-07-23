import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: "Our Menu", path: "/menu" },
    { name: "Chef's Table", path: "/chef-table" },
    { name: "Private Dining", path: "/private-dining" },
    { name: "Gift Cards", path: "/gift-cards" },
  ];

  const connectLinks = [
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Facebook", url: "#" },
    { name: "Careers", url: "#" },
  ];

  return (
    <footer className="bg-surface-container-high w-full mt-stack-lg border-t border-outline-variant/20">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-gutter py-stack-lg max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img
              alt="Oja Fine Dining Logo"
              className="h-10 w-10 object-contain grayscale opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvf1ZxC2VY9v5w_v28Qr_a2g1meVGQiS-iO3T4P4w6JRks2KjRIgzYE49l-egbE4Xz5gQ1_bg6d6pWSdRDgkl3GKsKbDB0Nlb8ocdl4WcHLmQzYu5ffwo3MkD0TSQ6-rTXDAZ2FFuBrWagqP6E66zHqhDHKdL_r3EhJ__xc8eFe566VSNpJf4r5s7uEguNHq0f0tfd4Hjytmo8AOpFzmiIN70eague33A8joGhrZj5A_inJtWxX9J5E1SEve62vxuL9hexb_5LSc"
            />
            <span className="font-display-lg text-headline-sm text-primary">
              Oja Fine Dining
            </span>
          </div>
          <p className="text-on-surface-variant font-body-md mb-6 max-w-xs">
            Contemporary Nigerian fine dining. Celebrating flavor, culture, and
            innovation.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
              aria-label="Share"
            >
              <span className="material-symbols-outlined text-[20px]">
                share
              </span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-[20px]">
                public
              </span>
            </a>
          </div>
        </div>

        {/* Explore Column */}
        <div>
          <h5 className="font-label-md text-on-surface mb-6 uppercase tracking-widest">
            Explore
          </h5>
          <ul className="space-y-4">
            {exploreLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-on-surface-variant hover:text-secondary transition-colors font-body-md"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div>
          <h5 className="font-label-md text-on-surface mb-6 uppercase tracking-widest">
            Connect
          </h5>
          <ul className="space-y-4">
            {connectLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="text-on-surface-variant hover:text-secondary transition-colors font-body-md"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h5 className="font-label-md text-on-surface mb-6 uppercase tracking-widest">
            Newsletter
          </h5>
          <p className="text-on-surface-variant font-body-md mb-4">
            Join our list for exclusive event invites.
          </p>
          <form className="flex flex-col gap-3">
            <input
              className="bg-surface rounded-xl border-outline-variant/30 focus:border-primary focus:ring-primary/20 text-body-md px-4 py-3"
              placeholder="Email Address"
              type="email"
            />
            <button
              type="submit"
              className="bg-on-surface text-surface px-6 py-3 rounded-xl font-label-md hover:bg-primary transition-all active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-outline-variant/10 py-8 px-gutter">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant font-label-sm text-center md:text-left">
            © {currentYear} Oja Fine Dining. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary font-label-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary font-label-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
