"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { WishType } from "./types";

type WishRow = { rows: WishType[] };

export async function updatePurchase(
  id: number,
  direction: "buy" | "remove",
  amount: number,
) {
  try {
    if (direction === "buy") {
      await sql`UPDATE wishes SET purchased_amount = purchased_amount + ${amount} WHERE id = ${id};`;
    }
    if (direction === "remove") {
      await sql`UPDATE wishes SET purchased_amount = purchased_amount - ${amount} WHERE id = ${id};`;
    }
    revalidatePath("/");
    return "success";
  } catch (error) {
    return "error";
  }
}

export async function getWishes(): Promise<
  { wishes: WishType[]; granted: WishType[] } | "error"
> {
  try {
    const result = (await sql`SELECT * FROM wishes ORDER BY id;`) as WishRow;

    const wishes =
      result?.rows?.filter((wish) => wish.purchased_amount !== wish.amount) ??
      [];
    const granted =
      result?.rows?.filter((wish) => wish.purchased_amount === wish.amount) ??
      [];

    return { wishes, granted };
  } catch (error) {
    return "error";
  }
}
