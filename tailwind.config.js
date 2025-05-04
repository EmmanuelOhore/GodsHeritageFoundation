/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      wide: "1440px",
      laptop: { max: "1024px" },
      tablet: { max: "900px" },
      phoneS: { max: "700px" },
      phoneL: { max: "500px" },
      phoneP: { max: "390px" },
    },
  },
  plugins: [],
};
