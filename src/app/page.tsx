import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Access from "@/components/Access";
import MenuGeneral from "@/components/MenuGeneral";
import EventPackages from "@/components/EventPackages";
import NoPackageParty from "@/components/NoPackageParty";
import EventMenu from "@/components/EventMenu";
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
        <Facilities />
        <Access />
        <MenuGeneral />
        <EventPackages />
        <EventMenu />
        <NoPackageParty />
        <QuoteForm />
        <Location />
      </main>
      <Footer />
    </>
  );
}
