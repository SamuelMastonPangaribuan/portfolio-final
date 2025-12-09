import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- BAGIAN INI YANG DIUBAH (SEO & JUDUL WEBSITE) ---
export const metadata: Metadata = {
  title: "Samuel Maston | IoT & Network Engineer",
  description: "Portfolio of Samuel Maston Pangaribuan, focusing on IoT, Network Engineering, and Cloud Computing.",
  icons: {
    icon: "/favicon.ico", // Opsional: pastikan favicon ada di folder public jika ingin ikon muncul
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}