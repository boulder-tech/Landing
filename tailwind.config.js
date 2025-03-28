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
      screens: {
        '3xl': '1600px'
      },
      colors: {
        text: {
          black: "var(--color-text-black)",
          white: "var(--color-text-white)",
        },
        foreground: {
          heading: "var(--color-foreground-heading)",
          leading: "var(--color-foreground-leading)",
          dark: "var(--color-foreground-dark)",
        },
        background: {
          DEFAULT: "var(--color-background)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
        },
        gray:{
          "100": "var(--color-grey-100)",
          "200": "var(--color-grey-200)",
          "300": "var(--color-grey-300)",
        },
        card: {
          dark: "#0D0E1B"
        }
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        hover: 'hover 4s linear infinite'
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(10deg)",
          },
          "75%": {
            transform: "rotate(-10deg)",
          }
        },
        hover: {
          "0%, 100%": {
            "transform": "translateY(-20%)",
            "animation-timing-function": "ease-in-out",
          },
          "50%": {
            "transform": "translateY(-10%)",
            "animation-timing-function": "ease-in-out",
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

