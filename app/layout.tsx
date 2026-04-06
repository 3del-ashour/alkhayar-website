import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cairo } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alkhayar Company | شركة الخيار — Auto Spare Parts & S-Oil Lubricants, Tripoli Libya",
  description:
    "Alkhayar Company — Libya's trusted auto spare parts supplier and exclusive S-Oil Korean lubricants agent since 1999. Premium engine oils, gear oils, transmission fluids, and Korean auto parts in Tripoli.",
  keywords: [
    "Alkhayar Company",
    "شركة الخيار",
    "auto spare parts Libya",
    "S-Oil lubricants Libya",
    "Korean auto parts Tripoli",
    "engine oil Libya",
    "car parts Tripoli",
    "زيوت كورية ليبيا",
  ],
  authors: [{ name: "Alkhayar Company" }],
  creator: "Alkhayar Company",
  publisher: "Alkhayar Company",
  metadataBase: new URL("https://alkhayar.ly"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alkhayar.ly",
    siteName: "Alkhayar Company",
    title: "Alkhayar Company | Auto Spare Parts & S-Oil Lubricants — Tripoli, Libya",
    description:
      "Over 25 years of trusted automotive supply in Libya. Exclusive S-Oil Korean lubricants agent and premium auto spare parts importer since 1999.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alkhayar Company — Auto Spare Parts & S-Oil Lubricants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alkhayar Company | Auto Spare Parts & S-Oil Lubricants",
    description: "Over 25 years of trusted automotive supply in Libya. S-Oil exclusive agent.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${cairo.variable}`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
