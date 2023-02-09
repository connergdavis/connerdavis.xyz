/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: '"JetBrains Mono", "Courier New", monospace',
      serif: "Merriweather, serif",
    },
  },
};
