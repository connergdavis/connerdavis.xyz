const includePlugins = typeof process !== "undefined";

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./public/**/*.html"],
  mode: "jit",
  plugins: includePlugins ? [require("@tailwindcss/forms")] : [],
  theme: {
    colors: {
      primary: "#2a1830",
      secondary: "#9d6a89",
      black: "#333333",
      white: "#fbfcff",
      success: "#0069ac",
      warning: "#ffaa75",
      failure: "#f66e6f",
    },
    extend: {},
    fontFamily: {
      sans: '"JetBrains Mono", "Courier New", monospace',
      serif: "Merriweather, serif",
    },
  },
};
