// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set this to the live domain once you have one, e.g. 'https://www.idofencing.com.au'
  // site: 'https://www.example.com.au',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
