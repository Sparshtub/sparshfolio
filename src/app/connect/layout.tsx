import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sparsh Jain, Software Development Engineer, for freelance inquiries, full-time opportunities, or project discussions.",
  alternates: {
    canonical: "/connect",
  },
  openGraph: {
    title: "Contact | Sparsh Jain | Software Development Engineer",
    description: "Get in touch with Sparsh Jain, Software Development Engineer, for freelance inquiries, full-time opportunities, or project discussions.",
    url: "https://sparshjain.dev/connect",
  },
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
