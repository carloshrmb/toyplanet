import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Attractions from "@/components/Attractions";
import Pricing from "@/components/Pricing";
import FoodMenu from "@/components/FoodMenu";
import QuoteForm from "@/components/QuoteForm";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Attractions />
        <Pricing />
        <FoodMenu />
        <QuoteForm />
        <Location />
      </main>
      <Footer />
    </>
  );
}
