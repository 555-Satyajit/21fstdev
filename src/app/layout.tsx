import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingHeader } from "@/components/floating-header";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/components/providers/auth-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AURORA | Global Edge Network",
  description: "Next-generation decentralized edge infrastructure for AI and real-time intelligence.",
};

import { Provider as BalancerProvider } from "react-wrap-balancer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
       
        <BalancerProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </BalancerProvider>
        <Toaster theme="dark" position="bottom-right" closeButton />
      </body>
    </html>
  );
}
