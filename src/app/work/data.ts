export type Project = {
  id: string;
  title: string;
  category: string;
  desc: string;
  descLong: string;
  role: string;
  duration: string;
  tech: string[];
  features: string[];
  challenges: string;
  demoUrl: string;
  codeUrl: string;
};

export const PROJECTS: Project[] = [
  {
    id: "nighwan",
    title: "Nighwan Tech Corporate Portal",
    category: "Frontend Dev",
    desc: "A high-performance corporate portal built with Next.js, TypeScript, and Tailwind CSS. Features dynamic reusable components, sitemaps, Open Graph metadata, Vercel deployments, and SEO optimizations.",
    descLong: "Nighwan Tech is a modern corporate site designed to showcase their software consulting services, product listings, and digital transformation solutions. The project emphasizes visual speed, semantic SEO structure, and client-side page transitions. I designed a custom layout with modular sections, reusable navigation, and clean dynamic route pages.",
    role: "Lead Frontend Engineer",
    duration: "2 Months",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
    features: [
      "Modular components structure for easy service listings updates.",
      "Complete Open Graph metadata setup for social previews and link sharing.",
      "Custom dynamic sitemaps and search indexing optimizations.",
      "Fully optimized responsive styling matching desktop guidelines to mobile screens."
    ],
    challenges: "The primary challenge was maintaining strict performance scores while rendering large marketing sections. This was resolved by using Next.js Server Components for static pages, implementing strict image optimization with dynamic Next/Image components, and lazy-loading heavy background elements.",
    demoUrl: "https://nighwantech.vercel.app/",
    codeUrl: "https://github.com/Sparshtub/portfolio"
  },
  {
    id: "gatirath",
    title: "Gatirath Cab & Bus Rentals",
    category: "Full Stack Dev",
    desc: "A premium vehicle rental and tour booking platform built with Next.js and Tailwind CSS. Supports advanced trip forms, custom tour packages, and corporate/event travel solutions.",
    descLong: "Gatirath is a bus and taxi rental booking platform servicing multi-city rentals, outstation trips, and tailored travel plans. The application contains interactive booking forms, a catalog of rentals (sedans, SUVs, buses), and custom travel itinerary planners.",
    role: "Full Stack Developer",
    duration: "3 Months",
    tech: ["Next.js", "Tailwind CSS", "React.js", "Vercel", "Nodemailer"],
    features: [
      "Interactive multi-step trip form for selecting source, destination, and travel dates.",
      "Dynamic pricing structure based on vehicle type and trip options.",
      "SMTP Nodemailer integration for booking confirmations and request forms.",
      "Admin dashboard capability for tracking vehicle availability and trip history."
    ],
    challenges: "Managing state across multi-step forms while preserving inputs during page refreshes was critical. We solved this by combining React Context API with state persistence to local storage, and validated inputs using custom schema hooks before hitting the server API endpoint.",
    demoUrl: "https://gatirath-vert.vercel.app/",
    codeUrl: "https://github.com/Sparshtub/portfolio"
  },
  {
    id: "weather",
    title: "Open-Meteo Weather Dashboard",
    category: "Frontend Dev",
    desc: "An interactive weather dashboard querying Open-Meteo API for current, hourly and historical metrics. Features interactive trend charts built with Recharts, horizontal scrolling, and custom brush-zoom selections.",
    descLong: "This interactive weather insights panel queries Open-Meteo weather API endpoints dynamically. Designed for metrics comparison (temperature, wind speeds, humidity, UV index), it incorporates charts for analyzing climate patterns over multiple weeks.",
    role: "Frontend Developer",
    duration: "1 Month",
    tech: ["React.js", "Vite", "Recharts", "Open-Meteo API", "Vercel"],
    features: [
      "Integration with Open-Meteo REST API for real-time local weather reports.",
      "Interactive time-series charts leveraging Recharts with zoom, brush filter, and custom tooltips.",
      "Dynamic unit toggler (Celsius vs. Fahrenheit, Metric vs. Imperial).",
      "Saved locations sidebar with client-side caching in LocalStorage."
    ],
    challenges: "Handling large datasets of hourly coordinates from the API and rendering them without lag on mobile web browsers was key. This was addressed by implementing component memoization and rendering hourly charts using lightweight SVGs with throttled chart zoom brushes.",
    demoUrl: "https://weather-dashboard-six-silk.vercel.app/",
    codeUrl: "https://github.com/Sparshtub/Weather-Dashboard"
  },
  {
    id: "plants",
    title: "VrikshVatika Plant E-Store",
    category: "Frontend Dev",
    desc: "A plant e-commerce concept highlighting visual storytelling, micro-interactions, responsive styling using Tailwind CSS, and client-side sorting algorithms.",
    descLong: "VrikshVatika is an e-store concept for plant enthusiasts. The project highlights fluid user journeys, a rich visual layout, catalog management, filters (size, sunlight, water needs), and micro-animations for adding items to cart.",
    role: "Frontend Developer",
    duration: "1 Month",
    tech: ["React.js", "Tailwind CSS", "Context API", "Framer Motion"],
    features: [
      "Interactive plant catalog with filter and sorting capabilities.",
      "Custom shopping cart with animated side drawer (Framer Motion).",
      "Detailed product display sheet showing watering schedule and care guidance.",
      "Fully responsive checkout experience with floating elements."
    ],
    challenges: "Achieving a warm, natural organic feel with micro-interactions that do not distract from the checkout journey. Frame animations were fine-tuned using custom cubic-beziers in Framer Motion to mimic natural physics transitions.",
    demoUrl: "https://github.com/Sparshtub/portfolio",
    codeUrl: "https://github.com/Sparshtub/portfolio"
  }
];
