/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#172d65",
          50: "#f5f7fa",
          100: "#eaeff4",
          200: "#d1dbe8",
          300: "#a8bcd5",
          400: "#7998bd",
          500: "#5979a8",
          600: "#46608d",
          700: "#3a4e72",
          800: "#172d65", // Primary color
          900: "#1a2540",
          950: "#111827",
        },
        secondary: {
          DEFAULT: "#e66234",
          50: "#fef6f2",
          100: "#fdebe3",
          200: "#fcd3c1",
          300: "#f9b293",
          400: "#f5835d",
          500: "#e66234", // Secondary color
          600: "#d44920",
          700: "#b1381b",
          800: "#92301b",
          900: "#782b1a",
          950: "#41130b",
        },
        gray: {
          DEFAULT: "#707070",
          50: "#f9f9f9",
          100: "#f2f2f2",
          200: "#e2e2e2", // Light gray
          300: "#d1d1d1",
          400: "#b0b0b0",
          500: "#707070", // Medium gray
          600: "#5c5c5c",
          700: "#454545",
          800: "#2e2e2e",
          900: "#1a1a1a",
          950: "#0a0a0a",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.2" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        "spin-slow": "spin 3s linear infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "scale-in": "scaleIn 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        bounceSubtle: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      boxShadow: {
        soft: "0 2px 15px rgba(0, 0, 0, 0.08)",
        medium: "0 4px 25px rgba(0, 0, 0, 0.1)",
        large: "0 10px 40px rgba(0, 0, 0, 0.12)",
        colored: "0 10px 30px rgba(23, 45, 101, 0.3)", // Using primary color
        "colored-lg": "0 20px 40px rgba(23, 45, 101, 0.4)",
        "inner-soft": "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
        glow: "0 0 20px rgba(23, 45, 101, 0.4)", // Using primary color
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "21/9": "21 / 9",
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            lineHeight: "1.7",
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
            h1: {
              color: "#111827",
              fontWeight: "700",
              fontSize: "2.25em",
              marginTop: "0",
              marginBottom: "0.8888889em",
              lineHeight: "1.1111111",
            },
            h2: {
              color: "#111827",
              fontWeight: "600",
              fontSize: "1.5em",
              marginTop: "2em",
              marginBottom: "1em",
              lineHeight: "1.3333333",
            },
            h3: {
              color: "#111827",
              fontWeight: "600",
              fontSize: "1.25em",
              marginTop: "1.6em",
              marginBottom: "0.6em",
              lineHeight: "1.6",
            },
            a: {
              color: "#e66234", // Using secondary color for links
              "&:hover": {
                color: "#d44920", // Darker shade of secondary
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
  ],
};
