/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        "3/10": "30%",
        "9/10": "90%",
        "6/10": "60%",
        "7/10": "70%",
        "5/10": "50%",
      },
      height: {
        "8/10": "80%",
      },
      colors: {
        "text-primary": "rgba(0, 0, 0, 0.95)",
        "text-secondary": "#ffd700",
      },
    },
  },
  plugins: [],
};
