import type { Metadata } from "next";
import "./globals.css";
import { eventDescription, eventTitle, seoKeywords, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: eventTitle,
  description: eventDescription,
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "CIPMP 2026",
    title: "1º CIPMP 2026 | Saúde e Medicina no Interior Paulista",
    description: eventDescription,
    images: [
      {
        url: "/logo_evento.png",
        width: 1200,
        height: 630,
        alt: "1º CIPMP 2026 - Congresso de Podologia e Medicina Esportiva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1º CIPMP 2026 | Saúde e Medicina Esportiva",
    description: eventDescription,
    images: ["/logo_evento.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
