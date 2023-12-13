import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B8E23",
        secondary: "#5E7EFD",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      height: {
        screen: "100svh",
        width: "100svw",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
