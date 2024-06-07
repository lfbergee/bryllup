import { getWishes } from "./server";
import { Wish } from "./wish";

export async function Gifts() {
  const wishes = await getWishes();

  if (typeof wishes === "string") {
    return <p>Ups, noe gikk galt, kjeft på Leiv Fredrik</p>;
  }

  return (
    <section id="gifts" className="flex flex-col gap-2">
      <h2 className="text-3xl text-center mb-4">Ønskeliste</h2>
      <p className="text-center mb-4">Vi legger til flere ønsker fortløpende</p>
      {wishes.wishes.map((wish) => (
        <Wish key={wish.id} {...wish} />
      ))}
      {wishes.granted.map((wish) => (
        <Wish key={wish.id} {...wish} />
      ))}
    </section>
  );
}
