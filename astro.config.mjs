// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  // Enable content collections
  content: {
    collections: {
      course: {
        type: "content",
        schema: {
          type: "object",
          properties: {
            layout: { type: "string" },
            title: { type: "string" },
            slug: { type: "string" },
            thumbnail: { type: "string" },
          },
          required: ["title", "slug"],
        },
      },
    },
  },
});
