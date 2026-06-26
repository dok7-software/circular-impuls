import { font } from "@/core/typography/fonts";

export const footerType = {
  brand: `${font.cyGrotesk} text-base font-bold tracking-[0.16em]`,
  body: `${font.clearSans} text-sm`,
  columnTitle: `${font.clearSans} text-[11px] tracking-[0.18em] uppercase`,
  link: `${font.clearSans} text-sm`,
  placeholder: `${font.clearSans} text-[11px]`,
  copyright: `${font.clearSans} text-sm`,
} as const;
