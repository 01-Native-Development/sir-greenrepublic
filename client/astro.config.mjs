// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  // Optional: You can add further configuration here if needed
});
