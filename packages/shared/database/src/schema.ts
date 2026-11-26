import { integer, snakeCase, timestamp, varchar } from "drizzle-orm/pg-core";

export const productTable = snakeCase.table("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  description: varchar().notNull(),
  price: integer().notNull(),
  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp({ withTimezone: true })
});
