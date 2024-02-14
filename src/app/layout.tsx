import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import config from '../../dev-portfolio-pro.config';

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
