/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "futura-pt": ["Futura PT", "sans-serif"],
    },
    colors: {
      accent: {
        1: "#663399",
        2: "#993366",
        3: "#669933",
      },
      transparent: "transparent",

      black: colors.black,
      white: colors.white,
      neutral: {
        200: "#cdced0",
      },
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
      IlluminatingEmerald: {
        pressed: "#246B47",
        normal: "#339966",
        hover: "#297A52",
      },
      AmaranthDeepPurple: "#990033",
      LapisLazuli: {
        50: "#5B748C",
        100: "#527190",
        200: "#486E93",
        300: "#3F6B96",
        400: "#336699",
        500: "#23629f",
        600: "#1C4E7F",
        700: "#19456F",
        800: "#153B5F",
        900: "#123150",
      },
      BlueMagentaViolet: "#483399",
      WinterWizard: "#a4d8fc",
      BabyBlueEye: "#99CCFF",
      MoonLight: "#CCCC99",
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
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
