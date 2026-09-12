import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/providers/theme-provider";
import ThemeToggle from "@/components/ui/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Board",
  description: "Mohasin's Job Board app using Next.js",
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
        <TanstackProvider>
          <ThemeProvider>
            {children}
            <ThemeToggle />
          </ThemeProvider>
        </TanstackProvider>
        <Toaster />
      </body>
    </html>
  );
}
