import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
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
        <Speakers />
        <Sponsors />
        <Credential />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
