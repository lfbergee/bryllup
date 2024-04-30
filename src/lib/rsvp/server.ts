"use server";

import { sql } from "@vercel/postgres";

export async function submit(
  _: unknown,
  formData: FormData,
): Promise<{ message: string }> {
  const navn = (formData.get("navn") as string) ?? "";
  const antall = (formData.get("antall") as string) ?? "";
  const telefon = (formData.get("telefon") as string) ?? "";
  const allergi = (formData.get("allergi") as string) ?? "";
  const annet = (formData.get("annet") as string) ?? "";

  try {
    await sql`INSERT INTO guests (name, antall, phone, allergi, annet) VALUES (${navn}, ${antall}, ${telefon}, ${allergi}, ${annet});`;

    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
}
