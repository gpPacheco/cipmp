import Script from "next/script";
import Navbar from "@/components/Navbar";
import HeroObrigado from "@/components/HeroObrigado";
import DiagonalGallery from "@/components/DiagonalGallery";
import Footer from "@/components/Footer";
import { eventTitle, richDescription, siteUrl } from "@/lib/seo";

export default function Home() {
  const medicalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "CIPMP - Congresso Interdisciplinar de Podologia e Medicina Preventiva",
    url: siteUrl,
    logo: `${siteUrl}/logo_evento.png`,
    description: `${eventTitle}. ${richDescription}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Franca",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: "Interior de São Paulo",
  };

  return (
    <>
      <Script
        id="medical-org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrganizationSchema) }}
      />
      <Navbar />
      <main>
        {/* Home: Agradecimento 2026 + Teaser 2027 + Galeria Diagonal */}
        <HeroObrigado />
        <DiagonalGallery />
      </main>
      <Footer />
    </>
  );
}
