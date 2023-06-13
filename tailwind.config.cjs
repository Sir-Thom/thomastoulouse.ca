/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "futura-pt": ["Futura PT", "sans-serif"],
    },
    colors: {
      dark: {
        50: "#4b4b4b",
        100: "#454545",
        200: "#404040",
        300: "#3b3b3b",
        400: "#353535",
        500: "#303030",
        600: "#2b2b2b",
        700: "#252525",
        800: "#212121",
        900: "#1c1c1c",
      },
      light: {
        50: "#ffffff",
        100: "#fdfdfd",
        200: "#fcfcfc",
        300: "#fafafa",
        400: "#f5f5f5",
        500: "#d9d9d9",
        600: "#bfbfbf",
        700: "#a6a6a6",
        800: "#8c8c8c",
        900: "#737373",
      },
      LapisLazuli: {
        50: "#5B748C",
        100: "#527190",
        200: "#486E93",
        300: "#3F6B96",
        400: "#366899",
        500: "#23629f",
        600: "#1C4E7F",
        700: "#19456F",
        800: "#153B5F",
        900: "#123150",
      },
      WinterWizard: "#a4d8fc",
      DigitalOceanBlue: {
        50: "#1A80E6",
        100: "#0080FF",
        200: "#0066CC",
        300: "#005AB3",
        400: "#004D99",
        500: "#004080",
        600: "#003366",
        700: "#00264D",
        800: "#001A33",
        900: "#000D1A",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
