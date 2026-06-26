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
  title: "Sparsh Jain | Software Development Engineer",
  description: "Portfolio of Sparsh Jain, Software Development Engineer specializing in fast, scalable, and responsive web applications using Next.js, React.js, TypeScript, and Tailwind CSS.",
  keywords: ["Software Development Engineer", "SDE", "React", "Next.js", "TypeScript", "Tailwind CSS", "Nighwan Technology", "Portfolio", "Sparsh Jain"],
  authors: [{ name: "Sparsh Jain" }],
  openGraph: {
    title: "Sparsh Jain | Software Development Engineer",
    description: "Portfolio of Sparsh Jain, Software Development Engineer specializing in fast, scalable, and responsive web applications using Next.js, React.js, TypeScript, and Tailwind CSS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} ${caveat.variable}`}>
      <body className="app-body">
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
