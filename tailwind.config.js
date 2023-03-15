const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: ".5rem",
    },
    extend: {
      lineHeight: {
        "55": "55px",
      },
      colors: {
        primary: "#1E2832",
        darkGray: "#777777",
        lightGray: "#F1F1F1",
        accent: "#FF6F61",
        footerText: "#292929",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        poppins: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
