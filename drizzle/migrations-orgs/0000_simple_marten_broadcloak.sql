CREATE SCHEMA "company_abc";
--> statement-breakpoint
CREATE SCHEMA "company_zxy";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "company_abc"."campaign" (
	"id" serial NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "company_abc"."client" (
	"id" serial NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"legal_representative" text,
	"client_id" text PRIMARY KEY NOT NULL,
	"client_id_type" text NOT NULL,
	"business_name" text NOT NULL,
	"personal_phone" text NOT NULL,
	"business_phone" text,
	"website" text
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "client_idx" ON "company_abc"."client" ("client_id");