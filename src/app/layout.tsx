import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import NavBar from "./NavBar";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
export const metadata: Metadata = {
  title: "Dominion Behavioral",
  description: "Your Health Matters to Us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
