import { useState, useTransition } from "react";
import { Button } from "@/lib/button";
import { Input } from "@/lib/input";
import { createWishTable, createUserTable, createWish } from "./server";
import { useFormState } from "react-dom";

const initialState = "initial";

export function Panel() {
  const [_, startTranstition] = useTransition();
  const [counter, setCounter] = useState(0);

  const handleWishTable = () => {
    startTranstition(() => createWishTable());
  };
  const handleUserTable = () => {
    startTranstition(() => createUserTable());
  };

  return (
    <div className="max-w-md w-full m-auto bg-secondary text-primary rounded-xl p-8 flex flex-col gap-2">
      <h1 className="text-center text-2xl pb-4">Admin Panel</h1>
      <Button type="button" onClick={handleWishTable}>
        Lag gaveliste tabell
      </Button>
      <Button type="button" onClick={handleUserTable}>
        Lag gjeste tabell
      </Button>

      <h2 className="text-4xl text-center mb-3">Legg til ønske</h2>
      <Button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        Legg til ønske
      </Button>
      {[...Array(counter)].map((_, i) => (
        <WishForm key={i} />
      ))}
    </div>
  );
}

function WishForm() {
  const [state, formAction] = useFormState(createWish, initialState);

  if (state === "success") {
    return <p className="text-center">Ønsket ble lagt til!</p>;
  }
  return (
    <form className="flex flex-col gap-2 mt-4" action={formAction}>
      <Input name="title" label="Tittel" />
      <Input name="description" label="Beskrivelse" />
      <Input name="url" label="Link" />
      <Input name="image" label="Bilde" />
      <Input name="amount" label="Antall" />
      <Button type="submit">Legg til ønske</Button>
    </form>
  );
}
