import "./globals.css";
import type { Metadata } from "next";
import { Petit_Formal_Script } from "next/font/google";
import clsx from "clsx";

const font = Petit_Formal_Script({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monica & Leiv Fredriks bryllupsfest",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body
        className={clsx(
          font.className,
          "bg-primary text-secondary flex justify-center max-md:p-4",
        )}
      >
        <div className="border border-secondary m-8 p-8 min-h-[80vh] w-full max-w-4xl rounded-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
