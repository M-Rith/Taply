/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#18181B",
        surface: "#232326",
        border: "#313135",
        primary: "#7B61FF",
        pink: "#FF8BCB",
        yellow: "#FCE38A",
        blue: "#62D6FF",
        green: "#A8E6CF",
        text: {
          DEFAULT: "#FFFFFF",
          subtle: "#A1A1AA",
          muted: "#52525B",
        },
      },
    },
  },
  plugins: [],
};
