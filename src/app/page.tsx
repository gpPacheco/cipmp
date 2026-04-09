import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutEvent from "@/components/AboutEvent";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import Speakers from "@/components/Speakers";
import Ambassadors from "@/components/Ambassadors";
import Pricing from "@/components/Pricing";
import Countdown from "@/components/Countdown";
import Sponsors from "@/components/Sponsors";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import {
  eventOffers,
  eventStartDate,
  eventTitle,
  richDescription,
  siteUrl,
} from "@/lib/seo";

export default function Home() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "1º CIPMP - MedPodo Interior 2026",
    description: richDescription,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    startDate: eventStartDate,
    location: {
      "@type": "Place",
      name: "Franca - SP",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Franca",
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
    image: ["/logo_evento.png"],
    organizer: {
      "@type": "MedicalOrganization",
      name: "CIPMP",
      url: siteUrl,
      description: richDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Franca",
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
    offers: eventOffers.map((offer) => ({
      "@type": "Offer",
      url: offer.link,
      price: offer.price,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01T00:00:00-03:00",
      category: offer.title,
    })),
  };

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
        id="event-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <Script
        id="medical-org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrganizationSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <AboutEvent />
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
