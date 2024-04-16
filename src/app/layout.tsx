import "./globals.css";
import type { Metadata } from "next";
import { Petit_Formal_Script } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

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
          "bg-primary text-secondary flex justify-center",
        )}
      >
        <div className="border border-secondary m-8 p-8 min-h-[80vh] w-full max-w-4xl rounded-xl">
          <header className="flex justify-center flex-col gap-2">
            <h1 className="text-5xl text-center">Monica & Leiv Fredrik</h1>
            <time className="text-3xl text-center">7. september 2024</time>
            <nav className="flex justify-center my-3">
              <ul className="list-none flex gap-8 text-2xl text-accent">
                <li>
                  <Link href="#rsvp">RSVP</Link>
                </li>
                <li>
                  <Link href="#program">Program</Link>
                </li>
                <li>
                  <Link href="#gift">Ønskeliste</Link>
                </li>
              </ul>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
