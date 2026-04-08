import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import Speakers from "@/components/Speakers";
import Ambassadors from "@/components/Ambassadors";
import Pricing from "@/components/Pricing";
import Countdown from "@/components/Countdown";
import Sponsors from "@/components/Sponsors";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Speakers />
        <Ambassadors />
        <Countdown />
        <Pricing />
        <Sponsors />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
