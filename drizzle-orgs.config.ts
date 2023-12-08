import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema-orgs.ts",
  schemaFilter: ["company_abc", "company_zxy"],
  out: "./drizzle/migrations-orgs",
  driver: "pg",
  verbose: true,
  dbCredentials: {
    // for some reason if we ~/env.mjs here, it doesn't work
    connectionString: process.env.POSTGRES_URL ?? "",
  },
} satisfies Config;
