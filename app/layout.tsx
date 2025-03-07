import Navbar from "@/components/ui/navbar";
import { ApplicationProvider } from "@/context/application-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "First Task",
  description:
    "First Next.js Application to learn integration of a components library.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen h-full antialiased`}
      >
        <ApplicationProvider>
          <Navbar />
          {children}
          <Toaster />
        </ApplicationProvider>
      </body>
    </html>
  );
}
