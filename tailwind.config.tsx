// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class",
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 👈 REQUIRED
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
