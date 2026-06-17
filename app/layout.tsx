import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { CustomCursor } from "@/components/custom-cursor"; // Imported the custom cursor
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { StarsCanvas } from "@/components/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import { RouteTransitions } from "@/components/route-transitions";
import { ResumePreviewFab } from "@/components/resume-preview";

import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden antialiased",
          inter.className
        )}
      >
        {/* Global interactive smooth-tracking cursor canvas */}
        <CustomCursor />
        
        <StarsCanvas />
        <Navbar />
        <RouteTransitions>{children}</RouteTransitions>
        <Footer />
        <ResumePreviewFab />
      </body>
    </html>
  );
}