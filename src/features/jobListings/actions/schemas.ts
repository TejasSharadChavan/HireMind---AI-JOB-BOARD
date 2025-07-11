import {
  experienceLevels,
  jobListingTypes,
  locationRequirements,
  wageIntervals,
} from "@/drizzle/schema";
import { z } from "zod";

// export const jobListingSchema = z.object({
//     title:z.string().min(1, "Required"),
//     description:z.string().min(1, "Required"),
//     experienceLevels: z.enum(experienceLevels),
//     locationRequirements: z.enum(locationRequirements),
//     type: z.enum(jobListingTypes),
//     wage: z.number().int().positive().min(1).nullable(),
//     wageInterval: z.enum(wageIntervals).nullable(),
//     stateAbbreviation: z.string().transform(val => (val.trim() === ""?null:val)).nullable(),
//     city:z.string().transform(val => (val.trim() === ""?null:val)).nullable(),
// }).refine(listing => {
//     return listing.locationRequirements === "remote" || listing.city != null
// },{
//     message:"Required for non-remote listings",
//     path:["city"]
// }).refine(listing => {
//     return listing.locationRequirements === "remote" || listing.stateAbbreviation != null
// },{
//     message:"Required for non-remote listings",
//     path:["stateAbbreviation"]
// })

// export const jobListingSchema = z.object({
//   title: z.string().min(1, "Required"),
//   description: z.string().min(1, "Required"),
//   experienceLevel: z.enum(experienceLevels),
//   locationRequirement: z.enum(locationRequirements),
//   type: z.enum(jobListingTypes),
//   wage: z
//     .number({ invalid_type_error: "Must be a number" })
//     .int()
//     .positive()
//     .nullable()
//     .optional(),
//   wageInterval: z.enum(wageIntervals).nullable().optional(),
//   city: z.string().optional(),
//   stateAbbreviation: z.string().optional(),
// }).superRefine((val, ctx) => {
//   if (val.locationRequirement !== "remote") {
//     if (!val.city?.trim()) {
//       ctx.addIssue({
//         path: ["city"],
//         code: z.ZodIssueCode.custom,
//         message: "City is required for non-remote listings",
//       });
//     }
//     if (!val.stateAbbreviation?.trim()) {
//       ctx.addIssue({
//         path: ["stateAbbreviation"],
//         code: z.ZodIssueCode.custom,
//         message: "State is required for non-remote listings",
//       });
//     }
//   }
// });

export const jobListingSchema = z
  .object({
    title: z.string().min(1, "Required"),
    description: z.string().min(1, "Required"),
    experienceLevel: z.enum(experienceLevels),
    locationRequirement: z.enum(locationRequirements),
    type: z.enum(jobListingTypes),
    wage: z.number().int().positive().min(1).nullable(),
    wageInterval: z.enum(wageIntervals).nullable(),
    stateAbbreviation: z
      .string()
      .transform((val) => (val.trim() === "" ? null : val))
      .nullable(),
    city: z
      .string()
      .transform((val) => (val.trim() === "" ? null : val))
      .nullable(),
  })
  .refine(
    (listing) => {
      return listing.locationRequirement === "remote" || listing.city != null;
    },
    {
      message: "Required for non-remote listings",
      path: ["city"],
    }
  )
  .refine(
    (listing) => {
      return (
        listing.locationRequirement === "remote" ||
        listing.stateAbbreviation != null
      );
    },
    {
      message: "Required for non-remote listings",
      path: ["stateAbbreviation"],
    }
  );

export const jobListingAiSearchSchema = z.object({
  query: z.string().min(1, "Required"),
});
