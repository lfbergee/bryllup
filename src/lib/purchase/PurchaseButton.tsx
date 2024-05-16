"use client";

import { Button } from "@/lib/button";
import { useEffect, useRef, useState, useTransition } from "react";
import { updatePurchase } from "./server";
import { Input } from "../input";

export function PurchaseButton({
  id,
  isMulti,
  hasPurcashe,
  max,
  purchased,
}: {
  id: number;
  isMulti: boolean;
  hasPurcashe: boolean;
  max: number;
  purchased: number;
}) {
  const [_, startTranstition] = useTransition();
  const [showDialog, setShowDialog] = useState<"buy" | "remove">();
  const [amount, setAmount] = useState(1);
  const ref = useRef<HTMLDialogElement>(null);

  const handleClick =
    (direction: "buy" | "remove", amount = 1) =>
    () => {
      startTranstition(async () => {
        await updatePurchase(id, direction, amount);
        setShowDialog(undefined);
      });
    };
  useEffect(() => {
    if (showDialog) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [showDialog]);

  return (
    <>
      <dialog
        className="rounded-xl"
        ref={ref}
        onCancel={() => setShowDialog(undefined)}
      >
        <div className="flex flex-col gap-2 p-4">
          <button
            className="self-end text-xs bg-gray p-2 rounded"
            onClick={() => setShowDialog(undefined)}
          >
            Lukk
          </button>
          {showDialog === "buy" ? (
            <p>Hvor mange har du kjøpt?</p>
          ) : (
            <p>Hvor mange vil du fjerne?</p>
          )}
          <Input
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value, 10))}
            type="number"
            label="Antall"
            max={showDialog === "buy" ? max : purchased}
            min={0}
          />
          <Button type="button" onClick={handleClick(showDialog!, amount)}>
            {showDialog === "buy" ? "Marker som kjøpt" : "Fjern kjøp"}
          </Button>
        </div>
      </dialog>
      <div className="flex gap-2">
        <Button
          type="button"
          onClick={isMulti ? () => setShowDialog("buy") : handleClick("buy")}
        >
          Marker som kjøpt
        </Button>
        {hasPurcashe && (
          <Button
            type="button"
            onClick={
              isMulti ? () => setShowDialog("remove") : handleClick("remove")
            }
          >
            Fjern kjøp
          </Button>
        )}
      </div>
    </>
  );
}
