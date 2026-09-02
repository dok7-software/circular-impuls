import Link from "next/link";
import { sharedType } from "@/core/typography";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline-light";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const disabledClassName =
  "cursor-not-allowed bg-[#4a5561] text-[#aeb6c0] opacity-90 hover:opacity-90";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  disabled = false,
}: ButtonLinkProps) {
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={cn(
          sharedType.button,
          "inline-flex items-center justify-center rounded-full px-6 py-3.5",
          disabledClassName,
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        sharedType.button,
        "inline-flex items-center justify-center rounded-full px-6 py-3.5 transition-opacity hover:opacity-90",
        variant === "primary" && "bg-brand-green text-white",
        variant === "secondary" && "bg-brand-green px-7 py-4 text-white",
        variant === "outline-light" &&
          "border border-white/40 font-semibold text-white",
        className,
      )}
    >
      {children}
    </Link>
  );
}
