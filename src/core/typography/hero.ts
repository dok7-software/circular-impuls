import { font } from "@/core/typography/fonts";

export const heroType = {
  badge: `${font.roboto} text-xs font-bold tracking-[0.16em] uppercase`,
  title: `${font.cyGrotesk} text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-[62px]`,
  subtitle: `${font.clearSans} text-lg font-medium sm:text-[22px] sm:leading-snug`,
  fundedBy: `${font.clearSans} text-xs tracking-[0.14em] uppercase`,
  fundingNote: `${font.neueMontreal} text-[11px] leading-snug italic`,
  programBy: `${font.clearSans} text-xs tracking-[0.14em] uppercase`,
  programOrg: `${font.clearSans} text-xl font-semibold tracking-tight lowercase`,
  stat: `${font.roboto} text-[15px]`,
} as const;
