/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  variants: {
    extend: {
      content: ['before', 'after'],
    }
  },
  daisyui:{
      theme:['light']
  }
}

