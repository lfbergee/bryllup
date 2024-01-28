import { ClerkProvider, UserButton } from "@clerk/nextjs";

import "./globals.css";
import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import Link from "next/link";

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
    <ClerkProvider>
      <html lang="en">
        <body
          data-theme="fantasy"
          className={`${lora.className} bg-[url('/rings.jpg')] bg-cover bg-no-repeat bg-fixed`}
        >
          <div className="navbar bg-white/40 backdrop-blur z-50 absolute px-2">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white/70 backdrop-blur rounded-box w-52"
                >
                  <li>
                    <Link href="/">Hjem</Link>
                  </li>
                  <li>
                    <Link href="/gaveliste">Gaveliste</Link>
                  </li>
                  <li>
                    <Link href="/rsvp">RSVP</Link>
                  </li>
                  <li>
                    <Link href="/tidsplan">Tidsplan</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <Link href="/" className="btn btn-ghost text-xl">
                Monica & LF
              </Link>
            </div>
            <div className="navbar-end">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
          <main className="pt-16">
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row bg-white/40 backdrop-blur shadow-xl pb-10 rounded-xl max-sm:min-h-screen">
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
