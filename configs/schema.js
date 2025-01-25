import {
  json,
  pgTable,
  serial,
  varchar,

} from "drizzle-orm/pg-core";

export const PROJECT_TABLE = pgTable("projectTable", {
  id: serial().primaryKey(),
  projectId: varchar().notNull(),
  name: varchar().notNull(),
  details: varchar().notNull(),
  deadline: varchar().notNull(),
  location: varchar().notNull(),
  budgetAmount: varchar().notNull(),
  minBid: varchar().notNull(),
  projectLayout: json(),
});
