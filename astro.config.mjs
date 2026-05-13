// @ts-check
import { defineConfig } from 'astro/config';

const isNetlify = process.env.NETLIFY === 'true';

// https://astro.build/config
export default defineConfig({
    site: isNetlify ? 'https://blissbox.netlify.app' : 'https://romanbot4.github.io',
    base: isNetlify ? '/' : '/bliss_box_public/',
});