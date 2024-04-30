"use client";

import { Input } from "@/lib/input";
import { Button } from "@/lib/button";
import { submit } from "./server";
import { useFormState } from "react-dom";

const initialState = {
  message: "initial",
};

export function Rsvp() {
  const [state, formAction] = useFormState(submit, initialState);

  if (state.message === "success") {
    return <p className="text-center">Takk for at du sendte inn RSVP!</p>;
  }
  if (state.message === "error") {
    return <p className="text-center">Noe gikk galt, kjeft på Leiv Fredrik</p>;
  }

  return (
    <section
      id="rsvp"
      className="max-w-md w-full m-auto bg-secondary text-primary rounded-xl p-8"
    >
      <h2 className="text-4xl text-center mb-3">RSVP</h2>
      <form className="flex flex-col gap-2" action={formAction}>
        <Input name="navn" type="text" label="Navn" />
        <Input name="telefon" type="tel" label="Telefon" />
        <Input name="antall" type="number" label="RSVP (antall)" />
        <Input name="allergi" type="text" label="Allergi" />
        <Input name="annet" type="text" label="Annet" />
        <Button type="submit">Send inn</Button>
      </form>
    </section>
  );
}
