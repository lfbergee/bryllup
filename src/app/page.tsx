import { Rsvp } from "@/lib/rsvp/form";
import { Program } from "@/lib/program/program";
import { Gifts } from "@/lib/purchase/gifts";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 my-8">
      <Rsvp />
      <Program />
      <Gifts />
    </main>
  );
}
