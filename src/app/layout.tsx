import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "./context/CartContext";
import Providers from "./Providers";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const baronNeue = localFont({
  src: "./fonts/BaronNeueBold.otf",
});
export const metadata: Metadata = {
  title: "Bahu",
  description: "A different store that matches your vibe",
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
      <Providers>
        <CartProvider>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </CartProvider>
        </Providers>  
      </body>
    </html>
  );
}
