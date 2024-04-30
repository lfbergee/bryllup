import { getWishes } from "./server";
import { Wish } from "./wish";

export async function Gifts() {
  const wishes = await getWishes();

  if (typeof wishes === "string") {
    return <p>Ups, noe gikk galt, kjeft på Leiv Fredrik</p>;
  }

  return (
    <section id="rsvp" className="flex flex-col gap-2">
      <h2 className="text-3xl text-center mb-4">Ønskeliste</h2>
      {wishes.map((wish) => (
        <Wish key={wish.id} {...wish} />
      ))}
    </section>
  );
}
