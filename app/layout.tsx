import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FluentPath AI",
  description: "Fix your Spanish instantly with AI corrections, explanations, and natural rewrites.",
  manifest: "/manifest.json",
  themeColor: "#020617",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
