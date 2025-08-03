/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // or 'media' if you prefer system-based
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        fontFamily: {
          sans: ["var(--font-sans)", "Arial", "sans-serif"],
          mono: ["var(--font-mono)", "monospace"],
        },
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark"],
    },
  };
  