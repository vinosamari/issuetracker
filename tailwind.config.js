module.exports = {
  purge: [],
  presets: [],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
