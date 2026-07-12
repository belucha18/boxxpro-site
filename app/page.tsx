import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import SampleEstimate from "@/components/SampleEstimate";
import Areas from "@/components/Areas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-slate-800 overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Team />
      <Services />
      <Gallery />
      <Process />
      <SampleEstimate />
      <Areas />
      <Contact />
      <Footer />
    </main>
  );
}