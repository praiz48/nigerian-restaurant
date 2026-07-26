import React from "react";

interface ReservationsCTAProps {
  onBookNow?: () => void;
  onDownloadMenu?: () => void;
}

const ReservationsCTA: React.FC<ReservationsCTAProps> = ({
  onBookNow,
  onDownloadMenu,
}) => {
  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-container-max mx-auto px-gutter mt-16 md:mt-24">
      <div className="relative rounded-[2.5rem] bg-primary overflow-hidden p-8 md:p-12 lg:p-20 text-center">
        {/* Abstract Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 space-y-6">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary-container">
            Secure Your Table
          </h2>
          <p className="text-on-primary-container/80 font-body-lg text-body-lg max-w-2xl mx-auto">
            Don't miss out on the season's most anticipated tasting menu.
            Reservations are recommended at least 48 hours in advance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={handleBookNow}
              className="bg-secondary text-white px-10 py-4 rounded-xl font-label-md hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20"
            >
              Book Now
            </button>
            <button
              onClick={onDownloadMenu}
              className="border border-on-primary-container text-on-primary-container px-10 py-4 rounded-xl font-label-md hover:bg-white/10 active:scale-95 transition-all"
            >
              Download Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationsCTA;
