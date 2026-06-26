import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Rivers | Creative Full Stack Developer",
  description: "Portfolio of Alex Rivers, showcasing high-performance web applications, interactive UI designs, and digital experiences.",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Next.js", "TypeScript", "UI/UX Portfolio"],
  authors: [{ name: "Alex Rivers" }],
  openGraph: {
    title: "Alex Rivers | Creative Full Stack Developer",
    description: "Portfolio of Alex Rivers, showcasing high-performance web applications, interactive UI designs, and digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
