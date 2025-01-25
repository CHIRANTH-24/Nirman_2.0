import {
  pgTable,
  serial,
  varchar,

} from "drizzle-orm/pg-core";

// User Table
export const users = pgTable("users", {
  userId: serial("user_id").primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).unique(),
});

export const tenders = pgTable("tenders", {
  tenderId: varchar("tender_id", { length: 255 }).primaryKey(),
  projectName: varchar("project_name", { length: 255 }).notNull(),
  projectDetails: text("project_details").notNull(),
  deadline: date("deadline").notNull(),
  projectLocation: varchar("project_location", { length: 255 }).notNull(),
  budgetAmount: numeric("budget_amount", { precision: 12, scale: 2 }).notNull(),
  bidAmount: numeric("bid_amount", { precision: 12, scale: 2 }).notNull(),
  createdBy: varchar("created_by", { length: 255 }).notNull(),
  createdAt: date("created_at").default(new Date()).notNull(),
});
