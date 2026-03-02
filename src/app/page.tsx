import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Story from "@/components/Story";
import Cast from "@/components/Cast";
import Schedule from "@/components/Schedule";
import Ticket from "@/components/Ticket";
import Gallery from "@/components/Gallery";
import Access from "@/components/Access";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Story />
        <Cast />
        <Schedule />
        <Ticket />
        <Gallery />
        <Access />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
