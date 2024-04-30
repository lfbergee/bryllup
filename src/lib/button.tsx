export function Button({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-primary text-secondary py-2 px-5 rounded-lg w-fit"
      {...rest}
    >
      {children}
    </button>
  );
}
