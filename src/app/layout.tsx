import "./globals.css";
import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import Image from "next/image";

const lora = Cormorant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monica & Leiv Fredriks bryllup",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-theme="fantasy" className={lora.className}>
        <Image fill src="/rings.jpg" className="blur object-cover" alt="" />
        {children}
      </body>
    </html>
  );
}
