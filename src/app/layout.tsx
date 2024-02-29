import type { Metadata } from "next";
import "./globals.css";
import config from '../../dev-portfolio-pro.config';

export const metadata: Metadata = {
  title: `${config.name} | ${config.role} - Portfolio`,
  description: `Hi, I'm ${config.name}, ${config.role}. ${config.bio}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="sm:snap-y sm:snap-mandatory" lang="en">
      <body className="dark-container-1">{children}</body>
    </html>
  );
}
