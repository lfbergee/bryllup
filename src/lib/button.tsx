import { Crimson_Text } from "next/font/google";

const font = Crimson_Text({ weight: "400", subsets: ["latin"] });
export function Button({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${font.className} bg-primary text-secondary py-2 px-5 rounded-lg w-fit`}
      {...rest}
    >
      {children}
    </button>
  );
}
