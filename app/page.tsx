import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import Timeline from "@/components/Timeline";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Brands />
      <Timeline />
      <Partnership />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
