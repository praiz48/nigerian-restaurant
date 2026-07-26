import React from "react";
import ReservationsHero from "../components/reservations/ReservationsHero";
import ReservationForm from "../components/reservations/ReservationForm";
import VisitUs from "../components/reservations/VisitUs";
import ReservationsCTA from "../components/reservations/ReservationsCTA";

const Reservations: React.FC = () => {
  const handleBookNow = () => {
    // Scroll to the form
    const formSection = document.querySelector(".reservation-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadMenu = () => {
    // Handle menu download
    console.log("Downloading menu...");
  };

  return (
    <main className="pt-32 pb-stack-lg">
      <ReservationsHero />

      <section className="reservation-form-section max-w-container-max mx-auto px-gutter mb-16 md:mb-24">
        <ReservationForm />
      </section>

      <VisitUs />

      <ReservationsCTA
        onBookNow={handleBookNow}
        onDownloadMenu={handleDownloadMenu}
      />
    </main>
  );
};

export default Reservations;
