import type { Metadata } from "next";
import { Alegreya, Overpass } from "next/font/google";

import { cn } from "@/_lib/utils";
import PosthogProvider from "@/_providers/posthogProvider";
import "./globals.css";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  display: "swap",
});

const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thiago Saraiva - Developer",
  description: "Generated by create next app",
};
type Props = Readonly<{
  children: React.ReactNode;
}>;
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <PosthogProvider>
        <body className={cn("", overpass.variable, alegreya.variable)}>
          {children}
        </body>
      </PosthogProvider>
    </html>
  );
}
