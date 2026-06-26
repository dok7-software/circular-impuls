import { font } from "@/core/typography/fonts";

export const sharedType = {
  brand: `${font.cyGrotesk} text-xl font-bold tracking-[0.18em]`,
  button: `${font.roboto} text-base font-bold`,
  buttonSm: `${font.roboto} text-sm font-bold`,
  localeSwitcher: `${font.roboto} text-sm font-bold tracking-wider`,
} as const;
