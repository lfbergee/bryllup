"use server";

import { sql } from "@vercel/postgres";

export async function submit(
  _: unknown,
  formData: FormData,
): Promise<{ message: string }> {
  const navn = (formData.get("navn") as string) ?? "";
  const rsvp = (formData.get("rsvp") as string) ?? "";
  const telefon = (formData.get("telefon") as string) ?? "";
  const allergi = (formData.get("allergi") as string) ?? "";
  const annet = (formData.get("annet") as string) ?? "";

  try {
    await sql`INSERT INTO guests (name, rsvp, phone, allergi, annet) VALUES (${navn}, ${rsvp}, ${telefon}, ${allergi}, ${annet});`;

    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
}
