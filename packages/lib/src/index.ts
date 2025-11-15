import { z } from "zod";

export const NameSchema = z.string().min(1);

export function validateName(input: unknown) {
  return NameSchema.safeParse(input);
}
