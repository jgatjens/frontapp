import type { Config } from "drizzle-kit";
import { env } from "~/env.mjs";

const url = env.POSTGRES_URL.includes("vercel-storage")
  ? env.POSTGRES_URL + "?sslmode=require"
  : env.POSTGRES_URL;

export default {
  schema: "./src/server/db/schema.ts",
  schemaFilter: ["public"],
  out: "./drizzle/migrations",
  driver: "pg",
  verbose: true,
  dbCredentials: {
    connectionString: url,
  },
} satisfies Config;
