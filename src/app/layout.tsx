import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/ui/sidebar";
import NavBar from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Cloud",
  description: "Cloud based file hosting service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
      <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <NavBar /> 
            <main style={{ flex: 1 }}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
