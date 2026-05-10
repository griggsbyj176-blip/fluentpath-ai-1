import "./globals.css";
export const metadata = {
  title: "Fix your Spanish instantly",
  description: "Instant Spanish corrections with AI",
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