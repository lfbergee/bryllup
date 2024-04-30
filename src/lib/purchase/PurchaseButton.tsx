"use client";

import { Button } from "@/lib/button";
import { useTransition } from "react";
import { updatePurchase } from "./server";

export function PurchaseButton({ id }: { id: number }) {
  const [_, startTranstition] = useTransition();

  const handleClick = () => {
    startTranstition(() => {
      updatePurchase(id);
    });
  };

  return (
    <Button type="button" onClick={handleClick}>
      Marker som kjøpt
    </Button>
  );
}
