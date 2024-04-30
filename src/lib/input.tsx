import { clsx } from "clsx";
import { Crimson_Text } from "next/font/google";

const font = Crimson_Text({ weight: "400", subsets: ["latin"] });
export function Input({
  label,
  name,
  type,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="flex flex-col gap-1">
      {label}
      <input
        className={clsx(
          "border border-secondary rounded-lg p-2",
          font.className,
        )}
        type={type}
        name={name}
        {...rest}
      />
    </label>
  );
}
