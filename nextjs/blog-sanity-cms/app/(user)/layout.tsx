import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar, Providers } from "../components";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photography and Philosophy Blog | Explore Life's Essence",
  description: `Embark on a journey of discovery through captivating photography and profound philosophy.
    Delve into hidden wonders, ponder life's mysteries, and experience the essence of our world 
    in every pixel.`,
  icons: {
    icon: ["/favicon.svg"],
    apple: ["/favicon.svg"],
    shortcut: ["/favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.className} max-w-screen no-scrollbar h-screen overflow-x-hidden bg-white !font-body text-black selection:bg-gray-500/50`}
      >
        <Providers>
          <Navbar />
          <main className="mx-auto h-[calc(100%_-_64px)] max-w-5xl overflow-scroll px-4 pt-2 sm:px-6 lg:px-8">
            {children}
          </main>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
