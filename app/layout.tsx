import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praise Chapel Kenya - Let everything that has breath praise the Lord",
  description: "Welcome to Praise Chapel Kenya. A church passionate about worshipping God and loving people. Join us for worship, fellowship and service opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
