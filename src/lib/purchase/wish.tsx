import { PurchaseButton } from "./PurchaseButton";
import Image from "next/image";
import { WishType } from "./types";
import { clsx } from "clsx";

export function Wish({
  title,
  description,
  url,
  amount,
  purchased_amount,
  id,
  image,
}: WishType) {
  return (
    <div
      className={clsx(
        "flex justify-between gap-4 rounded-xl text-primary p-4",
        {
          "bg-gray opacity-70": purchased_amount === amount,
          "bg-secondary": purchased_amount !== amount,
        },
      )}
    >
      <Image height={300} width={200} src={image} alt={title} />
      <div className="flex flex-col justify-evenly gap-2 w-full">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="underline" href={url} target="_blank" rel="noreferrer">
          Til butikk
        </a>
        {amount > 1 && (
          <>
            <span>Antall ønsket {amount}</span>
            <span>Antall kjøpt {purchased_amount}</span>
          </>
        )}
        {purchased_amount === amount ? (
          <span>Kjøpt</span>
        ) : (
          <PurchaseButton id={id} />
        )}
      </div>
    </div>
  );
}
