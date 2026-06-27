import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SidebarStamps from "@/components/SidebarStamps/SidebarStamps";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sparshjain.dev"),
  title: {
    default: "Sparsh Jain | Software Development Engineer",
    template: "%s | Sparsh Jain | Software Development Engineer",
  },
  description: "Portfolio of Sparsh Jain, Software Development Engineer specializing in fast, scalable, and responsive web applications using Next.js, React.js, TypeScript, and CSS.",
  keywords: [
    "Software Development Engineer",
    "SDE",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Sparsh Jain",
    "basedsparsh",
    "basedsparshjain"
  ],
  authors: [{ name: "Sparsh Jain" }],
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sparsh Jain | Software Development Engineer",
    description: "Portfolio of Sparsh Jain, Software Development Engineer specializing in fast, scalable, and responsive web applications using Next.js, React.js, TypeScript, and CSS.",
    url: "https://sparshjain.dev",
    siteName: "Sparsh Jain Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparsh Jain | Software Development Engineer",
    description: "Portfolio of Sparsh Jain, Software Development Engineer specializing in fast, scalable, and responsive web applications using Next.js, React.js, TypeScript, and CSS.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sparsh Jain",
  "jobTitle": "Software Development Engineer",
  "url": "https://sparshjain.dev",
  "sameAs": [
    "https://github.com/Sparshtub",
    "https://linkedin.com/in/basedsparsh/"
  ],
  "email": "basedsparshjain@gmail.com",
  "telephone": "+91 62640-20272",
  "knowsAbout": [
    "Software Engineering",
    "Frontend Development",
    "React.js",
    "Next.js",
    "TypeScript",
    "CSS",
    "Tailwind CSS",
    "Full Stack Development",
    "API Development"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} ${caveat.variable}`}>
      <body className="app-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SidebarStamps side="left" />
        <SidebarStamps side="right" />
        <div className="layout-content">
          <Navbar />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
