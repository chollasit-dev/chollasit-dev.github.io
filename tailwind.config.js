/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // ! ALWAYS AFTER ALL TAILWINDCSS PLUGIN
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#0ea5e9',
          secondary: '#7e22ce',
          accent: '#0284c7',
          neutral: '#1f2937',
          'base-100': '#111827',

          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '2rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s', // inputs: checkbox, toggle, radio, etc.
          '--btn-focus-scale': '0.975', // scale button transform when focused
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
        },
      },
      // false: only light + dark
      // true: all
      // array: multiple, e.g., ["light", "dark", "cupcake"]
    ],
    darkTheme: false, // false: disable auto dark theme | used one of included theme for dark mode
    base: true, // default apply background, foreground color for root element
    styled: true, // include dasyui color, design decision for all component
    utils: true, // add responsive, modifier utility class
    prefix: 'daisy-', // prefix classname (component, modifier and responsive class, except utility class, e.g., semantic color, border radius)
    themeRoot: ':root', // element that store tailwind theme color css variable
  },
};
