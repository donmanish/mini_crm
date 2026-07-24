BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "customers" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR(100) NOT NULL,
	"email"	VARCHAR(100) NOT NULL,
	"phone"	VARCHAR(20) NOT NULL,
	"company"	VARCHAR(100) NOT NULL,
	"designation"	VARCHAR(100),
	"status"	VARCHAR(20) NOT NULL,
	"created_at"	DATETIME NOT NULL,
	"updated_at"	DATETIME NOT NULL,
	UNIQUE("email"),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "notes" (
	"id"	INTEGER NOT NULL,
	"customer_id"	INTEGER NOT NULL,
	"note"	TEXT NOT NULL,
	"created_at"	DATETIME NOT NULL,
	PRIMARY KEY("id"),
	FOREIGN KEY("customer_id") REFERENCES "customers"("id")
);
CREATE TABLE IF NOT EXISTS "timelines" (
	"id"	INTEGER NOT NULL,
	"customer_id"	INTEGER NOT NULL,
	"event"	VARCHAR NOT NULL,
	"created_at"	DATETIME NOT NULL,
	PRIMARY KEY("id"),
	FOREIGN KEY("customer_id") REFERENCES "customers"("id")
);
INSERT INTO "customers" VALUES (2,'Sarah Johnson','sarah@cloudsoft.com','9123456780','CloudSoft Inc','CTO','Prospect','2026-07-24 09:57:37.576233','2026-07-24 09:57:37.576237');
INSERT INTO "customers" VALUES (3,'Michael Smith','michael@fintech.ai','9988776655','FinTech AI','CEO','Customer','2026-07-24 09:58:15.297216','2026-07-24 09:58:15.297219');
INSERT INTO "customers" VALUES (4,'arun','arun@gmail.com','9863256895','abc','IT Manager','Lead','2026-07-24 11:18:33.109436','2026-07-24 11:18:33.110018');
INSERT INTO "customers" VALUES (5,'Sarah Williams','sarah.williams@cloudnova.com','9123456780','CloudNova Technologies','Product Manager','Lead','2026-07-24 12:08:28.321147','2026-07-24 12:08:28.321152');
INSERT INTO "customers" VALUES (6,'rock Williams','rock@cloudnova.com','9123456780','CloudNova Technologies','Product Manager','Lead','2026-07-24 12:11:42.802274','2026-07-24 12:11:42.802277');
INSERT INTO "customers" VALUES (7,'Williams','w@cloudnova.com','9123456780','CloudNova Technologies','Product Manager','Lead','2026-07-24 12:13:47.591979','2026-07-24 12:13:47.591985');
INSERT INTO "customers" VALUES (8,'lela','lela@cloudnova.com','9123456780','CloudNova Technologies','Product Manager','Lead','2026-07-24 12:18:11.406457','2026-07-24 12:18:11.406465');
INSERT INTO "notes" VALUES (4,2,'Looking for cloud-based CRM. Interested in AI automation.','2026-07-24 10:00:35.910554');
INSERT INTO "notes" VALUES (5,3,'Already using our CRM. Wants premium support and advanced analytics.','2026-07-24 10:00:45.928719');
INSERT INTO "notes" VALUES (6,4,'i want to work on data','2026-07-24 11:18:54.754025');
INSERT INTO "notes" VALUES (7,8,'i need proper ppt','2026-07-24 12:18:49.296108');
INSERT INTO "notes" VALUES (8,8,'i need proper ppt','2026-07-24 12:19:54.734120');
INSERT INTO "timelines" VALUES (1,6,'Customer created','2026-07-24 12:11:42.825752');
INSERT INTO "timelines" VALUES (2,7,'Customer created','2026-07-24 12:13:47.601976');
INSERT INTO "timelines" VALUES (3,8,'Customer created','2026-07-24 12:18:11.417790');
INSERT INTO "timelines" VALUES (4,8,'Added customer note','2026-07-24 12:18:49.311248');
INSERT INTO "timelines" VALUES (5,8,'Added customer note','2026-07-24 12:19:54.746055');
INSERT INTO "timelines" VALUES (6,8,'AI generated customer insights test .','2026-07-24 12:32:26.827978');
CREATE INDEX IF NOT EXISTS "ix_customers_id" ON "customers" (
	"id"
);
COMMIT;
