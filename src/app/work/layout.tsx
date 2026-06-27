import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the software engineering projects, web applications, and developer tools built by Sparsh Jain, SDE.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Projects | Sparsh Jain | Software Development Engineer",
    description: "Explore the software engineering projects, web applications, and developer tools built by Sparsh Jain, SDE.",
    url: "https://sparshjain.dev/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
