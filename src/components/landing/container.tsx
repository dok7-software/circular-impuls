import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "tight";
};

export function Container({ children, className, variant = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        variant === "tight"
          ? "max-w-screen-2xl px-4 lg:px-5"
          : "max-w-7xl px-6 lg:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
