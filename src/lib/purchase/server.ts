"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { WishType } from "./types";

type WishRow = { rows: WishType[] };

export async function updatePurchase(id: number) {
  try {
    await sql`UPDATE wishes SET purchased_amount = purchased_amount + 1 WHERE id = ${id};`;

    revalidatePath("/");
    return "success";
  } catch (error) {
    return "error";
  }
}

export async function getWishes(): Promise<WishType[] | "error"> {
  try {
    const result = (await sql`SELECT * FROM wishes;`) as WishRow;

    return (
      result?.rows?.toSorted((a) =>
        a.purchased_amount === a.amount ? 1 : -1,
      ) ?? []
    );
  } catch (error) {
    return "error";
  }
}
