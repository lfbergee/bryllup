import clsx from "clsx";
import { Crimson_Text } from "next/font/google";
import { sql } from "@vercel/postgres";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 my-8">
      <Rsvp />
      <Program />
      <Gifts />
    </main>
  );
}

function Rsvp() {
  return (
    <section
      id="rsvp"
      className="max-w-md w-full m-auto bg-secondary text-primary rounded-xl p-8"
    >
      <h2 className="text-4xl text-center mb-3">RSVP</h2>
      <form className="flex flex-col gap-2">
        <Input label="Navn" />
        <Input label="Telefon" />
        <Input label="RSVP (antall)" />
        <Input label="Allergi" />
        <Input label="Annet" />
        <Button>Send inn</Button>
      </form>
    </section>
  );
}

const font = Crimson_Text({ weight: "400", subsets: ["latin"] });

function Program() {
  return (
    <section id="rsvp" className="flex flex-col gap-4">
      <h2 className="text-2xl text-center">Program</h2>
      <TimeSlot
        time="13:00"
        title="Avgang fra Skibladnerbrygga i Hamar sentrum"
        desc="Bryllupskake, kaffe & jordbær"
      />
      <TimeSlot
        time="15:00"
        title="Ankomst Atlungstad"
        desc="Apretif & omvisning på destilleriet"
      />
      <TimeSlot time="17:00" title="Middag & fest" />
    </section>
  );
}

function TimeSlot({
  time,
  title,
  desc,
}: {
  time: string;
  title: string;
  desc?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 text-accent text-center",
        font.className,
      )}
    >
      <span className="flex text-2xl gap-2 justify-center w-full">
        <time>{time}</time>
        <h3>{title}</h3>
      </span>
      {desc && <p className="text-xl text-secondary italic">{desc}</p>}
    </div>
  );
}

async function Gifts() {
  const wishes = await sql`SELECT * FROM wishes`;

  return (
    <section id="rsvp" className="flex flex-col gap-2">
      <h2 className="text-2xl">Ønskeliste</h2>
      {wishes?.rows?.map((wish) => (
        <div
          key={wish.id}
          className="flex justify-between rounded-xl bg-secondary text-primary p-4"
        >
          <div className="flex flex-col gap-1">
            <h3>{wish.title}</h3>
            <p>{wish.description}</p>
            <a
              className="underline"
              href={wish.url}
              target="_blank"
              rel="noreferrer"
            >
              Til butikk
            </a>

            <span>Antall ønsket {wish.amount}</span>
            <span>Antall kjøpt {wish.purchased_amount}</span>
          </div>
          <Image
            height={300}
            width={200}
            src={wish.image.replace("hh", "h")}
            alt={wish.title}
          />
        </div>
      ))}
    </section>
  );
}

function Input({ label }: { label: string }) {
  return (
    <label className="flex flex-col gap-1">
      {label}
      <input className="border border-secondary rounded-lg p-2" />
    </label>
  );
}

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary text-secondary py-2 px-5 rounded-lg w-fit">
      {children}
    </button>
  );
}
