import { env } from "@/data/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/drizzle/schema.ts",     // Adjust if your schema path is different
  out: "./src/drizzle/migrations",       // Where migrations will be stored
  dialect: "postgresql",                 // Correct dialect name
  dbCredentials: {
    url: env.DATABASE_URL, // Use DATABASE_URL from .env
  },
});
