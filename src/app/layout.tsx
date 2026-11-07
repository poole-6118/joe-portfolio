import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joe Poole — Cybersecurity & AI Governance",
  description: "VP of IT, Security & Compliance. Helping organizations secure cloud, AI, and critical infrastructure.",
  keywords: ["cybersecurity", "GRC", "CMMC", "SOC 2", "FedRAMP", "AI governance", "compliance"],
  authors: [{ name: "Joe Poole" }],
  openGraph: {
    title: "Joe Poole — Cybersecurity & AI Governance",
    description: "VP of IT, Security & Compliance. Helping organizations secure cloud, AI, and critical infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased noise">
        {children}
      </body>
    </html>
  );
}
