import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import Speakers from "@/components/Speakers";
import Credential from "@/components/Credential";
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
        <Credential />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
