/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "social-orange": "#F27623",
        "dark-gray": "#262626",
        "social-gray": "rgb(250, 250, 250, 1)",
        "post-gray": "#868686",
      },
    },
  },
  plugins: [],
}
