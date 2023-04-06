/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6de09b",

          secondary: "#233182",

          accent: "#e06b67",

          neutral: "#1F252D",

          "base-100": "#F8FAFB",

          info: "#72CFE9",

          success: "#1BC084",

          warning: "#F0B30A",

          error: "#FA3358",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
