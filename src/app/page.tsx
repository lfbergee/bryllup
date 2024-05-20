import { Rsvp } from "@/lib/rsvp/form";
import { Program } from "@/lib/program/program";
import { Gifts } from "@/lib/purchase/gifts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-center flex-col gap-2">
        <h1 className="text-5xl text-center">Monica & Leiv Fredrik</h1>
        <time className="text-3xl text-center">7. september 2024</time>
        <nav className="flex justify-center my-3">
          <ul className="list-none flex gap-8 text-2xl text-accent flex-wrap justify-center">
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
      <main className="flex flex-col gap-12 my-8">
        <p className="text-center text-xl">
          Vi inviterer til bryllupsfest på Atlungstad Brenneri!
        </p>
        <Program />
        <Rsvp />
        <p className="text-center">
          Vi starter dagen med en båttur med Skibladner fra Hamar sentrum til
          Atlungstad. Atlungstad er ca 10 minutter kjøring fra Hamar sentrum, så
          vi anbefaler de som ønsker overnatting å booke hotell i Hamar. Vi
          gleder oss til å feire dagen sammen med dere!
        </p>

        <p className="text-center">
          Vi tjuvstarter helgen med vielse på fredag med forlovere og nærmeste
          familie
        </p>
        <p className="text-center">
          Toastmaster: Øyvind Wedø
          <br />
          Ta kontakt for taletid
        </p>
        <Gifts />
      </main>
    </>
  );
}
