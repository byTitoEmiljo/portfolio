import type { Metadata } from "next";
import { JetBrains_Mono, Audiowide } from "next/font/google";
import Modal from "@/components/Modal";
import "./globals.css";

const geistAudiowide = Audiowide({
  variable: "--font-geist-audiowide",
  weight: '400',
  subsets: ["latin"],
});

const geistJetBrains = JetBrains_Mono({
  variable: "--font-geist-jet-brains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emilio Israel",
  description: "Portafolio Desarrollador Jr front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistAudiowide.variable} ${geistJetBrains.variable}`}>
        <Modal />
        {children}
      </body>
    </html>
  );
}
