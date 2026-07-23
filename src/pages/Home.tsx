import Hero from "../components/home/Hero";
import SignatureDishes from "../components/home/SignatureDishes";
import About from "../components/home/About";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import ReservationCTA from "../components/home/ReservationCTA";

const Home = () => {
  return (
    <main className="pt-24">
      <Hero />
      <SignatureDishes />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <ReservationCTA />
    </main>
  );
};

export default Home;
