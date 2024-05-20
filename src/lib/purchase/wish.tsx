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
      {image.startsWith("http") || image.startsWith("/") ? (
        <Image
          className="mix-blend-multiply"
          height={300}
          width={200}
          src={image}
          alt={title}
        />
      ) : (
        <span />
      )}
      <div className="flex flex-col justify-evenly gap-2 w-full">
        <a href={url} target="_blank" rel="noreferrer" className="underline">
          <h3 className="text-lg">{title}</h3>
        </a>
        <p>{description}</p>

        {amount > 1 && (
          <p className="text-sm flex flex-col">
            <span>Antall ønsket {amount}</span>
            <span>Antall gjenstående {amount - purchased_amount}</span>
          </p>
        )}
        {purchased_amount === amount ? (
          <span>Kjøpt</span>
        ) : (
          <PurchaseButton
            id={id}
            isMulti={amount > 1}
            hasPurcashe={purchased_amount > 0}
            max={amount - purchased_amount}
            purchased={purchased_amount}
          />
        )}
      </div>
    </div>
  );
}
