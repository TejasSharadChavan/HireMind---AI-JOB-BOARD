import { z } from "zod";

export const newJobListingApplicationSchema = z.object({
  coverLetter: z
    .string()
    .nullable()
    .transform((val) => (val?.trim() === "" ? null : val)),
});
