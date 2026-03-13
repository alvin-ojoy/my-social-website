import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium transition ${
        variant === "primary"
          ? "bg-black text-white hover:opacity-90"
          : "border border-neutral-300 text-neutral-800 hover:bg-neutral-100"
      }`}
    >
      {children}
    </Link>
  );
}