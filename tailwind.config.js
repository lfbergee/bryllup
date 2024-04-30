/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#226F54",
      secondary: "#D2EFD6",
      white: "#ffffff",
      accent: "#F4F0BB",
      gray: "#eeeeee",
    },
  },
};
