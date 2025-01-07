import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import FooterHandler from "@/components/FooterHandler";

const geistSans = ({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = ({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Car Rent Website Design",
  description: "Generated by Syeda Shanzay",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans} ${geistMono} antialiased`}
      ><Header />
        {children}
        <FooterHandler />
      </body>
    </html>
  );
}
