import clsx from "clsx";
import { Crimson_Text } from "next/font/google";

const font = Crimson_Text({ weight: "400", subsets: ["latin"] });

export function TimeSlot({
  time,
  title,
  desc,
  link,
}: {
  time: string;
  title: string;
  desc?: string;
  link?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 text-accent text-center",
        font.className,
      )}
    >
      <span className="flex text-2xl gap-2 justify-center w-full">
        <time>{time}</time>
        <h3>{title}</h3>
      </span>
      {desc && <p className="text-xl text-secondary italic">{desc}</p>}
      {link && (
        <a
          className="text-secondary underline"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Kart
        </a>
      )}
    </div>
  );
}
