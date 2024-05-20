"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function login(password: string) {
  cookies().set("admin", "true");
  if (password === "secret") {
    return true;
  }
  return false;
}

export async function createUserTable() {
  const isAdmin = cookies().get("admin")?.value;
  if (isAdmin !== "true") {
    return;
  }
  try {
    await sql`DROP TABLE users;`;
    await sql`CREATE TABLE guests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    antall NUMERIC NOT NULL,
    phone TEXT NOT NULL,
    allergi TEXT,
    annet TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);`;
  } catch (error) {}
}

export async function fixWish() {
  await sql`UPDATE wishes SET title = 'Kunst' WHERE id = '22360bf6-efeb-4632-a031-28a46a8bd783'`;
}

export async function createWishTable() {
  const isAdmin = cookies().get("admin")?.value;
  if (isAdmin !== "true") {
    return;
  }
  try {
    await sql`DROP TABLE wishes;`;
    await sql`CREATE TABLE wishes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    url TEXT,
    image TEXT,
    amount NUMERIC NOT NULL,
    purchased_amount NUMERIC NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);`;
  } catch (error) {}
}

export async function createWish(
  _: unknown,
  formData: FormData,
): Promise<string> {
  const isAdmin = cookies().get("admin")?.value;
  if (isAdmin !== "true") {
    return "unauthorized";
  }
  const title = (formData.get("title") as string) ?? "";
  const description = (formData.get("description") as string) ?? "";
  const url = (formData.get("url") as string) ?? "";
  const image = (formData.get("image") as string) ?? "";
  const amount = (formData.get("amount") as string) ?? "";

  try {
    await sql`INSERT INTO wishes (title, description, url, image, amount, purchased_amount) VALUES
  (${title}, ${description}, ${url}, ${image}, ${amount}, 0);
`;
    revalidatePath("/");
    return "success";
  } catch (error) {
    return "error";
  }
}
