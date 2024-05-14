import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
   darkMode: 'class',// Enable dark mode
  theme: {
    extend: {
      colors: {
        // Define dark mode colors
        dark: {
          background: '#1a202c',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), skeleton],
};
