import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://Chiranth:npg_gGaZS58QvlYL@ep-young-union-a8pfjzgs-pooler.eastus2.azure.neon.tech/Nirman?sslmode=require",
  },
});
