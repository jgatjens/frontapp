import { db } from "~/server/db";
import { getClientsTable } from "~/server/db/schema-orgs";

async function main() {
  const clients = getClientsTable("company_1");
  const sql = await db.select().from(clients);
  console.log(sql);

  process.exit(0);
}

main();
