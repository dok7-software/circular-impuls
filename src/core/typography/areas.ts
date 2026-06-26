import { font } from "@/core/typography/fonts";

export const areasType = {
  label: `${font.bricolage} text-sm tracking-[0.2em] uppercase`,
  title: `${font.cyGrotesk} text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-[46px]`,
  description: `${font.bricolage} text-lg`,
  itemTitle: `${font.bricolage} text-xl font-semibold sm:text-[23px]`,
  itemSubtitle: `${font.bricolage} text-sm font-semibold`,
  itemBullet: `${font.bricolage} text-[15.5px]`,
  itemSector: `${font.bricolage} font-semibold`,
} as const;
