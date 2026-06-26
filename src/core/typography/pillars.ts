import { font } from "@/core/typography/fonts";

export const pillarsType = {
  title: `${font.cyGrotesk} text-3xl font-bold tracking-tight sm:text-4xl lg:text-[46px]`,
  subtitle: `${font.clearSans} text-center text-lg leading-snug sm:text-xl`,
  itemTitle: `${font.clearSans} text-lg font-bold sm:text-[21px]`,
  itemDescription: `${font.clearSans} text-[15.5px]`,
} as const;
