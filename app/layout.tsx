import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raihan Ghani Fausta | Backend Developer",
  description:
    "Portfolio backend developer berfokus pada Laravel, Node.js, Express, MySQL, dan MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
