import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1º CIPMP - MedPodo Interior 2026",
  description:
    "O maior congresso de integração entre Medicina e Podologia do interior paulista. Franca - SP, 2026.",
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
