import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/content/site';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Analytics } from "@vercel/analytics/next"
import { Covered_By_Your_Grace } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

export const signatureFont = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});

export const displayFont = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics/>
      </body>
    </html>
  );
}
