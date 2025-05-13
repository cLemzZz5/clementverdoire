import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");


/** @type {import('tailwindcss').Config} */

export default {

  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "dark:bg-background-dark",
    "dark:text-dark",
    "dark:bg-cinza",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        title: ["Antonio", "sans-serif"],
      },
      colors: {

        background: {
          DEFAULT: "#f0f0f0",
          dark: "#1e1e1e",
        },
        text: {
          DEFAULT: "#1e1e1e",
          dark: "#ededed",
        },

        cinza: "#2c2c2c",
        lightBlue: "#f0f0f0",
        lightBlue2: "#df8e3a",
        blue: "#4bbed3",
        green: "#8EDC78",
        preto: "#1e1e1e",
        white: "#ffffff",

      },
    },
  },
  plugins: [],
} satisfies Config;
