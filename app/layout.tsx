import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import PHProvider from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "FOMO — Find your vibe tonight",
  description:
    "Describe a vibe, get the best Brisbane bars that match it right now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PHProvider>
          {children}
        </PHProvider>
        <Analytics />
      </body>
    </html>
  );
}
