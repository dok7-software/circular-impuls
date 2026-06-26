import { z } from "zod";
import { locales } from "@/core/i18n/config";

export const inscriptionSchema = z.object({
  firstName: z.string().trim().min(2).max(80),
  lastName: z.string().trim().max(80).optional(),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(6).max(30),
  project: z.string().trim().min(2).max(200),
  message: z.string().trim().min(10).max(2000),
  locale: z.enum(locales),
  consent: z.literal(true),
  website: z.string().optional(),
});

export type InscriptionInput = z.infer<typeof inscriptionSchema>;
