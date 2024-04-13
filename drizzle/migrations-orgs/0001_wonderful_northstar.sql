ALTER TABLE "company_abc"."campaign" SET SCHEMA public;
--> statement-breakpoint
ALTER TABLE "company_abc"."client" SET SCHEMA public;
--> statement-breakpoint
DROP SCHEMA "company_abc";
--> statement-breakpoint
DROP SCHEMA "company_zxy";
