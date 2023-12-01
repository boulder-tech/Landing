/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "atyp-display": ["var(--font-atyp-display)"],
        "atyp-text": ["var(--font-atyp-text)"],
      },
      colors: {
        foreground: {
          heading: "var(--color-foreground-heading)",
          leading: "var(--color-foreground-leading)",
          dark: "var(--color-foreground-dark)",
        },
        background: {
          DEFAULT: "var(--color-background)",
        },
        grey:{
          "100": "var(--color-grey-100)",
          "200": "var(--color-grey-200)",
          "300": "var(--color-grey-300)",
        }
      },
    },
  },
  plugins: [],
}

