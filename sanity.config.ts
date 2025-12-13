import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemas";

export default defineConfig({
  projectId: "5etx10bb",
  dataset: "production",
  plugins: [
    structureTool()
  ],
  schema,
});
